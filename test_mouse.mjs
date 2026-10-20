import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {JSDOM} from 'jsdom';import {ExpeditionWorld} from './world.js';
test('mouse capture, rejected capture fallback, touch drag, pause and HUD input layers',async()=>{
 const dom=new JSDOM(fs.readFileSync(new URL('./index.html',import.meta.url),'utf8')),{window}=dom;const old={window:globalThis.window,document:globalThis.document};Object.assign(globalThis,{window,document:window.document});const canvas=window.document.createElement('canvas');window.document.getElementById('world').append(canvas);canvas.setPointerCapture=()=>{};let requests=0;canvas.requestPointerLock=()=>{requests++;return Promise.reject(new Error('blocked'));};Object.defineProperty(window.document,'pointerLockElement',{writable:true,value:null});window.document.exitPointerLock=()=>{window.document.pointerLockElement=null;};
 const w=Object.create(ExpeditionWorld.prototype);Object.assign(w,{renderer:{domElement:canvas},enabled:true,landing:false,yaw:0,pitch:0,keys:{},body:{grounded:true}});w.installInput();
 const emit=(el,type,values)=>{const e=new window.Event(type);for(const [k,v] of Object.entries(values))Object.defineProperty(e,k,{value:v});el.dispatchEvent(e);};
 try{
  emit(canvas,'pointerdown',{pointerType:'mouse',button:0,pointerId:1,clientX:100,clientY:100});await Promise.resolve();assert.equal(requests,1);
  emit(canvas,'pointermove',{pointerId:1,clientX:140,clientY:110});assert.ok(Math.abs(w.yaw+.12)<1e-8);assert.ok(Math.abs(w.pitch+.03)<1e-8);
  emit(canvas,'pointerup',{});const released=w.yaw;emit(canvas,'pointermove',{pointerId:1,clientX:170,clientY:110});assert.equal(w.yaw,released);
  window.document.pointerLockElement=canvas;emit(window.document,'pointerlockchange',{});emit(window.document,'mousemove',{movementX:20,movementY:-10});assert.ok(Math.abs(w.yaw+.18)<1e-8);assert.ok(Math.abs(w.pitch)<1e-8);
  const locked=w.yaw;emit(canvas,'pointermove',{pointerId:1,clientX:500,clientY:500,movementX:20,movementY:10});assert.equal(w.yaw,locked,'pointer events must not double count locked mouse movement');
  w.setPaused(true);emit(window.document,'mousemove',{movementX:40,movementY:10});assert.equal(w.yaw,locked);w.setPaused(false);
  emit(canvas,'pointerdown',{pointerType:'touch',button:0,pointerId:7,clientX:100,clientY:100});emit(canvas,'pointermove',{pointerId:8,clientX:200,clientY:200});assert.equal(w.yaw,locked);emit(canvas,'pointermove',{pointerId:7,clientX:120,clientY:100});assert.ok(w.yaw<locked);assert.equal(requests,1,'touch must not request mouse lock');
  assert.equal(await w.lock(),false,'blocked requests return a fallback signal');
  const css=window.document.createElement('style');css.textContent=fs.readFileSync(new URL('./style.css',import.meta.url),'utf8');window.document.head.append(css);
  assert.equal(window.getComputedStyle(window.document.getElementById('world')).zIndex,'0');assert.equal(window.getComputedStyle(window.document.querySelector('main')).pointerEvents,'none');assert.equal(window.getComputedStyle(window.document.getElementById('mouseLook')).pointerEvents,'auto');assert.equal(window.getComputedStyle(window.document.getElementById('joystick')).pointerEvents,'auto');
 }finally{for(const remove of w.listeners)remove();Object.assign(globalThis,old);dom.window.close();}
});

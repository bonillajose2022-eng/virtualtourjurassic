import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {GLTFLoader} from './GLTFLoader.js';import {clone} from './SkeletonUtils.js';import {Box3,Vector3} from 'three';
test('all four GLBs parse, contain textures and animations, and have cloneable skeletons',async()=>{
 globalThis.self=globalThis;globalThis.createImageBitmap=async()=>({width:1024,height:1024,close(){}});
 try{for(const name of ['trex','triceratops','stegosaurus','allosaurus']){
  const bytes=fs.readFileSync(new URL('./'+name+'.glb',import.meta.url));assert.equal(bytes.toString('ascii',0,4),'glTF');const json=JSON.parse(bytes.toString('utf8',20,20+bytes.readUInt32LE(12)));assert.ok(json.images.length>0);assert.ok(!json.buffers.some(b=>b.uri));assert.ok(json.images.every(i=>i.bufferView!==undefined));
  const asset=await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');assert.ok(asset.animations.length>0);const box=new Box3().setFromObject(asset.scene),size=box.getSize(new Vector3());assert.ok([size.x,size.y,size.z].every(n=>n>0&&Number.isFinite(n)));let firstBone,otherBone;asset.scene.traverse(o=>{if(o.isBone&&!firstBone)firstBone=o;});const copy=clone(asset.scene);copy.traverse(o=>{if(o.isBone&&!otherBone)otherBone=o;});if(firstBone)assert.notEqual(firstBone,otherBone);console.log(name,'geometry / skeleton parsed; extents:',size.toArray().map(v=>v.toFixed(2)).join(', '));
 }}finally{delete globalThis.createImageBitmap;delete globalThis.self;}
});

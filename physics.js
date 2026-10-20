// Pure simulation helpers, shared by the renderer and automated tests.
export const MAP_RADIUS=235;
export const LANDMARKS=[{id:'forest',x:-30,z:-25},{id:'ridge',x:102,z:-92},{id:'valley',x:-108,z:-95},{id:'center',x:0,z:32},{id:'final',x:88,z:100}];
export function terrainHeight(x,z){const waves=2.5*Math.sin(x*.021)*Math.cos(z*.026)+1.3*Math.sin((x+z)*.045);const ridge=8*Math.exp(-((x-100)**2+(z+95)**2)/2200);return waves+ridge;}
export function stepJump(body,dt,requested){if(requested&&body.grounded){body.vy=8.5;body.grounded=false;}if(!body.grounded){body.vy-=22*dt;body.offset+=body.vy*dt;if(body.offset<=0){body.offset=0;body.vy=0;body.grounded=true;}}return body;}
export function movePlayer(body,forward,right,yaw,dt,sprint,colliders=[]){const norm=Math.max(1,Math.hypot(forward,right)),speed=sprint?11:6;let x=body.x+(-Math.sin(yaw)*forward+Math.cos(yaw)*right)/norm*speed*dt,z=body.z+(-Math.cos(yaw)*forward-Math.sin(yaw)*right)/norm*speed*dt;const len=Math.hypot(x,z);if(len>MAP_RADIUS){x=x/len*MAP_RADIUS;z=z/len*MAP_RADIUS;}for(const c of colliders){const dx=x-c.x,dz=z-c.z,d=Math.hypot(dx,dz),r=c.r+.45;if(d<r){const a=d>.001?dx/d:1,b=d>.001?dz/d:0;x=c.x+a*r;z=c.z+b*r;}}body.x=x;body.z=z;return body;}
export function nearestEncounter(x,z,actors,range=15){let nearest=null,dist=range;for(const a of actors){const d=Math.hypot(x-a.x,z-a.z)-a.radius;if(d<dist){nearest=a;dist=d;}}return nearest;}
export class EncounterGate{
 constructor(){this.active=null;this.ignored=new Set();}
 update(actor,actors,x,z){for(const id of this.ignored){const a=actors.find(a=>a.id===id);if(!a||Math.hypot(x-a.x,z-a.z)>a.radius+24)this.ignored.delete(id);}if(!actor){this.active=null;return null;}if(this.ignored.has(actor.id)||this.active===actor.id)return null;this.active=actor.id;return actor;}
 dismiss(){if(this.active)this.ignored.add(this.active);this.active=null;}
 reset(){this.active=null;this.ignored.clear();}
}

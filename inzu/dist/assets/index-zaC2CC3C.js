import{j as l,r as E,a as wt,u as Ge,e as wh,b as Th,C as wa,R as Cu,c as Eh,d as Sh,f as zn,H as At,E as Ah,g as Ph}from"./r3f-BYfzSZKb.js";import{e as bu,aY as Ta,n as Bs,D as Dh,M as wu,a5 as Ea,O as Sa,aZ as ki,o as Rh,k as Is,d as Ao,ax as Tu,f as zh,K as Bi,aS as Lh,aV as Nh,T as Oh,ar as Mh,as as ir,at as Jo,au as kr,ap as Eu,c as Wt,aX as zr,s as Su,a_ as Bh,aq as Ih,a$ as Vr,aK as jh,R as Fh,C as kh,S as Vh,Q as hl,v as Uh,b0 as Hh,ac as de,a3 as es}from"./three-core-C1IDen1x.js";import{g as we,L as Yh}from"./animation-B-NUKnBa.js";import{E as Gh,B as Wh,C as $h,N as Xh,a as qh,V as Zh}from"./postprocessing-C2WdUfpO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Ur=192;function Kh({type:t}){return l.jsxs(l.Fragment,{children:[t==="plane"&&l.jsx("planeGeometry",{args:[10,10,1,Ur]}),t==="sphere"&&l.jsx("icosahedronGeometry",{args:[1,Ur/3]}),t==="waterPlane"&&l.jsx("planeGeometry",{args:[10,10,Ur,Ur]})]})}function Qh(t){let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function Jh(t){let e=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return e?{r:parseInt(e[1]),g:parseInt(e[2]),b:parseInt(e[3])}:null}function zi(t){if(t.startsWith("#"))return Qh(t);if(t.startsWith("rgb"))return Jh(t);throw new Error("Invalid color format")}function mn(t=0){return t/255}var em=Object.create,Uo=Object.defineProperty,tm=Object.defineProperties,nm=Object.getOwnPropertyDescriptor,im=Object.getOwnPropertyDescriptors,rm=Object.getOwnPropertyNames,Po=Object.getOwnPropertySymbols,om=Object.getPrototypeOf,Aa=Object.prototype.hasOwnProperty,Au=Object.prototype.propertyIsEnumerable,ml=(t,e,n)=>e in t?Uo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,fe=(t,e)=>{for(var n in e||(e={}))Aa.call(e,n)&&ml(t,n,e[n]);if(Po)for(var n of Po(e))Au.call(e,n)&&ml(t,n,e[n]);return t},Vi=(t,e)=>tm(t,im(e)),oi=(t,e)=>{var n={};for(var i in t)Aa.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&Po)for(var i of Po(t))e.indexOf(i)<0&&Au.call(t,i)&&(n[i]=t[i]);return n},Lr=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),$e=(t,e)=>{for(var n in e)Uo(t,n,{get:e[n],enumerable:!0})},sm=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of rm(e))!Aa.call(t,r)&&r!==n&&Uo(t,r,{get:()=>e[r],enumerable:!(i=nm(e,r))||i.enumerable});return t},am=(t,e,n)=>(n=t!=null?em(om(t)):{},sm(!t||!t.__esModule?Uo(n,"default",{value:t,enumerable:!0}):n,t)),lm=({animate:t,range:e,rangeStart:n,rangeEnd:i,loop:r,loopDuration:o,reflection:s,uniforms:a,vertexShader:c,fragmentShader:u,onInit:f,shader:d})=>{let h=E.useRef(new bu),p=E.useMemo(()=>{let g=Object.entries(a),C=a.colors,_=zi(C[0]),y=zi(C[1]),m=zi(C[2]),v={uC1r:{value:mn(_?.r)},uC1g:{value:mn(_?.g)},uC1b:{value:mn(_?.b)},uC2r:{value:mn(y?.r)},uC2g:{value:mn(y?.g)},uC2b:{value:mn(y?.b)},uC3r:{value:mn(m?.r)},uC3g:{value:mn(m?.g)},uC3b:{value:mn(m?.b)}},x=g.reduce((T,[A,L])=>{let z=Ta.clone({[A]:{value:L}});return fe(fe({},T),z)},{}),b={userData:x,metalness:d==="glass"?0:.2,roughness:d==="glass"?.1:1-(typeof s=="number"?s:.1),side:Dh,onBeforeCompile:T=>{T.uniforms=fe(fe(fe({},T.uniforms),x),v),T.vertexShader=c,T.fragmentShader=u}};d==="glass"&&(b.transparent=!0,b.opacity=.3,b.transmission=.9,b.thickness=.5,b.clearcoat=1,b.clearcoatRoughness=0,b.ior=1.5,b.envMapIntensity=1);let w=new Bs(b);return g.forEach(([T])=>Object.defineProperty(w,T,{get:()=>w.uniforms[T].value,set:A=>w.uniforms[T].value=A})),f&&f(w),w},[a,c,u,f,s,d]);return E.useEffect(()=>()=>{p.dispose()},[p]),E.useEffect(()=>{t==="on"?h.current.start():h.current.stop()},[t]),wt(()=>{if(t==="on"&&p.userData.uTime){let g=h.current.getElapsedTime();r==="on"&&Number.isFinite(o)&&o>0?(g=g%o,p.userData.uLoop&&(p.userData.uLoop.value=1),p.userData.uLoopDuration&&(p.userData.uLoopDuration.value=o)):(p.userData.uLoop&&(p.userData.uLoop.value=0),e==="enabled"&&Number.isFinite(n)&&Number.isFinite(i)&&i>n&&(g=n+g,g>=i&&(g=n,h.current.start()))),p.userData.uTime.value=g}}),l.jsx("primitive",{attach:"material",object:p})},Pu={};$e(Pu,{fragment:()=>cm,vertex:()=>um});var cm=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor는 오브젝트의 베이스 색상 (환경이나 빛이 고려되지 않은 본연의
  // 색)

  // mix(x, y, a): a를 축으로 했을 때 가장 낮은 값에서 x값의 영향력을 100%, 가장
  // 높은 값에서 y값의 영향력을 100%로 만든다. smoothstep(x, y, a): a축을
  // 기준으로 x를 최소값, y를 최대값으로 그 사이의 값을 쪼갠다. x와 y 사이를
  // 0-100 사이의 그라디언트처럼 단계별로 표현하고, x 미만의 값은 0, y 이상의
  // 값은 100으로 처리

  // 1. smoothstep(-3.0, 3.0,vPos.x)로 x축의 그라디언트가 표현 될 범위를 -3,
  // 3으로 정한다.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))로 color1과 color3을
  // 위의 범위 안에서 그라디언트로 표현한다.
  // 예를 들어 color1이 노랑, color3이 파랑이라고 치면, x축 기준 -3부터 3까지
  // 노랑과 파랑 사이의 그라디언트가 나타나고, -3보다 작은 값에서는 계속 노랑,
  // 3보다 큰 값에서는 계속 파랑이 나타난다.
  // 3. mix()를 한 번 더 사용해서 위의 그라디언트와 color2를 z축 기준으로
  // 분배한다.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance2(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.
}
`,um=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  float t = uTime * uSpeed;
  
  // For seamless loops, sample noise using 4D-like circular interpolation
  vec3 noisePos = 0.43 * position * uNoiseDensity;
  float distortion;
  
  if (uLoop > 0.5) {
    // Create truly dynamic seamless loop using 4D noise simulation
    // Loop progress only depends on time and duration, not speed
    float loopProgress = uTime / uLoopDuration;
    float angle = loopProgress * 6.28318530718; // 2*PI
    
    // Radius scales with speed to maintain consistent visual speed
    // Larger radius = more distance traveled = faster perceived motion
    float radius = 5.0 * uSpeed;
    
    // Sample 4 noise values at cardinal points around the circle
    vec3 offset0 = vec3(cos(angle) * radius, sin(angle) * radius, 0.0);
    vec3 offset1 = vec3(cos(angle + 1.57079632679) * radius, sin(angle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(angle + 3.14159265359) * radius, sin(angle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(angle + 4.71238898038) * radius, sin(angle + 4.71238898038) * radius, 0.0);
    
    // Get noise at all 4 points
    float n0 = cnoise(noisePos + offset0);
    float n1 = cnoise(noisePos + offset1);
    float n2 = cnoise(noisePos + offset2);
    float n3 = cnoise(noisePos + offset3);
    
    // Smooth interpolation weights using cosine
    float w0 = (cos(angle) + 1.0) * 0.5;
    float w1 = (cos(angle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(angle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(angle + 4.71238898038) + 1.0) * 0.5;
    
    // Normalize weights
    float totalWeight = w0 + w1 + w2 + w3;
    w0 /= totalWeight;
    w1 /= totalWeight;
    w2 /= totalWeight;
    w3 /= totalWeight;
    
    // Blend all samples with amplitude boost to match single-sample strength
    // Blending reduces amplitude by ~30%, so we compensate
    float blendedNoise = n0 * w0 + n1 * w1 + n2 * w2 + n3 * w3;
    distortion = 0.75 * blendedNoise * 1.5;
  } else {
    // Normal linear time progression
    distortion = 0.75 * cnoise(noisePos + t);
  }

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,Du={};$e(Du,{fragment:()=>fm,vertex:()=>dm});var fm=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.
varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;
varying vec3 color1;
varying vec3 color2;
varying vec3 color3;
varying float distanceToCenter;


// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {
  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;
#include <clipping_planes_fragment>

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));
  // distanceToCenter로 중심점과의 거리를 구함.

  vec4 diffuseColor =
      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),
               distanceToCenter),
           1);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
#ifdef TRANSMISSION
  float totalTransmission = transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
// #include <transmissionmap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
  vec3 outgoingLight =
      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
      reflectedLight.directSpecular + reflectedLight.indirectSpecular;
//위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
#ifdef TRANSMISSION
  diffuseColor.a *=
      mix(saturate(1. - totalTransmission +
                   linearToRelativeLuminance2(reflectedLight.directSpecular +
                                             reflectedLight.indirectSpecular)),
          1.0, metalness);
#endif
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}
`,dm=`// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


//-------- start here ------------

varying vec3 vNormal;
uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying vec3 vViewPosition;

#define STANDARD
#ifndef FLAT_SHADED
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif

#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>


// rotation
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  
  // For seamless loops, sample noise using 4D-like circular interpolation
  float distortion;
  float angle;
  
  if (uLoop > 0.5) {
    // Create truly dynamic seamless loop using 4D noise simulation
    float loopProgress = uTime / uLoopDuration;
    float loopAngle = loopProgress * 6.28318530718; // 2*PI
    
    // Radius scales with speed to maintain consistent visual speed
    float radius = 5.0 * uSpeed;
    
    // Sample 4 noise values at cardinal points
    vec3 offset0 = vec3(cos(loopAngle) * radius, sin(loopAngle) * radius, 0.0);
    vec3 offset1 = vec3(cos(loopAngle + 1.57079632679) * radius, sin(loopAngle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(loopAngle + 3.14159265359) * radius, sin(loopAngle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(loopAngle + 4.71238898038) * radius, sin(loopAngle + 4.71238898038) * radius, 0.0);
    
    // Get noise at all 4 points
    float n0 = pnoise((normal + offset0) * uNoiseDensity, vec3(10.0));
    float n1 = pnoise((normal + offset1) * uNoiseDensity, vec3(10.0));
    float n2 = pnoise((normal + offset2) * uNoiseDensity, vec3(10.0));
    float n3 = pnoise((normal + offset3) * uNoiseDensity, vec3(10.0));
    
    // Smooth interpolation weights
    float w0 = (cos(loopAngle) + 1.0) * 0.5;
    float w1 = (cos(loopAngle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(loopAngle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(loopAngle + 4.71238898038) + 1.0) * 0.5;
    
    float totalWeight = w0 + w1 + w2 + w3;
    w0 /= totalWeight;
    w1 /= totalWeight;
    w2 /= totalWeight;
    w3 /= totalWeight;
    
    // Blend samples with amplitude boost to match single-sample strength
    float blendedNoise = n0 * w0 + n1 * w1 + n2 * w2 + n3 * w3;
    distortion = blendedNoise * 1.5 * uNoiseStrength;
    
    // Apply loop to spiral effect with blended offset
    float angleOffset = offset0.x * w0 + offset1.x * w1 + offset2.x * w2 + offset3.x * w3;
    angle = sin(uv.y * uFrequency + angleOffset) * uAmplitude;
  } else {
    // Normal linear time progression
    distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
    angle = sin(uv.y * uFrequency + t) * uAmplitude;
  }
  
  vec3 pos = position + (normal * distortion);
  pos = rotateY(pos, angle);

  vPos = pos;
  vDistort = distortion;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,Ru={};$e(Ru,{fragment:()=>hm,vertex:()=>mm});var hm=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor는 오브젝트의 베이스 색상 (환경이나 빛이 고려되지 않은 본연의
  // 색)

  // mix(x, y, a): a를 축으로 했을 때 가장 낮은 값에서 x값의 영향력을 100%, 가장
  // 높은 값에서 y값의 영향력을 100%로 만든다. smoothstep(x, y, a): a축을
  // 기준으로 x를 최소값, y를 최대값으로 그 사이의 값을 쪼갠다. x와 y 사이를
  // 0-100 사이의 그라디언트처럼 단계별로 표현하고, x 미만의 값은 0, y 이상의
  // 값은 100으로 처리

  // 1. smoothstep(-3.0, 3.0,vPos.x)로 x축의 그라디언트가 표현 될 범위를 -3,
  // 3으로 정한다.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))로 color1과 color3을
  // 위의 범위 안에서 그라디언트로 표현한다.
  // 예를 들어 color1이 노랑, color3이 파랑이라고 치면, x축 기준 -3부터 3까지
  // 노랑과 파랑 사이의 그라디언트가 나타나고, -3보다 작은 값에서는 계속 노랑,
  // 3보다 큰 값에서는 계속 파랑이 나타난다.
  // 3. mix()를 한 번 더 사용해서 위의 그라디언트와 color2를 z축 기준으로
  // 분배한다.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance2(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.
}
`,mm=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 
vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  
  // For seamless loops, sample noise using 4D-like circular interpolation
  vec3 noisePos = 0.43 * position * uNoiseDensity;
  float distortion;
  
  if (uLoop > 0.5) {
    // Create truly dynamic seamless loop using 4D noise simulation
    float loopProgress = uTime / uLoopDuration;
    float angle = loopProgress * 6.28318530718; // 2*PI
    
    // Radius scales with speed to maintain consistent visual speed
    float radius = 5.0 * uSpeed;
    
    // Sample 4 noise values at cardinal points
    vec3 offset0 = vec3(cos(angle) * radius, sin(angle) * radius, 0.0);
    vec3 offset1 = vec3(cos(angle + 1.57079632679) * radius, sin(angle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(angle + 3.14159265359) * radius, sin(angle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(angle + 4.71238898038) * radius, sin(angle + 4.71238898038) * radius, 0.0);
    
    // Get noise at all 4 points
    float n0 = cnoise(noisePos + offset0);
    float n1 = cnoise(noisePos + offset1);
    float n2 = cnoise(noisePos + offset2);
    float n3 = cnoise(noisePos + offset3);
    
    // Smooth interpolation weights
    float w0 = (cos(angle) + 1.0) * 0.5;
    float w1 = (cos(angle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(angle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(angle + 4.71238898038) + 1.0) * 0.5;
    
    float totalWeight = w0 + w1 + w2 + w3;
    w0 /= totalWeight;
    w1 /= totalWeight;
    w2 /= totalWeight;
    w3 /= totalWeight;
    
    // Blend samples with amplitude boost to match single-sample strength
    float blendedNoise = n0 * w0 + n1 * w1 + n2 * w2 + n3 * w3;
    distortion = 0.75 * blendedNoise * 1.5;
  } else {
    // Normal linear time progression
    distortion = 0.75 * cnoise(noisePos + t);
  }

  vec3 pos = position + normal * distortion * uNoiseStrength;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,zu={};$e(zu,{plane:()=>Pu,sphere:()=>Du,waterPlane:()=>Ru});var Lu={};$e(Lu,{fragment:()=>pm,vertex:()=>gm});var pm=`// Glass Plane Fragment Shader - Transparency & Refraction

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

// transmission is already defined by Three.js when TRANSMISSION is enabled
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif

varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif

#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - dot(viewDirection, normal), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  return vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  #else
  return vec3(0.5);
  #endif
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Glass-specific calculations
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // Base glass color gradient
  vec3 gradientColor = mix(uColor1, uColor2, vUv.y);
  gradientColor = mix(gradientColor, uColor3, fresnelFactor);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, uRefraction, uChromaticAberration);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Mix reflection and refraction based on Fresnel
  vec3 envColor = mix(refractionColor, reflectionColor, fresnelFactor * uReflectivity);
  
  // Combine with gradient color
  vec3 finalColor = mix(gradientColor, envColor, 0.7);
  
  // Apply transparency
  float finalAlpha = mix(uTransparency, 1.0, fresnelFactor * 0.5);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our glass color contribution
  outgoingLight += finalColor * 0.8;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
`,gm=`// Glass Plane Vertex Shader - Refraction & Transparency Effects

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;

uniform float uTime;
uniform float uSpeed;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uNoiseStrength;
uniform float uDistortion;

// Noise functions for glass distortion
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
    dot(p2, x2), dot(p3, x3)));
}

void main() {
  #include <uv_pars_vertex>
  #include <uv_vertex>
  #include <uv2_pars_vertex>
  #include <uv2_vertex>
  #include <color_pars_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  
  #ifndef FLAT_SHADED
  vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
  vTangent = normalize(transformedTangent);
  vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  
  // Pass UV coordinates
  vUv = uv;

  // Calculate time-based animation
  float time = uTime * uSpeed;
  
  // Create subtle wave distortion for glass effect
  float waveX = sin(position.x * uWaveFrequency + time) * uWaveAmplitude;
  float waveY = cos(position.y * uWaveFrequency + time) * uWaveAmplitude;
  float waveZ = sin(position.z * uWaveFrequency + time * 0.5) * uWaveAmplitude * 0.5;
  
  // Add noise for organic glass distortion
  vec3 noisePos = position + vec3(time * 0.1);
  float noise = snoise(noisePos * 0.5) * uNoiseStrength;
  
  // Apply distortion to transformed position
  transformed += vec3(waveX, waveY, waveZ) * uDistortion + normal * noise;
  
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vPosition = transformed;
  
  // Calculate world position for refraction
  vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
  vGlassWorldPos = worldPosition.xyz;
  
  // Calculate reflection and refraction vectors
  vec3 worldNormal = normalize(mat3(modelMatrix) * normal);
  vec3 viewVector = normalize(cameraPosition - worldPosition.xyz);
  
  // Reflection vector
  vReflect = reflect(-viewVector, worldNormal);
  
  // Refraction vector with index of refraction for glass (1.5)
  float ior = 1.5;
  vRefract = refract(-viewVector, worldNormal, 1.0 / ior);
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
}
`,Nu={};$e(Nu,{fragment:()=>vm,vertex:()=>xm});var vm=`// Glass Sphere Fragment Shader - Transparency & Refraction

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

// transmission is already defined by Three.js when TRANSMISSION is enabled
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif

varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif

#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vDistortion;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - abs(dot(viewDirection, normal)), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  return vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  #else
  return vec3(0.5);
  #endif
}

// Caustics simulation for sphere
float caustics(vec3 position, float time) {
  float c1 = sin(position.x * 4.0 + time) * sin(position.y * 4.0 + time * 0.8);
  float c2 = sin(position.z * 3.0 - time * 1.2) * sin(position.x * 3.0 + time);
  return (c1 + c2) * 0.5 + 0.5;
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Glass-specific calculations
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // For sphere, use spherical UV mapping for gradient
  float sphericalU = atan(vPosition.z, vPosition.x) / (2.0 * PI) + 0.5;
  float sphericalV = acos(vPosition.y / length(vPosition)) / PI;
  vec2 sphericalUV = vec2(sphericalU, sphericalV);
  
  // Create color gradient based on spherical coordinates
  vec3 gradientColor = mix(uColor1, uColor2, sphericalUV.y);
  gradientColor = mix(gradientColor, uColor3, pow(fresnelFactor, 1.5));
  
  // Add caustics effect for sphere
  float causticsValue = caustics(vGlassWorldPos, uTime);
  gradientColor += vec3(causticsValue * 0.1);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration (enhanced for sphere)
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    float chromaticIntensity = uChromaticAberration * (1.0 + vDistortion * 0.5);
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, uRefraction, chromaticIntensity);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Mix reflection and refraction based on Fresnel (stronger effect for sphere)
  vec3 envColor = mix(refractionColor, reflectionColor, fresnelFactor * uReflectivity);
  
  // Add inner glow effect for sphere
  float innerGlow = pow(1.0 - abs(dot(viewDirection, worldNormal)), 3.0);
  vec3 glowColor = mix(uColor2, uColor3, innerGlow) * innerGlow * 0.5;
  
  // Combine all effects
  vec3 finalColor = mix(gradientColor, envColor, 0.8) + glowColor;
  
  // Apply transparency with sphere thickness consideration
  float thickness = 1.0 - pow(abs(dot(viewDirection, worldNormal)), 0.5);
  float finalAlpha = mix(uTransparency * thickness, 1.0, fresnelFactor * 0.7);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our glass color contribution
  outgoingLight += finalColor * 0.9;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
`,xm=`// Glass Sphere Vertex Shader - Refraction & Transparency Effects

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vDistortion;

uniform float uTime;
uniform float uSpeed;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uNoiseStrength;
uniform float uDistortion;

// Noise functions for glass distortion
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
    dot(p2, x2), dot(p3, x3)));
}

void main() {
  #include <uv_pars_vertex>
  #include <uv_vertex>
  #include <uv2_pars_vertex>
  #include <uv2_vertex>
  #include <color_pars_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  
  #ifndef FLAT_SHADED
  vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
  vTangent = normalize(transformedTangent);
  vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  
  // Pass UV coordinates
  vUv = uv;

  // Calculate time-based animation
  float time = uTime * uSpeed;
  
  // For sphere, use spherical coordinates for better distortion
  float theta = atan(position.z, position.x);
  float phi = acos(position.y / length(position));
  
  // Create waves based on spherical coordinates
  float waveTheta = sin(theta * uWaveFrequency * 2.0 + time) * uWaveAmplitude;
  float wavePhi = cos(phi * uWaveFrequency + time * 1.5) * uWaveAmplitude;
  
  // Add noise for organic glass distortion
  vec3 noisePos = position + vec3(time * 0.1);
  float noise = snoise(noisePos * 0.8) * uNoiseStrength;
  
  // Calculate distortion based on position on sphere
  float distortionAmount = (waveTheta + wavePhi) * uDistortion + noise;
  vDistortion = distortionAmount;
  
  // Apply distortion along normal for sphere
  transformed += normal * distortionAmount;
  
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vPosition = transformed;
  
  // Calculate world position for refraction
  vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
  vGlassWorldPos = worldPosition.xyz;
  
  // Calculate reflection and refraction vectors
  vec3 worldNormal = normalize(mat3(modelMatrix) * normal);
  vec3 viewVector = normalize(cameraPosition - worldPosition.xyz);
  
  // Reflection vector
  vReflect = reflect(-viewVector, worldNormal);
  
  // Refraction vector with index of refraction for glass (1.5)
  // For sphere, adjust IOR based on curvature
  float ior = 1.5 + sin(theta * 2.0 + time) * 0.1;
  vRefract = refract(-viewVector, worldNormal, 1.0 / ior);
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
}
`,Ou={};$e(Ou,{fragment:()=>ym,vertex:()=>_m});var ym=`// Glass WaterPlane Fragment Shader - Liquid Glass Effect

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

// transmission is already defined by Three.js when TRANSMISSION is enabled
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif

varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif

#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for liquid glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js
uniform float uLiquidEffect;
uniform float uFoamIntensity;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vWaveHeight;
varying vec3 vWaveNormal;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - abs(dot(viewDirection, normal)), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  vec3 result = vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  
  // Add distortion based on wave height
  float distortion = vWaveHeight * 0.1;
  result = mix(result, textureCube(envMap, refractedG + vec3(distortion)).rgb, 0.3);
  #else
  vec3 result = vec3(0.5);
  #endif
  
  return result;
}

// Foam effect for water surface
float foam(vec2 uv, float waveHeight, float time) {
  float foamThreshold = 0.3;
  float foamAmount = smoothstep(foamThreshold - 0.1, foamThreshold + 0.1, abs(waveHeight));
  
  // Add foam texture pattern
  float foamPattern = sin(uv.x * 40.0 + time) * cos(uv.y * 30.0 - time * 0.5);
  foamPattern += sin(uv.x * 25.0 - time * 0.8) * sin(uv.y * 35.0 + time);
  foamPattern = clamp(foamPattern * 0.5 + 0.5, 0.0, 1.0);
  
  return foamAmount * foamPattern;
}

// Caustics for underwater effect
vec3 caustics(vec3 position, float time) {
  float c1 = sin(position.x * 6.0 + time * 1.5) * sin(position.z * 6.0 + time);
  float c2 = cos(position.x * 4.0 - time) * cos(position.z * 5.0 + time * 1.2);
  float c3 = sin((position.x + position.z) * 3.0 + time * 0.8);
  
  float causticPattern = (c1 + c2 + c3) / 3.0;
  causticPattern = pow(max(0.0, causticPattern), 2.0);
  
  return vec3(causticPattern) * vec3(0.3, 0.6, 1.0);
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Use wave normal for more accurate water surface
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vWaveNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // Water color gradient with depth effect
  float depth = 1.0 - abs(vWaveHeight) * 2.0;
  vec3 shallowColor = mix(uColor1, uColor2, vUv.y);
  vec3 deepColor = mix(uColor2, uColor3, depth);
  vec3 gradientColor = mix(shallowColor, deepColor, fresnelFactor);
  
  // Add foam effect
  float foamAmount = foam(vUv, vWaveHeight, uTime) * uFoamIntensity;
  vec3 foamColor = vec3(1.0, 1.0, 1.0);
  gradientColor = mix(gradientColor, foamColor, foamAmount);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  
  // Add slight blur to reflection for water effect
  vec3 blurredReflection = reflectionColor;
  for (int i = 0; i < 4; i++) {
    vec3 offset = vec3(
      sin(float(i) * 2.0) * 0.01,
      0.0,
      cos(float(i) * 2.0) * 0.01
    );
    blurredReflection += textureCube(envMap, vReflect + offset).rgb * envMapIntensity;
  }
  blurredReflection /= 5.0;
  reflectionColor = mix(reflectionColor, blurredReflection, uLiquidEffect);
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration (stronger for water)
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    float waterIOR = 1.33 + vWaveHeight * 0.1;
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, waterIOR, uChromaticAberration * 1.5);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Add caustics to refraction
  vec3 causticsColor = caustics(vGlassWorldPos, uTime);
  refractionColor += causticsColor * 0.3 * uLiquidEffect;
  
  // Mix reflection and refraction based on Fresnel and wave
  float reflectionMix = fresnelFactor * uReflectivity * (1.0 + abs(vWaveHeight));
  vec3 envColor = mix(refractionColor, reflectionColor, clamp(reflectionMix, 0.0, 1.0));
  
  // Combine all effects
  vec3 finalColor = mix(gradientColor, envColor, 0.85);
  
  // Apply transparency with wave variation
  float waveAlpha = 1.0 - abs(vWaveHeight) * 0.3;
  float finalAlpha = mix(uTransparency * waveAlpha, 1.0, fresnelFactor * 0.6 + foamAmount * 0.4);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our liquid glass color contribution
  outgoingLight += finalColor * 0.95;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
`,_m=`// Glass WaterPlane Vertex Shader - Liquid Glass Effect

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vWaveHeight;
varying vec3 vWaveNormal;

uniform float uTime;
uniform float uSpeed;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uNoiseStrength;
uniform float uDistortion;
uniform float uFlowSpeed;
uniform vec2 uFlowDirection;

// Noise functions for water-like glass distortion
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
    dot(p2, x2), dot(p3, x3)));
}

// Water wave function
vec3 waterWave(vec2 pos, float time) {
  // Flow effect
  vec2 flowPos = pos + uFlowDirection * time * uFlowSpeed;
  
  // Multiple wave layers for realistic water
  float wave1 = sin(flowPos.x * uWaveFrequency + time) * cos(flowPos.y * uWaveFrequency * 0.8 + time * 0.7);
  float wave2 = sin(flowPos.x * uWaveFrequency * 1.7 - time * 1.3) * sin(flowPos.y * uWaveFrequency * 1.3 + time);
  float wave3 = cos(flowPos.x * uWaveFrequency * 0.5 + time * 0.5) * sin(flowPos.y * uWaveFrequency * 0.6 - time * 0.8);
  
  // Combine waves
  float height = (wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2) * uWaveAmplitude;
  
  // Calculate wave normals
  float dx = cos(flowPos.x * uWaveFrequency + time) * uWaveFrequency * 0.5 * uWaveAmplitude;
  float dz = -sin(flowPos.y * uWaveFrequency * 0.8 + time * 0.7) * uWaveFrequency * 0.8 * 0.5 * uWaveAmplitude;
  
  return vec3(dx, height, dz);
}

void main() {
  #include <uv_pars_vertex>
  #include <uv_vertex>
  #include <uv2_pars_vertex>
  #include <uv2_vertex>
  #include <color_pars_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  
  // Pass UV coordinates
  vUv = uv;

  // Calculate time-based animation
  float time = uTime * uSpeed;
  
  // Calculate water waves
  vec3 waveData = waterWave(position.xz, time);
  float waveHeight = waveData.y;
  vec2 waveGradient = waveData.xz;
  
  // Add noise for organic water movement
  vec3 noisePos = vec3(position.x, position.y, position.z) + vec3(time * 0.05);
  float noise = snoise(noisePos * 1.2) * uNoiseStrength * 0.5;
  
  // Store wave height for fragment shader
  vWaveHeight = waveHeight + noise;
  
  // Calculate perturbed normal for water surface
  vec3 waveNormal = normalize(vec3(-waveGradient.x, 1.0, -waveGradient.y));
  vWaveNormal = waveNormal;
  
  // Blend original normal with wave normal
  vec3 blendedNormal = normalize(mix(normal, waveNormal, 0.7));
  
  #ifndef FLAT_SHADED
  vNormal = normalize(mat3(modelViewMatrix) * blendedNormal);
  #ifdef USE_TANGENT
  vTangent = normalize(transformedTangent);
  vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  
  // Apply wave displacement and additional distortion
  transformed.y += waveHeight + noise;
  transformed += blendedNormal * uDistortion * noise;
  
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vPosition = transformed;
  
  // Calculate world position for refraction
  vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
  vGlassWorldPos = worldPosition.xyz;
  
  // Calculate reflection and refraction vectors with wave normal
  vec3 worldNormal = normalize(mat3(modelMatrix) * blendedNormal);
  vec3 viewVector = normalize(cameraPosition - worldPosition.xyz);
  
  // Reflection vector
  vReflect = reflect(-viewVector, worldNormal);
  
  // Refraction vector with varying IOR for water effect
  float ior = 1.33 + sin(time + position.x * 2.0) * 0.1; // Water IOR ~1.33
  vRefract = refract(-viewVector, worldNormal, 1.0 / ior);
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
}
`,Mu={};$e(Mu,{plane:()=>Lu,sphere:()=>Nu,waterPlane:()=>Ou});var Bu={};$e(Bu,{fragment:()=>Cm,vertex:()=>bm});var Cm=`uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;


varying vec3 vNormal;
varying vec3 vPos;

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  gl_FragColor = vec4(color1 * vPos.x + color2 * vPos.y + color3 * vPos.z, 1.);

}
`,bm=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  // vNormal = normal;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,Iu={};$e(Iu,{fragment:()=>wm,vertex:()=>Tm});var wm=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.
varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;
varying vec3 color1;
varying vec3 color2;
varying vec3 color3;
varying float distanceToCenter;
void main() {
  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;
#include <clipping_planes_fragment>

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));
  // distanceToCenter로 중심점과의 거리를 구함.

  vec4 diffuseColor =
      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),
               distanceToCenter),
           1);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
#ifdef TRANSMISSION
  float totalTransmission = transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
// #include <transmissionmap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
  vec3 outgoingLight =
      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
      reflectedLight.directSpecular + reflectedLight.indirectSpecular;
//위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
#ifdef TRANSMISSION
  diffuseColor.a *=
      mix(saturate(1. - totalTransmission +
                   linearToRelativeLuminance(reflectedLight.directSpecular +
                                             reflectedLight.indirectSpecular)),
          1.0, metalness);
#endif
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}
`,Tm=`// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


//-------- start here ------------

varying vec3 vNormal;
uniform float uTime;
uniform float uSpeed;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying vec3 vViewPosition;

#define STANDARD
#ifndef FLAT_SHADED
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif

#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>


// rotation
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  float distortion =
      pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
  vec3 pos = position + (normal * distortion);
  float angle = sin(uv.y * uFrequency + t) * uAmplitude;
  pos = rotateY(pos, angle);

  vPos = pos;
  vDistort = distortion;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,ju={};$e(ju,{fragment:()=>Em,vertex:()=>Sm});var Em=`uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;


varying vec3 vNormal;
varying vec3 vPos;

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  gl_FragColor = vec4(color1 * vPos.x + color2 * vPos.y + color3 * vPos.z, 1.);

}
`,Sm=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  // vNormal = normal;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,Fu={};$e(Fu,{plane:()=>Bu,sphere:()=>Iu,waterPlane:()=>ju});var ku={};$e(ku,{fragment:()=>Am,vertex:()=>Pm});var Am=`// Cosmic Plane Fragment Shader - Holographic Gradient

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vHolographicIntensity;
varying float vCosmicWave;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Holographic helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Holographic Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.2; // More reflective for holographic effect

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Create holographic interference patterns
  float interference1 = sin(vPos.x * 20.0 + t * 3.0) * cos(vPos.y * 15.0 + t * 2.0);
  float interference2 = sin(vPos.x * 35.0 + t * 4.0) * sin(vPos.y * 30.0 + t * 3.5);
  float interference3 = cos(vPos.x * 50.0 + t * 5.0) * cos(vPos.y * 45.0 + t * 4.5);
  
  // Combine interference patterns
  float holographicPattern = (interference1 + interference2 * 0.5 + interference3 * 0.25) / 1.75;
  
  // Create cosmic shimmer effect
  float shimmer = noise2D(vPos.xy * 40.0 + t * 2.0) * 0.3;
  float cosmicGlow = noise2D(vPos.xy * 8.0 + t * 0.5) * 0.5;
  
  // Holographic color shifting
  vec3 holographicShift = vec3(
    sin(vPos.x * 10.0 + t * 2.0 + 0.0) * 0.1,
    sin(vPos.x * 10.0 + t * 2.0 + 2.094) * 0.1,  // 120 degrees
    sin(vPos.x * 10.0 + t * 2.0 + 4.188) * 0.1   // 240 degrees
  );
  
  // Enhanced gradient mixing with cosmic effects
  float gradientX = smoothstep(-4.0, 4.0, vPos.x + holographicPattern * 2.0);
  float gradientY = smoothstep(-4.0, 4.0, vPos.y + vCosmicWave * 1.5);
  float gradientZ = smoothstep(-2.0, 2.0, vPos.z + shimmer);
  
  // Multi-layer color mixing for depth
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.7 + gradientZ * 0.3
  );
  
  // Apply holographic color shifts
  vec3 holographicColor = baseGradient + holographicShift;
  
  // Add cosmic glow and shimmer
  vec3 cosmicEnhancement = vec3(
    cosmicGlow * 0.2,
    shimmer * 0.15,
    (cosmicGlow + shimmer) * 0.1
  );
  
  // Holographic intensity modulation
  float intensityMod = 1.0 + vHolographicIntensity * 0.5 + abs(holographicPattern) * 0.3;
  
  // Final color with cosmic and holographic effects
  vec3 finalColor = (holographicColor + cosmicEnhancement) * intensityMod;
  
  // Add subtle iridescence
  float iridescence = sin(vPos.x * 25.0 + t * 3.0) * cos(vPos.y * 20.0 + t * 2.5) * 0.1;
  finalColor += vec3(iridescence * 0.2, iridescence * 0.3, iridescence * 0.4);

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Holographic Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.1; // Add some emission for glow

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                      reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                      totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`,Pm=`// Cosmic Plane Vertex Shader - Holographic Effect
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- Holographic Effect Functions ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

mat3 rotation3dX(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }
vec3 rotateX(vec3 v, float angle) { return rotation3dX(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vHolographicIntensity;
varying float vCosmicWave;

uniform float uTime;
uniform float uSpeed;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- Cosmic Holographic Effect ------------
  vUv = uv;
  
  float t = uTime * uSpeed;
  
  // Create holographic interference patterns
  float holographicPattern = sin(position.x * 15.0 + t * 2.0) * 
                            sin(position.y * 12.0 + t * 1.5) * 0.1;
  
  // Cosmic wave distortion
  float cosmicWave = cnoise(position * uNoiseDensity * 0.5 + vec3(t * 0.3, t * 0.2, t * 0.4));
  vCosmicWave = cosmicWave;
  
  // Multi-layer noise for depth
  float noise1 = cnoise(position * uNoiseDensity * 2.0 + t * 0.8);
  float noise2 = cnoise(position * uNoiseDensity * 0.3 + t * 0.2) * 0.5;
  float noise3 = cnoise(position * uNoiseDensity * 4.0 + t * 1.2) * 0.25;
  
  float combinedNoise = noise1 + noise2 + noise3;
  
  // Holographic shimmer effect
  float shimmer = sin(position.x * 30.0 + t * 4.0) * 
                  cos(position.y * 25.0 + t * 3.0) * 0.05;
  
  // Calculate holographic intensity for fragment shader
  vHolographicIntensity = abs(holographicPattern) + abs(shimmer) * 2.0;
  
  // Apply displacement with holographic and cosmic effects
  float totalDisplacement = (combinedNoise + holographicPattern + shimmer) * uNoiseStrength * uLoadingTime;
  
  vec3 pos = position + normal * totalDisplacement;
  vPos = pos;
  
  // Add subtle rotation effect for cosmic feel
  pos = rotateY(pos, sin(t * 0.1) * 0.05);
  pos = rotateX(pos, cos(t * 0.07) * 0.03);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,Vu={};$e(Vu,{fragment:()=>Dm,vertex:()=>Rm});var Dm=`// Cosmic Sphere Fragment Shader - Nebula Particle Effect

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vNebulaIntensity;
varying float vParticleDensity;
varying vec3 vCosmicSwirl;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Nebula helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// Fractal Brownian Motion for complex nebula patterns
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 5; i++) {
        value += amplitude * noise2D(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}

// Star field generation
float stars(vec2 p, float density) {
    vec2 n = floor(p * density);
    vec2 f = fract(p * density);
    
    float d = 1.0;
    for(int i = -1; i <= 1; i++) {
        for(int j = -1; j <= 1; j++) {
            vec2 g = vec2(float(i), float(j));
            vec2 o = hash(n + g) * vec2(1.0);
            vec2 r = g + o - f;
            d = min(d, dot(r, r));
        }
    }
    
    return 1.0 - smoothstep(0.0, 0.02, sqrt(d));
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Nebula Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.1; // Very reflective for cosmic shine

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Calculate distance from center for radial effects
  float distanceFromCenter = length(vPos);
  float angle = atan(vPos.y, vPos.x);
  
  // Create complex nebula patterns using FBM
  vec2 nebulaCoords = vPos.xy * 3.0 + vCosmicSwirl.xy;
  float nebulaPattern1 = fbm(nebulaCoords + t * 0.1);
  float nebulaPattern2 = fbm(nebulaCoords * 2.0 + t * 0.15);
  float nebulaPattern3 = fbm(nebulaCoords * 4.0 + t * 0.2);
  
  // Combine nebula patterns
  float combinedNebula = (nebulaPattern1 + nebulaPattern2 * 0.5 + nebulaPattern3 * 0.25) / 1.75;
  
  // Create particle-like bright spots
  float particleField = stars(vPos.xy * 20.0 + t * 0.5, 50.0);
  float microParticles = stars(vPos.xy * 80.0 + t * 1.0, 200.0) * 0.5;
  
  // Create cosmic dust clouds
  float dustClouds = fbm(vPos.xy * 8.0 + t * 0.05) * 0.3;
  
  // Energy streams
  float energyStream1 = sin(vPos.x * 15.0 + t * 3.0 + angle * 2.0) * 0.1;
  float energyStream2 = cos(vPos.y * 20.0 + t * 2.5 + distanceFromCenter * 5.0) * 0.1;
  
  // Cosmic gradient mixing with nebula influence
  float gradientX = smoothstep(-3.0, 3.0, vPos.x + combinedNebula * 2.0 + vCosmicSwirl.x * 3.0);
  float gradientY = smoothstep(-3.0, 3.0, vPos.y + vNebulaIntensity * 1.5 + vCosmicSwirl.y * 2.0);
  float gradientZ = smoothstep(-2.0, 2.0, vPos.z + dustClouds * 2.0);
  
  // Multi-layer color mixing
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.6 + gradientZ * 0.4
  );
  
  // Add nebula color variations
  vec3 nebulaColor = baseGradient;
  nebulaColor.r += combinedNebula * 0.3 + energyStream1;
  nebulaColor.g += vNebulaIntensity * 0.2 + energyStream2;
  nebulaColor.b += dustClouds * 0.4 + abs(vCosmicSwirl.z) * 0.5;
  
  // Add particle brightness
  vec3 particleGlow = vec3(
    particleField * 0.8 + microParticles * 0.4,
    particleField * 0.6 + microParticles * 0.3,
    particleField * 0.9 + microParticles * 0.5
  );
  
  // Create pulsing cosmic energy
  float cosmicPulse = sin(t * 1.5 + distanceFromCenter * 3.0) * 0.1 + 1.0;
  
  // Combine all effects
  vec3 finalColor = (nebulaColor + particleGlow * 2.0) * cosmicPulse;
  
  // Add cosmic rim lighting effect
  float rimLight = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition))), 2.0);
  finalColor += rimLight * 0.3 * (color1 + color2 + color3) / 3.0;
  
  // Enhance particle density areas
  finalColor = mix(finalColor, finalColor * 1.5, vParticleDensity * 0.5);
  
  // Add subtle color temperature variation
  float temperature = sin(angle * 3.0 + t * 0.8) * 0.1;
  finalColor.r += temperature * 0.1;
  finalColor.b -= temperature * 0.1;

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Cosmic Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.2; // Strong emission for nebula glow

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                      reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                      totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`,Rm=`// Cosmic Sphere Vertex Shader - Nebula Effect
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- Nebula Effect Functions ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

mat3 rotation3dX(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c);
}

mat3 rotation3dZ(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }
vec3 rotateX(vec3 v, float angle) { return rotation3dX(angle) * v; }
vec3 rotateZ(vec3 v, float angle) { return rotation3dZ(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vNebulaIntensity;
varying float vParticleDensity;
varying vec3 vCosmicSwirl;

uniform float uTime;
uniform float uSpeed;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- Cosmic Nebula Effect ------------
  vUv = uv;
  
  float t = uTime * uSpeed;
  
  // Create swirling nebula patterns
  vec3 swirlCenter = vec3(0.0, 0.0, 0.0);
  vec3 toCenter = position - swirlCenter;
  float distanceFromCenter = length(toCenter);
  
  // Create spiral motion
  float angle = atan(toCenter.y, toCenter.x);
  float spiralAngle = angle + distanceFromCenter * 2.0 + t * 0.5;
  
  // Multi-octave noise for nebula density
  float nebula1 = cnoise(position * uNoiseDensity * 0.8 + vec3(t * 0.2, t * 0.3, t * 0.1));
  float nebula2 = cnoise(position * uNoiseDensity * 1.5 + vec3(t * 0.4, t * 0.2, t * 0.5)) * 0.7;
  float nebula3 = cnoise(position * uNoiseDensity * 3.0 + vec3(t * 0.8, t * 0.6, t * 0.9)) * 0.4;
  float nebula4 = cnoise(position * uNoiseDensity * 6.0 + vec3(t * 1.2, t * 1.0, t * 1.4)) * 0.2;
  
  // Combine nebula layers for complexity
  float nebulaPattern = nebula1 + nebula2 + nebula3 + nebula4;
  vNebulaIntensity = abs(nebulaPattern);
  
  // Create particle-like density variations
  float particleDensity = cnoise(position * uNoiseDensity * 8.0 + vec3(t * 2.0, t * 1.5, t * 2.5));
  vParticleDensity = smoothstep(-0.3, 0.8, particleDensity);
  
  // Create cosmic swirl effect
  vec3 swirl = vec3(
    sin(spiralAngle + t * 0.3) * distanceFromCenter * 0.1,
    cos(spiralAngle + t * 0.2) * distanceFromCenter * 0.1,
    sin(distanceFromCenter * 3.0 + t * 0.4) * 0.05
  );
  vCosmicSwirl = swirl;
  
  // Create pulsing effect for cosmic energy
  float pulse = sin(t * 2.0 + distanceFromCenter * 5.0) * 0.1 + 1.0;
  
  // Apply complex displacement
  float totalDisplacement = nebulaPattern * uNoiseStrength * uLoadingTime * pulse;
  
  // Add swirl displacement
  vec3 pos = position + normal * totalDisplacement + swirl * 0.3;
  vPos = pos;
  
  // Add cosmic rotation for dynamic feel
  pos = rotateY(pos, sin(t * 0.1 + distanceFromCenter) * 0.1);
  pos = rotateX(pos, cos(t * 0.08 + angle) * 0.08);
  pos = rotateZ(pos, sin(t * 0.05 + spiralAngle) * 0.05);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,Uu={};$e(Uu,{fragment:()=>zm,vertex:()=>Lm});var zm=`// Cosmic WaterPlane Fragment Shader - Aurora Wave Effect

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vAuroraIntensity;
varying float vWaveHeight;
varying vec3 vFlowDirection;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Aurora helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// Fractal Brownian Motion for aurora patterns
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 4; i++) {
        value += amplitude * noise2D(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}

// Aurora curtain effect
float aurora(vec2 p, float time) {
    vec2 q = vec2(fbm(p + vec2(0.0, time * 0.1)),
                  fbm(p + vec2(5.2, time * 0.15)));
    
    vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, time * 0.2)),
                  fbm(p + 4.0 * q + vec2(8.3, time * 0.18)));
    
    return fbm(p + 4.0 * r);
}

// Water caustics effect
float caustics(vec2 p, float time) {
    vec2 uv = p * 4.0;
    vec2 p0 = uv + vec2(time * 0.3, time * 0.2);
    vec2 p1 = uv + vec2(time * -0.4, time * 0.3);
    
    float c1 = sin(length(p0) * 8.0 - time * 2.0) * 0.5 + 0.5;
    float c2 = sin(length(p1) * 6.0 - time * 1.5) * 0.5 + 0.5;
    
    return (c1 + c2) * 0.5;
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Aurora Water Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.05; // Very smooth for water-like reflection

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Create aurora patterns
  vec2 auroraCoords = vPos.xy * 2.0 + vFlowDirection.xy * t * 0.5;
  float auroraPattern1 = aurora(auroraCoords, t);
  float auroraPattern2 = aurora(auroraCoords * 1.5 + vec2(3.0, 1.0), t * 1.2);
  float auroraPattern3 = aurora(auroraCoords * 0.7 + vec2(-2.0, 4.0), t * 0.8);
  
  // Combine aurora layers
  float combinedAurora = (auroraPattern1 + auroraPattern2 * 0.7 + auroraPattern3 * 0.5) / 2.2;
  
  // Create water caustics
  float causticsPattern = caustics(vPos.xy, t);
  
  // Create flowing light streams
  float lightStream1 = sin(vPos.x * 8.0 + t * 2.0 + combinedAurora * 3.0) * 0.2;
  float lightStream2 = cos(vPos.y * 6.0 + t * 1.5 + vWaveHeight * 4.0) * 0.15;
  float lightStream3 = sin((vPos.x + vPos.y) * 10.0 + t * 2.5) * 0.1;
  
  // Create cosmic energy waves
  float distanceFromCenter = length(vPos.xy);
  float energyWave = sin(distanceFromCenter * 5.0 - t * 3.0) * 
                     exp(-distanceFromCenter * 0.05) * 0.3;
  
  // Aurora color shifting effect
  vec3 auroraShift = vec3(
    sin(combinedAurora * 6.28 + t * 1.0) * 0.2,
    sin(combinedAurora * 6.28 + t * 1.0 + 2.094) * 0.2,  // 120 degrees
    sin(combinedAurora * 6.28 + t * 1.0 + 4.188) * 0.2   // 240 degrees
  );
  
  // Enhanced gradient mixing with aurora and water effects
  float gradientX = smoothstep(-4.0, 4.0, vPos.x + combinedAurora * 3.0 + vFlowDirection.x * 2.0);
  float gradientY = smoothstep(-4.0, 4.0, vPos.y + vWaveHeight * 2.0 + lightStream1 * 3.0);
  float gradientZ = smoothstep(-3.0, 3.0, vPos.z + causticsPattern * 2.0);
  
  // Multi-layer color mixing
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.7 + gradientZ * 0.3
  );
  
  // Apply aurora color shifts
  vec3 auroraColor = baseGradient + auroraShift;
  
  // Add water caustics coloring
  vec3 causticsColor = vec3(
    causticsPattern * 0.3,
    causticsPattern * 0.4,
    causticsPattern * 0.5
  );
  
  // Add light streams
  vec3 lightStreams = vec3(
    abs(lightStream1) * 0.4,
    abs(lightStream2) * 0.3,
    abs(lightStream3) * 0.5
  );
  
  // Aurora intensity modulation
  float auroraIntensityMod = 1.0 + vAuroraIntensity * 0.8 + abs(combinedAurora) * 0.6;
  
  // Combine all effects
  vec3 finalColor = (auroraColor + causticsColor + lightStreams + vec3(energyWave * 0.2)) * auroraIntensityMod;
  
  // Add water-like shimmer
  float shimmer = sin(vPos.x * 20.0 + t * 4.0) * 
                  cos(vPos.y * 18.0 + t * 3.5) * 
                  vWaveHeight * 0.1;
  finalColor += vec3(shimmer * 0.3, shimmer * 0.4, shimmer * 0.6);
  
  // Add aurora dancing effect
  float auroraMovement = sin(vPos.x * 3.0 + t * 1.2 + combinedAurora * 2.0) * 
                         cos(vPos.y * 2.5 + t * 0.9) * 0.15;
  finalColor.g += abs(auroraMovement) * 0.4;
  finalColor.b += abs(auroraMovement) * 0.2;
  
  // Add cosmic depth variation
  float depthVariation = noise2D(vPos.xy * 5.0 + t * 0.3) * 0.1;
  finalColor *= (1.0 + depthVariation);

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Water Aurora Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.15; // Moderate emission for aurora glow

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                      reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                      totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`,Lm=`// Cosmic WaterPlane Vertex Shader - Aurora Wave Effect
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- Aurora Wave Effect Functions ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vAuroraIntensity;
varying float vWaveHeight;
varying vec3 vFlowDirection;

uniform float uTime;
uniform float uSpeed;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- Cosmic Aurora Wave Effect ------------
  vUv = uv;
  
  float t = uTime * uSpeed;
  
  // Create flowing aurora patterns
  float auroraFlow1 = sin(position.x * 5.0 + t * 1.5) * cos(position.y * 3.0 + t * 1.0);
  float auroraFlow2 = sin(position.x * 8.0 + t * 2.0) * sin(position.y * 6.0 + t * 1.8);
  float auroraFlow3 = cos(position.x * 12.0 + t * 2.5) * cos(position.y * 9.0 + t * 2.2);
  
  // Combine aurora flows
  float auroraPattern = (auroraFlow1 + auroraFlow2 * 0.7 + auroraFlow3 * 0.4) / 2.1;
  vAuroraIntensity = abs(auroraPattern);
  
  // Create multi-layered waves
  float wave1 = cnoise(vec3(position.xy * uNoiseDensity * 0.5, t * 0.3));
  float wave2 = cnoise(vec3(position.xy * uNoiseDensity * 1.2, t * 0.5)) * 0.6;
  float wave3 = cnoise(vec3(position.xy * uNoiseDensity * 2.5, t * 0.8)) * 0.3;
  float wave4 = cnoise(vec3(position.xy * uNoiseDensity * 5.0, t * 1.2)) * 0.15;
  
  // Combine waves for complex water surface
  float combinedWaves = wave1 + wave2 + wave3 + wave4;
  vWaveHeight = combinedWaves;
  
  // Create flowing current patterns
  vec2 flowDirection = vec2(
    sin(position.x * 2.0 + t * 0.8) + cos(position.y * 1.5 + t * 0.6),
    cos(position.x * 1.8 + t * 0.7) + sin(position.y * 2.2 + t * 0.9)
  );
  vFlowDirection = vec3(normalize(flowDirection), 0.0);
  
  // Aurora-influenced wave distortion
  float auroraWave = sin(position.x * 15.0 + t * 3.0 + auroraPattern * 5.0) * 
                     cos(position.y * 12.0 + t * 2.5 + auroraPattern * 4.0) * 0.2;
  
  // Create cosmic energy ripples
  float distanceFromCenter = length(position.xy);
  float cosmicRipple = sin(distanceFromCenter * 8.0 - t * 4.0) * 
                       exp(-distanceFromCenter * 0.1) * 0.3;
  
  // Pulsing effect for cosmic energy
  float cosmicPulse = sin(t * 1.5 + distanceFromCenter * 2.0) * 0.1 + 1.0;
  
  // Apply complex displacement
  float totalDisplacement = (combinedWaves + auroraWave + cosmicRipple) * 
                           uNoiseStrength * uLoadingTime * cosmicPulse;
  
  vec3 pos = position + normal * totalDisplacement;
  vPos = pos;
  
  // Add subtle rotation for cosmic flow
  pos = rotateY(pos, sin(t * 0.05 + distanceFromCenter * 0.1) * 0.02);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,Hu={};$e(Hu,{plane:()=>ku,sphere:()=>Vu,waterPlane:()=>Uu});var Yu={};$e(Yu,{cosmic:()=>Hu,defaults:()=>zu,glass:()=>Mu,positionMix:()=>Fu});var Pn={performance:!1,render:!0},Gu={enable:t=>{Pn[t]=!0},disable:t=>{Pn[t]=!1},enableAll:()=>{Object.keys(Pn).forEach(t=>{Pn[t]=!0})},disableAll:()=>{Object.keys(Pn).forEach(t=>{Pn[t]=!1})},performance:(...t)=>{Pn.performance&&console.log("[Performance]",...t)},render:(...t)=>{Pn.render&&console.log("[Render]",...t)}};typeof window<"u"&&(window.debug=Gu);function js(t){return t/180*Math.PI}function Nm(t){return t.map(e=>js(e))}function Om(t){return t.replace("http://localhost:3001/customize","").replace("https://shadergradient.co/customize","").replace("https://www.shadergradient.co/customize","")}function Mm({animate:t,range:e,rangeStart:n,rangeEnd:i,loop:r,loopDuration:o,positionX:s,positionY:a,positionZ:c,rotationX:u,rotationY:f,rotationZ:d,type:h,color1:p,color2:g,color3:C,reflection:_,uTime:y,uSpeed:m,uDensity:v,uStrength:x,uFrequency:b,uAmplitude:w,shader:T}){let{vertex:A,fragment:L}=Yu[T][h],z={colors:[p,g,C],uTime:y,uSpeed:m,uLoadingTime:1,uNoiseDensity:v,uNoiseStrength:x,uFrequency:b,uAmplitude:w,uIntensity:.5,uLoop:r==="on"?1:0,uLoopDuration:o||5},k=T==="glass"?{uColor1:zi(p),uColor2:zi(g),uColor3:zi(C),uTransparency:.1,uRefraction:1.5,uChromaticAberration:.1,uFresnelPower:2,uReflectivity:.9,uWaveAmplitude:.02,uWaveFrequency:5,uDistortion:.1,uFlowSpeed:.1,uFlowDirection:{x:1,y:.5},uLiquidEffect:.5,uFoamIntensity:.3,envMapIntensity:1}:{},R=fe(fe({},z),k);return l.jsxs("mesh",{name:"shadergradient-mesh",position:[s,a,c],rotation:Nm([u,f,d]),children:[l.jsx(Kh,{type:h}),l.jsx(lm,{animate:t,range:e,rangeStart:n,rangeEnd:i,loop:r,loopDuration:o,reflection:_,shader:T,uniforms:R,vertexShader:A,fragmentShader:L,onInit:ie=>{Gu.performance("material (onInit)",ie)}})]})}var Ho=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},Bm=new Sa(-1,1,1,-1,0,1),Pa=new Ea;Pa.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3));Pa.setAttribute("uv",new ki([0,2,0,0,2,0],2));var Im=class{constructor(e){this._mesh=new wu(Pa,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},jm=class extends Ho{constructor(e,n,i,r,o){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rh}render(e,n,i){let r=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=r}},pl=class extends Ho{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Is?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ta.clone(e.uniforms),this.material=new Is({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Im(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}},gl={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`},vl=class extends Ho{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){let r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}},Fm=class extends Ho{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},km=class{constructor(e,n){if(this.renderer=e,n===void 0){let i={minFilter:Bi,magFilter:Bi,format:zh},r=e.getSize(new Ao);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,n=new Tu(this._width*this._pixelRatio,this._height*this._pixelRatio,i),n.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],gl===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),pl===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new pl(gl),this.clock=new bu}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let n=this.renderer.getRenderTarget(),i=!1;for(let r=0,o=this.passes.length;r<o;r++){let s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vl!==void 0&&(s instanceof vl?i=!0:s instanceof Fm&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){let n=this.renderer.getSize(new Ao);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}};new Sa(-1,1,1,-1,0,1);var Wu=new Ea;Wu.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3));Wu.setAttribute("uv",new ki([0,2,0,0,2,0],2));var hi={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:2},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:1},width:{value:20},height:{value:20},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;
		varying vec3 vPosition;

		void main() {

			vUV = uv;
			vPosition = position;

			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		varying vec3 vPosition;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			// float dist = radius * 0.66;
			float dist = radius * 0.0;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			// res = 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;
			// return 2

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height ) - vec2(vPosition.x, vPosition.y) * 3.0; // - position values to remove black borders.
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;
				// float aa = 0.0;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				
				// add masking before blendColour
				if (colour.r == 0.0) {
					r = 0.0;
				} else {
					r = blendColour( r, colour.r, blending );
				}

				if (colour.g == 0.0) {
					g = 0.0;
				} else {
					g = blendColour( g, colour.g, blending );
				}

				if (colour.b == 0.0) {
					b = 0.0;
				} else {
					b = blendColour( b, colour.b, blending );
				}
				
				
				

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				// add alpha channel to each r, g, b colors
				vec4 vR;
				vec4 vG;
				vec4 vB;
	
				// apply transparent to outside of mesh
				if (r == 0.0 && colour.r == 0.0) {
					vR = vec4( 0, 0, 0, 0 );
				} else {
					vR = vec4( r, 0, 0, 1 );
				}
	
				if (g == 0.0 && colour.g == 0.0) {
					vG = vec4( 0, 0, 0, 0 );
				} else {
					vG = vec4( 0, g, 0, 1 );
				}
	
				if (b == 0.0 && colour.b == 0.0) {
					vB = vec4( 0, 0, 0, 0 );
				} else {
					vB = vec4( 0, 0, b, 1 );
				}

				// gl_FragColor = vec4( r, g, b, 1.0 );
				gl_FragColor = vR + vG + vB;

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`},Vm=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},Um=new Sa(-1,1,1,-1,0,1),Da=new Ea;Da.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3));Da.setAttribute("uv",new ki([0,2,0,0,2,0],2));var Hm=class{constructor(e){this._mesh=new wu(Da,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Um)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Re={SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18},Ym=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x + y, 1.0) * opacity + x * (1.0 - opacity);

}
`,Gm=`vec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(blend(x.rgb, y.rgb, a), max(x.a, a));

}
`,Wm=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y) * 0.5 * opacity + x * (1.0 - opacity);

}
`,$m=`float blend(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,Xm=`float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,qm=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x, y) * opacity + x * (1.0 - opacity);

}
`,Zm=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return abs(x - y) * opacity + x * (1.0 - opacity);

}
`,Km=`float blend(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,Qm=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y - 2.0 * x * y) * opacity + x * (1.0 - opacity);

}
`,Jm=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x, y) * opacity + x * (1.0 - opacity);

}
`,ep=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return x * y * opacity + x * (1.0 - opacity);

}
`,tp=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - abs(1.0 - x - y)) * opacity + x * (1.0 - opacity);

}
`,np=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}
`,ip=`float blend(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,rp=`float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,op=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - (1.0 - x) * (1.0 - y)) * opacity + x * (1.0 - opacity);

}
`,sp=`float blend(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,ap=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x + y - 1.0, 0.0) * opacity + x * (1.0 - opacity);

}
`,lp=new Map([[Re.SKIP,null],[Re.ADD,Ym],[Re.ALPHA,Gm],[Re.AVERAGE,Wm],[Re.COLOR_BURN,$m],[Re.COLOR_DODGE,Xm],[Re.DARKEN,qm],[Re.DIFFERENCE,Zm],[Re.EXCLUSION,Qm],[Re.LIGHTEN,Jm],[Re.MULTIPLY,ep],[Re.DIVIDE,Km],[Re.NEGATION,tp],[Re.NORMAL,np],[Re.OVERLAY,ip],[Re.REFLECT,rp],[Re.SCREEN,op],[Re.SOFT_LIGHT,sp],[Re.SUBTRACT,ap]]),cp=class extends Lh{constructor(t,e=1){super(),this.blendFunction=t,this.opacity=new Nh(e)}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t,this.dispatchEvent({type:"change"})}getShaderCode(){return lp.get(this.blendFunction)}},up=class extends Vm{constructor(e,n,i){super(),hi===void 0&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=Ta.clone(hi.uniforms),this.material=new Is({uniforms:this.uniforms,fragmentShader:hi.fragmentShader,vertexShader:hi.vertexShader}),this.uniforms.width.value=e,this.uniforms.height.value=n,this.uniforms.disable.value=i.disable,this.fsQuad=new Hm(this.material),this.blendMode=new cp(Re.SCREEN),this.extensions=null}render(e,n,i){this.material.uniforms.tDiffuse.value=i.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,n){this.uniforms.width.value=e,this.uniforms.height.value=n}initialize(e,n,i){}addEventListener(){}getAttributes(){return this.attributes}getFragmentShader(){return hi.fragmentShader}getVertexShader(){return hi.vertexShader}update(e,n,i){}};function fp({disable:t=!1}){let{gl:e,scene:n,camera:i,size:r}=Ge(),o=E.useRef(null),s=E.useRef(null),a=E.useMemo(()=>({shape:1,radius:2,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:1,blending:1,blendingMode:1,greyscale:!1}),[]);return E.useEffect(()=>{let c=new km(e),u=new jm(n,i),f=new up(r.width,r.height,Vi(fe({},a),{disable:t}));return c.addPass(u),c.addPass(f),o.current=c,s.current=f,()=>{var d,h,p,g,C,_,y,m;(d=u.dispose)==null||d.call(u),(h=f.fsQuad)!=null&&h.dispose&&f.fsQuad.dispose(),(g=(p=f.material)==null?void 0:p.dispose)==null||g.call(p),(_=(C=c.renderTarget1)==null?void 0:C.dispose)==null||_.call(C),(m=(y=c.renderTarget2)==null?void 0:y.dispose)==null||m.call(y),o.current=null,s.current=null}},[i,e,a,n]),E.useEffect(()=>{var c;let u=o.current;u&&(u.setSize(r.width,r.height),(c=s.current)==null||c.setSize(r.width,r.height))},[r.height,r.width]),E.useEffect(()=>{var c,u;(u=(c=s.current)==null?void 0:c.uniforms)!=null&&u.disable&&(s.current.uniforms.disable.value=t)},[t]),wt((c,u)=>{let f=o.current;f&&(e.autoClear=!0,f.render(u))},1),l.jsx(l.Fragment,{})}var dp=(t,e,n)=>({dpr:t,camera:{fov:e},linear:!0,flat:!0,gl:{preserveDrawingBuffer:n?.preserveDrawingBuffer,powerPreference:n?.powerPreference}}),hp=1,mp=14,xl={zoom:1,distance:14},yl={zoom:5,distance:14},pp="https://ruucm.github.io/shadergradient/ui@0.0.0/assets/hdr/";function gp({type:t,cAzimuthAngle:e,cPolarAngle:n,cDistance:i,cameraZoom:r,zoomOut:o,enableTransition:s=!0}){let a=E.useRef();return wt((c,u)=>a.current.update(u)),E.useEffect(()=>{let c=a.current;c?.rotateTo(js(e),js(n),s)},[a,e,n,s]),E.useEffect(()=>{let c=a.current;o?t==="sphere"?(c?.dollyTo(yl.distance,s),c?.zoomTo(yl.zoom,s)):(c?.dollyTo(xl.distance,s),c?.zoomTo(xl.zoom,s)):t==="sphere"?(c?.zoomTo(r,s),c?.dollyTo(mp,s)):(c?.dollyTo(i,s),c?.zoomTo(hp,s))},[a,o,t,r,i,s]),a}var ye={LEFT:1,RIGHT:2,MIDDLE:4},D=Object.freeze({NONE:0,ROTATE:1,TRUCK:2,OFFSET:4,DOLLY:8,ZOOM:16,TOUCH_ROTATE:32,TOUCH_TRUCK:64,TOUCH_OFFSET:128,TOUCH_DOLLY:256,TOUCH_ZOOM:512,TOUCH_DOLLY_TRUCK:1024,TOUCH_DOLLY_OFFSET:2048,TOUCH_DOLLY_ROTATE:4096,TOUCH_ZOOM_TRUCK:8192,TOUCH_ZOOM_OFFSET:16384,TOUCH_ZOOM_ROTATE:32768}),mi={NONE:0,IN:1,OUT:-1};function Yn(t){return t.isPerspectiveCamera}function Dn(t){return t.isOrthographicCamera}var pi=Math.PI*2,_l=Math.PI/2,$u=1e-5,qi=Math.PI/180;function Ut(t,e,n){return Math.max(e,Math.min(n,t))}function pe(t,e=$u){return Math.abs(t)<e}function se(t,e,n=$u){return pe(t-e,n)}function Cl(t,e){return Math.round(t/e)*e}function Zi(t){return isFinite(t)?t:t<0?-Number.MAX_VALUE:Number.MAX_VALUE}function Ki(t){return Math.abs(t)<Number.MAX_VALUE?t:t*(1/0)}function Hr(t,e,n,i,r=1/0,o){i=Math.max(1e-4,i);let s=2/i,a=s*o,c=1/(1+a+.48*a*a+.235*a*a*a),u=t-e,f=e,d=r*i;u=Ut(u,-d,d),e=t-u;let h=(n.value+s*u)*o;n.value=(n.value-s*h)*c;let p=e+(u+h)*c;return f-t>0==p>f&&(p=f,n.value=(p-f)/o),p}function bl(t,e,n,i,r=1/0,o,s){i=Math.max(1e-4,i);let a=2/i,c=a*o,u=1/(1+c+.48*c*c+.235*c*c*c),f=e.x,d=e.y,h=e.z,p=t.x-f,g=t.y-d,C=t.z-h,_=f,y=d,m=h,v=r*i,x=v*v,b=p*p+g*g+C*C;if(b>x){let V=Math.sqrt(b);p=p/V*v,g=g/V*v,C=C/V*v}f=t.x-p,d=t.y-g,h=t.z-C;let w=(n.x+a*p)*o,T=(n.y+a*g)*o,A=(n.z+a*C)*o;n.x=(n.x-a*w)*u,n.y=(n.y-a*T)*u,n.z=(n.z-a*A)*u,s.x=f+(p+w)*u,s.y=d+(g+T)*u,s.z=h+(C+A)*u;let L=_-t.x,z=y-t.y,k=m-t.z,R=s.x-_,ie=s.y-y,G=s.z-m;return L*R+z*ie+k*G>0&&(s.x=_,s.y=y,s.z=m,n.x=(s.x-_)/o,n.y=(s.y-y)/o,n.z=(s.z-m)/o),s}function ts(t,e){e.set(0,0),t.forEach(n=>{e.x+=n.clientX,e.y+=n.clientY}),e.x/=t.length,e.y/=t.length}function ns(t,e){return Dn(t)?(console.warn(`${e} is not supported in OrthographicCamera`),!0):!1}var vp=class{constructor(){this._listeners={}}addEventListener(t,e){let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners[t];if(n!==void 0){let i=n.indexOf(e);i!==-1&&n.splice(i,1)}}removeAllEventListeners(t){if(!t){this._listeners={};return}Array.isArray(this._listeners[t])&&(this._listeners[t].length=0)}dispatchEvent(t){let e=this._listeners[t.type];if(e!==void 0){t.target=this;let n=e.slice(0);for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}}},is,xp="2.9.0",Yr=1/8,yp=/Mac/.test((is=globalThis?.navigator)===null||is===void 0?void 0:is.platform),F,wl,Gr,rs,mt,$,ne,gi,Qi,Kt,Qt,Gn,Tl,El,St,Ji,vi,Sl,os,Al,ss,as,Wr,kt=class Fs extends vp{static install(e){F=e.THREE,wl=Object.freeze(new F.Vector3(0,0,0)),Gr=Object.freeze(new F.Vector3(0,1,0)),rs=Object.freeze(new F.Vector3(0,0,1)),mt=new F.Vector2,$=new F.Vector3,ne=new F.Vector3,gi=new F.Vector3,Qi=new F.Vector3,Kt=new F.Vector3,Qt=new F.Vector3,Gn=new F.Vector3,Tl=new F.Vector3,El=new F.Vector3,St=new F.Spherical,Ji=new F.Spherical,vi=new F.Box3,Sl=new F.Box3,os=new F.Sphere,Al=new F.Quaternion,ss=new F.Quaternion,as=new F.Matrix4,Wr=new F.Raycaster}static get ACTION(){return D}constructor(e,n){super(),this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.minDistance=Number.EPSILON,this.maxDistance=1/0,this.infinityDolly=!1,this.minZoom=.01,this.maxZoom=1/0,this.smoothTime=.25,this.draggingSmoothTime=.125,this.maxSpeed=1/0,this.azimuthRotateSpeed=1,this.polarRotateSpeed=1,this.dollySpeed=1,this.dollyDragInverted=!1,this.truckSpeed=2,this.dollyToCursor=!1,this.dragToOffset=!1,this.verticalDragToForward=!1,this.boundaryFriction=0,this.restThreshold=.01,this.colliderMeshes=[],this.cancel=()=>{},this._enabled=!0,this._state=D.NONE,this._viewport=null,this._changedDolly=0,this._changedZoom=0,this._hasRested=!0,this._boundaryEnclosesCamera=!1,this._needsUpdate=!0,this._updatedLastTime=!1,this._elementRect=new DOMRect,this._isDragging=!1,this._dragNeedsUpdate=!0,this._activePointers=[],this._lockedPointer=null,this._interactiveArea=new DOMRect(0,0,1,1),this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._isUserControllingOffset=!1,this._isUserControllingZoom=!1,this._lastDollyDirection=mi.NONE,this._thetaVelocity={value:0},this._phiVelocity={value:0},this._radiusVelocity={value:0},this._targetVelocity=new F.Vector3,this._focalOffsetVelocity=new F.Vector3,this._zoomVelocity={value:0},this._truckInternal=(y,m,v)=>{let x,b;if(Yn(this._camera)){let w=$.copy(this._camera.position).sub(this._target),T=this._camera.getEffectiveFOV()*qi,A=w.length()*Math.tan(T*.5);x=this.truckSpeed*y*A/this._elementRect.height,b=this.truckSpeed*m*A/this._elementRect.height}else if(Dn(this._camera)){let w=this._camera;x=y*(w.right-w.left)/w.zoom/this._elementRect.width,b=m*(w.top-w.bottom)/w.zoom/this._elementRect.height}else return;this.verticalDragToForward?(v?this.setFocalOffset(this._focalOffsetEnd.x+x,this._focalOffsetEnd.y,this._focalOffsetEnd.z,!0):this.truck(x,0,!0),this.forward(-b,!0)):v?this.setFocalOffset(this._focalOffsetEnd.x+x,this._focalOffsetEnd.y+b,this._focalOffsetEnd.z,!0):this.truck(x,b,!0)},this._rotateInternal=(y,m)=>{let v=pi*this.azimuthRotateSpeed*y/this._elementRect.height,x=pi*this.polarRotateSpeed*m/this._elementRect.height;this.rotate(v,x,!0)},this._dollyInternal=(y,m,v)=>{let x=Math.pow(.95,-y*this.dollySpeed),b=this._sphericalEnd.radius,w=this._sphericalEnd.radius*x,T=Ut(w,this.minDistance,this.maxDistance),A=T-w;this.infinityDolly&&this.dollyToCursor?this._dollyToNoClamp(w,!0):this.infinityDolly&&!this.dollyToCursor?(this.dollyInFixed(A,!0),this._dollyToNoClamp(T,!0)):this._dollyToNoClamp(T,!0),this.dollyToCursor&&(this._changedDolly+=(this.infinityDolly?w:T)-b,this._dollyControlCoord.set(m,v)),this._lastDollyDirection=Math.sign(-y)},this._zoomInternal=(y,m,v)=>{let x=Math.pow(.95,y*this.dollySpeed),b=this._zoom,w=this._zoom*x;this.zoomTo(w,!0),this.dollyToCursor&&(this._changedZoom+=w-b,this._dollyControlCoord.set(m,v))},typeof F>"u"&&console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."),this._camera=e,this._yAxisUpSpace=new F.Quaternion().setFromUnitVectors(this._camera.up,Gr),this._yAxisUpSpaceInverse=this._yAxisUpSpace.clone().invert(),this._state=D.NONE,this._target=new F.Vector3,this._targetEnd=this._target.clone(),this._focalOffset=new F.Vector3,this._focalOffsetEnd=this._focalOffset.clone(),this._spherical=new F.Spherical().setFromVector3($.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)),this._sphericalEnd=this._spherical.clone(),this._lastDistance=this._spherical.radius,this._zoom=this._camera.zoom,this._zoomEnd=this._zoom,this._lastZoom=this._zoom,this._nearPlaneCorners=[new F.Vector3,new F.Vector3,new F.Vector3,new F.Vector3],this._updateNearPlaneCorners(),this._boundary=new F.Box3(new F.Vector3(-1/0,-1/0,-1/0),new F.Vector3(1/0,1/0,1/0)),this._cameraUp0=this._camera.up.clone(),this._target0=this._target.clone(),this._position0=this._camera.position.clone(),this._zoom0=this._zoom,this._focalOffset0=this._focalOffset.clone(),this._dollyControlCoord=new F.Vector2,this.mouseButtons={left:D.ROTATE,middle:D.DOLLY,right:D.TRUCK,wheel:Yn(this._camera)?D.DOLLY:Dn(this._camera)?D.ZOOM:D.NONE},this.touches={one:D.TOUCH_ROTATE,two:Yn(this._camera)?D.TOUCH_DOLLY_TRUCK:Dn(this._camera)?D.TOUCH_ZOOM_TRUCK:D.NONE,three:D.TOUCH_TRUCK};let i=new F.Vector2,r=new F.Vector2,o=new F.Vector2,s=y=>{if(!this._enabled||!this._domElement)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){let x=this._domElement.getBoundingClientRect(),b=y.clientX/x.width,w=y.clientY/x.height;if(b<this._interactiveArea.left||b>this._interactiveArea.right||w<this._interactiveArea.top||w>this._interactiveArea.bottom)return}let m=y.pointerType!=="mouse"?null:(y.buttons&ye.LEFT)===ye.LEFT?ye.LEFT:(y.buttons&ye.MIDDLE)===ye.MIDDLE?ye.MIDDLE:(y.buttons&ye.RIGHT)===ye.RIGHT?ye.RIGHT:null;if(m!==null){let x=this._findPointerByMouseButton(m);x&&this._disposePointer(x)}if((y.buttons&ye.LEFT)===ye.LEFT&&this._lockedPointer)return;let v={pointerId:y.pointerId,clientX:y.clientX,clientY:y.clientY,deltaX:0,deltaY:0,mouseButton:m};this._activePointers.push(v),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c),this._domElement.ownerDocument.addEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",c),this._isDragging=!0,h(y)},a=y=>{y.cancelable&&y.preventDefault();let m=y.pointerId,v=this._lockedPointer||this._findPointerById(m);if(v){if(v.clientX=y.clientX,v.clientY=y.clientY,v.deltaX=y.movementX,v.deltaY=y.movementY,this._state=0,y.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else(!this._isDragging&&this._lockedPointer||this._isDragging&&(y.buttons&ye.LEFT)===ye.LEFT)&&(this._state=this._state|this.mouseButtons.left),this._isDragging&&(y.buttons&ye.MIDDLE)===ye.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),this._isDragging&&(y.buttons&ye.RIGHT)===ye.RIGHT&&(this._state=this._state|this.mouseButtons.right);p()}},c=y=>{let m=this._findPointerById(y.pointerId);if(!(m&&m===this._lockedPointer)){if(m&&this._disposePointer(m),y.pointerType==="touch")switch(this._activePointers.length){case 0:this._state=D.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=D.NONE;g()}},u=-1,f=y=>{if(!this._domElement||!this._enabled||this.mouseButtons.wheel===D.NONE)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){let w=this._domElement.getBoundingClientRect(),T=y.clientX/w.width,A=y.clientY/w.height;if(T<this._interactiveArea.left||T>this._interactiveArea.right||A<this._interactiveArea.top||A>this._interactiveArea.bottom)return}if(y.preventDefault(),this.dollyToCursor||this.mouseButtons.wheel===D.ROTATE||this.mouseButtons.wheel===D.TRUCK){let w=performance.now();u-w<1e3&&this._getClientRect(this._elementRect),u=w}let m=yp?-1:-3,v=y.deltaMode===1?y.deltaY/m:y.deltaY/(m*10),x=this.dollyToCursor?(y.clientX-this._elementRect.x)/this._elementRect.width*2-1:0,b=this.dollyToCursor?(y.clientY-this._elementRect.y)/this._elementRect.height*-2+1:0;switch(this.mouseButtons.wheel){case D.ROTATE:{this._rotateInternal(y.deltaX,y.deltaY),this._isUserControllingRotate=!0;break}case D.TRUCK:{this._truckInternal(y.deltaX,y.deltaY,!1),this._isUserControllingTruck=!0;break}case D.OFFSET:{this._truckInternal(y.deltaX,y.deltaY,!0),this._isUserControllingOffset=!0;break}case D.DOLLY:{this._dollyInternal(-v,x,b),this._isUserControllingDolly=!0;break}case D.ZOOM:{this._zoomInternal(-v,x,b),this._isUserControllingZoom=!0;break}}this.dispatchEvent({type:"control"})},d=y=>{if(!(!this._domElement||!this._enabled)){if(this.mouseButtons.right===Fs.ACTION.NONE){let m=y instanceof PointerEvent?y.pointerId:0,v=this._findPointerById(m);v&&this._disposePointer(v),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c);return}y.preventDefault()}},h=y=>{if(this._enabled){if(ts(this._activePointers,mt),this._getClientRect(this._elementRect),i.copy(mt),r.copy(mt),this._activePointers.length>=2){let m=mt.x-this._activePointers[1].clientX,v=mt.y-this._activePointers[1].clientY,x=Math.sqrt(m*m+v*v);o.set(0,x);let b=(this._activePointers[0].clientX+this._activePointers[1].clientX)*.5,w=(this._activePointers[0].clientY+this._activePointers[1].clientY)*.5;r.set(b,w)}if(this._state=0,!y)this._lockedPointer&&(this._state=this._state|this.mouseButtons.left);else if("pointerType"in y&&y.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else!this._lockedPointer&&(y.buttons&ye.LEFT)===ye.LEFT&&(this._state=this._state|this.mouseButtons.left),(y.buttons&ye.MIDDLE)===ye.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(y.buttons&ye.RIGHT)===ye.RIGHT&&(this._state=this._state|this.mouseButtons.right);((this._state&D.ROTATE)===D.ROTATE||(this._state&D.TOUCH_ROTATE)===D.TOUCH_ROTATE||(this._state&D.TOUCH_DOLLY_ROTATE)===D.TOUCH_DOLLY_ROTATE||(this._state&D.TOUCH_ZOOM_ROTATE)===D.TOUCH_ZOOM_ROTATE)&&(this._sphericalEnd.theta=this._spherical.theta,this._sphericalEnd.phi=this._spherical.phi,this._thetaVelocity.value=0,this._phiVelocity.value=0),((this._state&D.TRUCK)===D.TRUCK||(this._state&D.TOUCH_TRUCK)===D.TOUCH_TRUCK||(this._state&D.TOUCH_DOLLY_TRUCK)===D.TOUCH_DOLLY_TRUCK||(this._state&D.TOUCH_ZOOM_TRUCK)===D.TOUCH_ZOOM_TRUCK)&&(this._targetEnd.copy(this._target),this._targetVelocity.set(0,0,0)),((this._state&D.DOLLY)===D.DOLLY||(this._state&D.TOUCH_DOLLY)===D.TOUCH_DOLLY||(this._state&D.TOUCH_DOLLY_TRUCK)===D.TOUCH_DOLLY_TRUCK||(this._state&D.TOUCH_DOLLY_OFFSET)===D.TOUCH_DOLLY_OFFSET||(this._state&D.TOUCH_DOLLY_ROTATE)===D.TOUCH_DOLLY_ROTATE)&&(this._sphericalEnd.radius=this._spherical.radius,this._radiusVelocity.value=0),((this._state&D.ZOOM)===D.ZOOM||(this._state&D.TOUCH_ZOOM)===D.TOUCH_ZOOM||(this._state&D.TOUCH_ZOOM_TRUCK)===D.TOUCH_ZOOM_TRUCK||(this._state&D.TOUCH_ZOOM_OFFSET)===D.TOUCH_ZOOM_OFFSET||(this._state&D.TOUCH_ZOOM_ROTATE)===D.TOUCH_ZOOM_ROTATE)&&(this._zoomEnd=this._zoom,this._zoomVelocity.value=0),((this._state&D.OFFSET)===D.OFFSET||(this._state&D.TOUCH_OFFSET)===D.TOUCH_OFFSET||(this._state&D.TOUCH_DOLLY_OFFSET)===D.TOUCH_DOLLY_OFFSET||(this._state&D.TOUCH_ZOOM_OFFSET)===D.TOUCH_ZOOM_OFFSET)&&(this._focalOffsetEnd.copy(this._focalOffset),this._focalOffsetVelocity.set(0,0,0)),this.dispatchEvent({type:"controlstart"})}},p=()=>{if(!this._enabled||!this._dragNeedsUpdate)return;this._dragNeedsUpdate=!1,ts(this._activePointers,mt);let y=this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement?this._lockedPointer||this._activePointers[0]:null,m=y?-y.deltaX:r.x-mt.x,v=y?-y.deltaY:r.y-mt.y;if(r.copy(mt),((this._state&D.ROTATE)===D.ROTATE||(this._state&D.TOUCH_ROTATE)===D.TOUCH_ROTATE||(this._state&D.TOUCH_DOLLY_ROTATE)===D.TOUCH_DOLLY_ROTATE||(this._state&D.TOUCH_ZOOM_ROTATE)===D.TOUCH_ZOOM_ROTATE)&&(this._rotateInternal(m,v),this._isUserControllingRotate=!0),(this._state&D.DOLLY)===D.DOLLY||(this._state&D.ZOOM)===D.ZOOM){let x=this.dollyToCursor?(i.x-this._elementRect.x)/this._elementRect.width*2-1:0,b=this.dollyToCursor?(i.y-this._elementRect.y)/this._elementRect.height*-2+1:0,w=this.dollyDragInverted?-1:1;(this._state&D.DOLLY)===D.DOLLY?(this._dollyInternal(w*v*Yr,x,b),this._isUserControllingDolly=!0):(this._zoomInternal(w*v*Yr,x,b),this._isUserControllingZoom=!0)}if((this._state&D.TOUCH_DOLLY)===D.TOUCH_DOLLY||(this._state&D.TOUCH_ZOOM)===D.TOUCH_ZOOM||(this._state&D.TOUCH_DOLLY_TRUCK)===D.TOUCH_DOLLY_TRUCK||(this._state&D.TOUCH_ZOOM_TRUCK)===D.TOUCH_ZOOM_TRUCK||(this._state&D.TOUCH_DOLLY_OFFSET)===D.TOUCH_DOLLY_OFFSET||(this._state&D.TOUCH_ZOOM_OFFSET)===D.TOUCH_ZOOM_OFFSET||(this._state&D.TOUCH_DOLLY_ROTATE)===D.TOUCH_DOLLY_ROTATE||(this._state&D.TOUCH_ZOOM_ROTATE)===D.TOUCH_ZOOM_ROTATE){let x=mt.x-this._activePointers[1].clientX,b=mt.y-this._activePointers[1].clientY,w=Math.sqrt(x*x+b*b),T=o.y-w;o.set(0,w);let A=this.dollyToCursor?(r.x-this._elementRect.x)/this._elementRect.width*2-1:0,L=this.dollyToCursor?(r.y-this._elementRect.y)/this._elementRect.height*-2+1:0;(this._state&D.TOUCH_DOLLY)===D.TOUCH_DOLLY||(this._state&D.TOUCH_DOLLY_ROTATE)===D.TOUCH_DOLLY_ROTATE||(this._state&D.TOUCH_DOLLY_TRUCK)===D.TOUCH_DOLLY_TRUCK||(this._state&D.TOUCH_DOLLY_OFFSET)===D.TOUCH_DOLLY_OFFSET?(this._dollyInternal(T*Yr,A,L),this._isUserControllingDolly=!0):(this._zoomInternal(T*Yr,A,L),this._isUserControllingZoom=!0)}((this._state&D.TRUCK)===D.TRUCK||(this._state&D.TOUCH_TRUCK)===D.TOUCH_TRUCK||(this._state&D.TOUCH_DOLLY_TRUCK)===D.TOUCH_DOLLY_TRUCK||(this._state&D.TOUCH_ZOOM_TRUCK)===D.TOUCH_ZOOM_TRUCK)&&(this._truckInternal(m,v,!1),this._isUserControllingTruck=!0),((this._state&D.OFFSET)===D.OFFSET||(this._state&D.TOUCH_OFFSET)===D.TOUCH_OFFSET||(this._state&D.TOUCH_DOLLY_OFFSET)===D.TOUCH_DOLLY_OFFSET||(this._state&D.TOUCH_ZOOM_OFFSET)===D.TOUCH_ZOOM_OFFSET)&&(this._truckInternal(m,v,!0),this._isUserControllingOffset=!0),this.dispatchEvent({type:"control"})},g=()=>{ts(this._activePointers,mt),r.copy(mt),this._dragNeedsUpdate=!1,(this._activePointers.length===0||this._activePointers.length===1&&this._activePointers[0]===this._lockedPointer)&&(this._isDragging=!1),this._activePointers.length===0&&this._domElement&&(this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c),this.dispatchEvent({type:"controlend"}))};this.lockPointer=()=>{!this._enabled||!this._domElement||(this.cancel(),this._lockedPointer={pointerId:-1,clientX:0,clientY:0,deltaX:0,deltaY:0,mouseButton:null},this._activePointers.push(this._lockedPointer),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c),this._domElement.requestPointerLock(),this._domElement.ownerDocument.addEventListener("pointerlockchange",C),this._domElement.ownerDocument.addEventListener("pointerlockerror",_),this._domElement.ownerDocument.addEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",c),h())},this.unlockPointer=()=>{var y,m,v;this._lockedPointer!==null&&(this._disposePointer(this._lockedPointer),this._lockedPointer=null),(y=this._domElement)===null||y===void 0||y.ownerDocument.exitPointerLock(),(m=this._domElement)===null||m===void 0||m.ownerDocument.removeEventListener("pointerlockchange",C),(v=this._domElement)===null||v===void 0||v.ownerDocument.removeEventListener("pointerlockerror",_),this.cancel()};let C=()=>{this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement||this.unlockPointer()},_=()=>{this.unlockPointer()};this._addAllEventListeners=y=>{this._domElement=y,this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none",this._domElement.addEventListener("pointerdown",s),this._domElement.addEventListener("pointercancel",c),this._domElement.addEventListener("wheel",f,{passive:!1}),this._domElement.addEventListener("contextmenu",d)},this._removeAllEventListeners=()=>{this._domElement&&(this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect="",this._domElement.removeEventListener("pointerdown",s),this._domElement.removeEventListener("pointercancel",c),this._domElement.removeEventListener("wheel",f,{passive:!1}),this._domElement.removeEventListener("contextmenu",d),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c),this._domElement.ownerDocument.removeEventListener("pointerlockchange",C),this._domElement.ownerDocument.removeEventListener("pointerlockerror",_))},this.cancel=()=>{this._state!==D.NONE&&(this._state=D.NONE,this._activePointers.length=0,g())},n&&this.connect(n),this.update(0)}get camera(){return this._camera}set camera(e){this._camera=e,this.updateCameraUp(),this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._domElement&&(e?(this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none"):(this.cancel(),this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect=""))}get active(){return!this._hasRested}get currentAction(){return this._state}get distance(){return this._spherical.radius}set distance(e){this._spherical.radius===e&&this._sphericalEnd.radius===e||(this._spherical.radius=e,this._sphericalEnd.radius=e,this._needsUpdate=!0)}get azimuthAngle(){return this._spherical.theta}set azimuthAngle(e){this._spherical.theta===e&&this._sphericalEnd.theta===e||(this._spherical.theta=e,this._sphericalEnd.theta=e,this._needsUpdate=!0)}get polarAngle(){return this._spherical.phi}set polarAngle(e){this._spherical.phi===e&&this._sphericalEnd.phi===e||(this._spherical.phi=e,this._sphericalEnd.phi=e,this._needsUpdate=!0)}get boundaryEnclosesCamera(){return this._boundaryEnclosesCamera}set boundaryEnclosesCamera(e){this._boundaryEnclosesCamera=e,this._needsUpdate=!0}set interactiveArea(e){this._interactiveArea.width=Ut(e.width,0,1),this._interactiveArea.height=Ut(e.height,0,1),this._interactiveArea.x=Ut(e.x,0,1-this._interactiveArea.width),this._interactiveArea.y=Ut(e.y,0,1-this._interactiveArea.height)}addEventListener(e,n){super.addEventListener(e,n)}removeEventListener(e,n){super.removeEventListener(e,n)}rotate(e,n,i=!1){return this.rotateTo(this._sphericalEnd.theta+e,this._sphericalEnd.phi+n,i)}rotateAzimuthTo(e,n=!1){return this.rotateTo(e,this._sphericalEnd.phi,n)}rotatePolarTo(e,n=!1){return this.rotateTo(this._sphericalEnd.theta,e,n)}rotateTo(e,n,i=!1){this._isUserControllingRotate=!1;let r=Ut(e,this.minAzimuthAngle,this.maxAzimuthAngle),o=Ut(n,this.minPolarAngle,this.maxPolarAngle);this._sphericalEnd.theta=r,this._sphericalEnd.phi=o,this._sphericalEnd.makeSafe(),this._needsUpdate=!0,i||(this._spherical.theta=this._sphericalEnd.theta,this._spherical.phi=this._sphericalEnd.phi);let s=!i||se(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&se(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold);return this._createOnRestPromise(s)}dolly(e,n=!1){return this.dollyTo(this._sphericalEnd.radius-e,n)}dollyTo(e,n=!1){return this._isUserControllingDolly=!1,this._lastDollyDirection=mi.NONE,this._changedDolly=0,this._dollyToNoClamp(Ut(e,this.minDistance,this.maxDistance),n)}_dollyToNoClamp(e,n=!1){let i=this._sphericalEnd.radius;if(this.colliderMeshes.length>=1){let o=this._collisionTest(),s=se(o,this._spherical.radius);if(!(i>e)&&s)return Promise.resolve();this._sphericalEnd.radius=Math.min(e,o)}else this._sphericalEnd.radius=e;this._needsUpdate=!0,n||(this._spherical.radius=this._sphericalEnd.radius);let r=!n||se(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(r)}dollyInFixed(e,n=!1){this._targetEnd.add(this._getCameraDirection(Qi).multiplyScalar(e)),n||this._target.copy(this._targetEnd);let i=!n||se(this._target.x,this._targetEnd.x,this.restThreshold)&&se(this._target.y,this._targetEnd.y,this.restThreshold)&&se(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(i)}zoom(e,n=!1){return this.zoomTo(this._zoomEnd+e,n)}zoomTo(e,n=!1){this._isUserControllingZoom=!1,this._zoomEnd=Ut(e,this.minZoom,this.maxZoom),this._needsUpdate=!0,n||(this._zoom=this._zoomEnd);let i=!n||se(this._zoom,this._zoomEnd,this.restThreshold);return this._changedZoom=0,this._createOnRestPromise(i)}pan(e,n,i=!1){return console.warn("`pan` has been renamed to `truck`"),this.truck(e,n,i)}truck(e,n,i=!1){this._camera.updateMatrix(),Kt.setFromMatrixColumn(this._camera.matrix,0),Qt.setFromMatrixColumn(this._camera.matrix,1),Kt.multiplyScalar(e),Qt.multiplyScalar(-n);let r=$.copy(Kt).add(Qt),o=ne.copy(this._targetEnd).add(r);return this.moveTo(o.x,o.y,o.z,i)}forward(e,n=!1){$.setFromMatrixColumn(this._camera.matrix,0),$.crossVectors(this._camera.up,$),$.multiplyScalar(e);let i=ne.copy(this._targetEnd).add($);return this.moveTo(i.x,i.y,i.z,n)}elevate(e,n=!1){return $.copy(this._camera.up).multiplyScalar(e),this.moveTo(this._targetEnd.x+$.x,this._targetEnd.y+$.y,this._targetEnd.z+$.z,n)}moveTo(e,n,i,r=!1){this._isUserControllingTruck=!1;let o=$.set(e,n,i).sub(this._targetEnd);this._encloseToBoundary(this._targetEnd,o,this.boundaryFriction),this._needsUpdate=!0,r||this._target.copy(this._targetEnd);let s=!r||se(this._target.x,this._targetEnd.x,this.restThreshold)&&se(this._target.y,this._targetEnd.y,this.restThreshold)&&se(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(s)}lookInDirectionOf(e,n,i,r=!1){let o=$.set(e,n,i).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);return this.setPosition(o.x,o.y,o.z,r)}fitToBox(e,n,{cover:i=!1,paddingLeft:r=0,paddingRight:o=0,paddingBottom:s=0,paddingTop:a=0}={}){let c=[],u=e.isBox3?vi.copy(e):vi.setFromObject(e);u.isEmpty()&&(console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"),Promise.resolve());let f=Cl(this._sphericalEnd.theta,_l),d=Cl(this._sphericalEnd.phi,_l);c.push(this.rotateTo(f,d,n));let h=$.setFromSpherical(this._sphericalEnd).normalize(),p=Al.setFromUnitVectors(h,rs),g=se(Math.abs(h.y),1);g&&p.multiply(ss.setFromAxisAngle(Gr,f)),p.multiply(this._yAxisUpSpaceInverse);let C=Sl.makeEmpty();ne.copy(u.min).applyQuaternion(p),C.expandByPoint(ne),ne.copy(u.min).setX(u.max.x).applyQuaternion(p),C.expandByPoint(ne),ne.copy(u.min).setY(u.max.y).applyQuaternion(p),C.expandByPoint(ne),ne.copy(u.max).setZ(u.min.z).applyQuaternion(p),C.expandByPoint(ne),ne.copy(u.min).setZ(u.max.z).applyQuaternion(p),C.expandByPoint(ne),ne.copy(u.max).setY(u.min.y).applyQuaternion(p),C.expandByPoint(ne),ne.copy(u.max).setX(u.min.x).applyQuaternion(p),C.expandByPoint(ne),ne.copy(u.max).applyQuaternion(p),C.expandByPoint(ne),C.min.x-=r,C.min.y-=s,C.max.x+=o,C.max.y+=a,p.setFromUnitVectors(rs,h),g&&p.premultiply(ss.invert()),p.premultiply(this._yAxisUpSpace);let _=C.getSize($),y=C.getCenter(ne).applyQuaternion(p);if(Yn(this._camera)){let m=this.getDistanceToFitBox(_.x,_.y,_.z,i);c.push(this.moveTo(y.x,y.y,y.z,n)),c.push(this.dollyTo(m,n)),c.push(this.setFocalOffset(0,0,0,n))}else if(Dn(this._camera)){let m=this._camera,v=m.right-m.left,x=m.top-m.bottom,b=i?Math.max(v/_.x,x/_.y):Math.min(v/_.x,x/_.y);c.push(this.moveTo(y.x,y.y,y.z,n)),c.push(this.zoomTo(b,n)),c.push(this.setFocalOffset(0,0,0,n))}return Promise.all(c)}fitToSphere(e,n){let i=[],r="isObject3D"in e?Fs.createBoundingSphere(e,os):os.copy(e);if(i.push(this.moveTo(r.center.x,r.center.y,r.center.z,n)),Yn(this._camera)){let o=this.getDistanceToFitSphere(r.radius);i.push(this.dollyTo(o,n))}else if(Dn(this._camera)){let o=this._camera.right-this._camera.left,s=this._camera.top-this._camera.bottom,a=2*r.radius,c=Math.min(o/a,s/a);i.push(this.zoomTo(c,n))}return i.push(this.setFocalOffset(0,0,0,n)),Promise.all(i)}setLookAt(e,n,i,r,o,s,a=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=mi.NONE,this._changedDolly=0;let c=ne.set(r,o,s),u=$.set(e,n,i);this._targetEnd.copy(c),this._sphericalEnd.setFromVector3(u.sub(c).applyQuaternion(this._yAxisUpSpace)),this.normalizeRotations(),this._needsUpdate=!0,a||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let f=!a||se(this._target.x,this._targetEnd.x,this.restThreshold)&&se(this._target.y,this._targetEnd.y,this.restThreshold)&&se(this._target.z,this._targetEnd.z,this.restThreshold)&&se(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&se(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&se(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(f)}lerpLookAt(e,n,i,r,o,s,a,c,u,f,d,h,p,g=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=mi.NONE,this._changedDolly=0;let C=$.set(r,o,s),_=ne.set(e,n,i);St.setFromVector3(_.sub(C).applyQuaternion(this._yAxisUpSpace));let y=gi.set(f,d,h),m=ne.set(a,c,u);Ji.setFromVector3(m.sub(y).applyQuaternion(this._yAxisUpSpace)),this._targetEnd.copy(C.lerp(y,p));let v=Ji.theta-St.theta,x=Ji.phi-St.phi,b=Ji.radius-St.radius;this._sphericalEnd.set(St.radius+b*p,St.phi+x*p,St.theta+v*p),this.normalizeRotations(),this._needsUpdate=!0,g||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let w=!g||se(this._target.x,this._targetEnd.x,this.restThreshold)&&se(this._target.y,this._targetEnd.y,this.restThreshold)&&se(this._target.z,this._targetEnd.z,this.restThreshold)&&se(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&se(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&se(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(w)}setPosition(e,n,i,r=!1){return this.setLookAt(e,n,i,this._targetEnd.x,this._targetEnd.y,this._targetEnd.z,r)}setTarget(e,n,i,r=!1){let o=this.getPosition($),s=this.setLookAt(o.x,o.y,o.z,e,n,i,r);return this._sphericalEnd.phi=Ut(this._sphericalEnd.phi,this.minPolarAngle,this.maxPolarAngle),s}setFocalOffset(e,n,i,r=!1){this._isUserControllingOffset=!1,this._focalOffsetEnd.set(e,n,i),this._needsUpdate=!0,r||this._focalOffset.copy(this._focalOffsetEnd);let o=!r||se(this._focalOffset.x,this._focalOffsetEnd.x,this.restThreshold)&&se(this._focalOffset.y,this._focalOffsetEnd.y,this.restThreshold)&&se(this._focalOffset.z,this._focalOffsetEnd.z,this.restThreshold);return this._createOnRestPromise(o)}setOrbitPoint(e,n,i){this._camera.updateMatrixWorld(),Kt.setFromMatrixColumn(this._camera.matrixWorldInverse,0),Qt.setFromMatrixColumn(this._camera.matrixWorldInverse,1),Gn.setFromMatrixColumn(this._camera.matrixWorldInverse,2);let r=$.set(e,n,i),o=r.distanceTo(this._camera.position),s=r.sub(this._camera.position);Kt.multiplyScalar(s.x),Qt.multiplyScalar(s.y),Gn.multiplyScalar(s.z),$.copy(Kt).add(Qt).add(Gn),$.z=$.z+o,this.dollyTo(o,!1),this.setFocalOffset(-$.x,$.y,-$.z,!1),this.moveTo(e,n,i,!1)}setBoundary(e){if(!e){this._boundary.min.set(-1/0,-1/0,-1/0),this._boundary.max.set(1/0,1/0,1/0),this._needsUpdate=!0;return}this._boundary.copy(e),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._needsUpdate=!0}setViewport(e,n,i,r){if(e===null){this._viewport=null;return}this._viewport=this._viewport||new F.Vector4,typeof e=="number"?this._viewport.set(e,n,i,r):this._viewport.copy(e)}getDistanceToFitBox(e,n,i,r=!1){if(ns(this._camera,"getDistanceToFitBox"))return this._spherical.radius;let o=e/n,s=this._camera.getEffectiveFOV()*qi,a=this._camera.aspect;return((r?o>a:o<a)?n:e/a)*.5/Math.tan(s*.5)+i*.5}getDistanceToFitSphere(e){if(ns(this._camera,"getDistanceToFitSphere"))return this._spherical.radius;let n=this._camera.getEffectiveFOV()*qi,i=Math.atan(Math.tan(n*.5)*this._camera.aspect)*2,r=1<this._camera.aspect?n:i;return e/Math.sin(r*.5)}getTarget(e,n=!0){return(e&&e.isVector3?e:new F.Vector3).copy(n?this._targetEnd:this._target)}getPosition(e,n=!0){return(e&&e.isVector3?e:new F.Vector3).setFromSpherical(n?this._sphericalEnd:this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(n?this._targetEnd:this._target)}getSpherical(e,n=!0){return(e||new F.Spherical).copy(n?this._sphericalEnd:this._spherical)}getFocalOffset(e,n=!0){return(e&&e.isVector3?e:new F.Vector3).copy(n?this._focalOffsetEnd:this._focalOffset)}normalizeRotations(){this._sphericalEnd.theta=this._sphericalEnd.theta%pi,this._sphericalEnd.theta<0&&(this._sphericalEnd.theta+=pi),this._spherical.theta+=pi*Math.round((this._sphericalEnd.theta-this._spherical.theta)/pi)}stop(){this._focalOffset.copy(this._focalOffsetEnd),this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd),this._zoom=this._zoomEnd}reset(e=!1){if(!se(this._camera.up.x,this._cameraUp0.x)||!se(this._camera.up.y,this._cameraUp0.y)||!se(this._camera.up.z,this._cameraUp0.z)){this._camera.up.copy(this._cameraUp0);let i=this.getPosition($);this.updateCameraUp(),this.setPosition(i.x,i.y,i.z)}let n=[this.setLookAt(this._position0.x,this._position0.y,this._position0.z,this._target0.x,this._target0.y,this._target0.z,e),this.setFocalOffset(this._focalOffset0.x,this._focalOffset0.y,this._focalOffset0.z,e),this.zoomTo(this._zoom0,e)];return Promise.all(n)}saveState(){this._cameraUp0.copy(this._camera.up),this.getTarget(this._target0),this.getPosition(this._position0),this._zoom0=this._zoom,this._focalOffset0.copy(this._focalOffset)}updateCameraUp(){this._yAxisUpSpace.setFromUnitVectors(this._camera.up,Gr),this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert()}applyCameraUp(){let e=$.subVectors(this._target,this._camera.position).normalize(),n=ne.crossVectors(e,this._camera.up);this._camera.up.crossVectors(n,e).normalize(),this._camera.updateMatrixWorld();let i=this.getPosition($);this.updateCameraUp(),this.setPosition(i.x,i.y,i.z)}update(e){let n=this._sphericalEnd.theta-this._spherical.theta,i=this._sphericalEnd.phi-this._spherical.phi,r=this._sphericalEnd.radius-this._spherical.radius,o=Tl.subVectors(this._targetEnd,this._target),s=El.subVectors(this._focalOffsetEnd,this._focalOffset),a=this._zoomEnd-this._zoom;if(pe(n))this._thetaVelocity.value=0,this._spherical.theta=this._sphericalEnd.theta;else{let f=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.theta=Hr(this._spherical.theta,this._sphericalEnd.theta,this._thetaVelocity,f,1/0,e),this._needsUpdate=!0}if(pe(i))this._phiVelocity.value=0,this._spherical.phi=this._sphericalEnd.phi;else{let f=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.phi=Hr(this._spherical.phi,this._sphericalEnd.phi,this._phiVelocity,f,1/0,e),this._needsUpdate=!0}if(pe(r))this._radiusVelocity.value=0,this._spherical.radius=this._sphericalEnd.radius;else{let f=this._isUserControllingDolly?this.draggingSmoothTime:this.smoothTime;this._spherical.radius=Hr(this._spherical.radius,this._sphericalEnd.radius,this._radiusVelocity,f,this.maxSpeed,e),this._needsUpdate=!0}if(pe(o.x)&&pe(o.y)&&pe(o.z))this._targetVelocity.set(0,0,0),this._target.copy(this._targetEnd);else{let f=this._isUserControllingTruck?this.draggingSmoothTime:this.smoothTime;bl(this._target,this._targetEnd,this._targetVelocity,f,this.maxSpeed,e,this._target),this._needsUpdate=!0}if(pe(s.x)&&pe(s.y)&&pe(s.z))this._focalOffsetVelocity.set(0,0,0),this._focalOffset.copy(this._focalOffsetEnd);else{let f=this._isUserControllingOffset?this.draggingSmoothTime:this.smoothTime;bl(this._focalOffset,this._focalOffsetEnd,this._focalOffsetVelocity,f,this.maxSpeed,e,this._focalOffset),this._needsUpdate=!0}if(pe(a))this._zoomVelocity.value=0,this._zoom=this._zoomEnd;else{let f=this._isUserControllingZoom?this.draggingSmoothTime:this.smoothTime;this._zoom=Hr(this._zoom,this._zoomEnd,this._zoomVelocity,f,1/0,e)}if(this.dollyToCursor){if(Yn(this._camera)&&this._changedDolly!==0){let f=this._spherical.radius-this._lastDistance,d=this._camera,h=this._getCameraDirection(Qi),p=$.copy(h).cross(d.up).normalize();p.lengthSq()===0&&(p.x=1);let g=ne.crossVectors(p,h),C=this._sphericalEnd.radius*Math.tan(d.getEffectiveFOV()*qi*.5),_=(this._sphericalEnd.radius-f-this._sphericalEnd.radius)/this._sphericalEnd.radius,y=gi.copy(this._targetEnd).add(p.multiplyScalar(this._dollyControlCoord.x*C*d.aspect)).add(g.multiplyScalar(this._dollyControlCoord.y*C)),m=$.copy(this._targetEnd).lerp(y,_),v=this._lastDollyDirection===mi.IN&&this._spherical.radius<=this.minDistance,x=this._lastDollyDirection===mi.OUT&&this.maxDistance<=this._spherical.radius;if(this.infinityDolly&&(v||x)){this._sphericalEnd.radius-=f,this._spherical.radius-=f;let w=ne.copy(h).multiplyScalar(-f);m.add(w)}this._boundary.clampPoint(m,m);let b=ne.subVectors(m,this._targetEnd);this._targetEnd.copy(m),this._target.add(b),this._changedDolly-=f,pe(this._changedDolly)&&(this._changedDolly=0)}else if(Dn(this._camera)&&this._changedZoom!==0){let f=this._zoom-this._lastZoom,d=this._camera,h=$.set(this._dollyControlCoord.x,this._dollyControlCoord.y,(d.near+d.far)/(d.near-d.far)).unproject(d),p=ne.set(0,0,-1).applyQuaternion(d.quaternion),g=gi.copy(h).add(p.multiplyScalar(-h.dot(d.up))),C=-(this._zoom-f-this._zoom)/this._zoom,_=this._getCameraDirection(Qi),y=this._targetEnd.dot(_),m=$.copy(this._targetEnd).lerp(g,C),v=m.dot(_),x=_.multiplyScalar(v-y);m.sub(x),this._boundary.clampPoint(m,m);let b=ne.subVectors(m,this._targetEnd);this._targetEnd.copy(m),this._target.add(b),this._changedZoom-=f,pe(this._changedZoom)&&(this._changedZoom=0)}}this._camera.zoom!==this._zoom&&(this._camera.zoom=this._zoom,this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0),this._dragNeedsUpdate=!0;let c=this._collisionTest();this._spherical.radius=Math.min(this._spherical.radius,c),this._spherical.makeSafe(),this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target),this._camera.lookAt(this._target),(!pe(this._focalOffset.x)||!pe(this._focalOffset.y)||!pe(this._focalOffset.z))&&(this._camera.updateMatrixWorld(),Kt.setFromMatrixColumn(this._camera.matrix,0),Qt.setFromMatrixColumn(this._camera.matrix,1),Gn.setFromMatrixColumn(this._camera.matrix,2),Kt.multiplyScalar(this._focalOffset.x),Qt.multiplyScalar(-this._focalOffset.y),Gn.multiplyScalar(this._focalOffset.z),$.copy(Kt).add(Qt).add(Gn),this._camera.position.add($)),this._boundaryEnclosesCamera&&this._encloseToBoundary(this._camera.position.copy(this._target),$.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse),1);let u=this._needsUpdate;return u&&!this._updatedLastTime?(this._hasRested=!1,this.dispatchEvent({type:"wake"}),this.dispatchEvent({type:"update"})):u?(this.dispatchEvent({type:"update"}),pe(n,this.restThreshold)&&pe(i,this.restThreshold)&&pe(r,this.restThreshold)&&pe(o.x,this.restThreshold)&&pe(o.y,this.restThreshold)&&pe(o.z,this.restThreshold)&&pe(s.x,this.restThreshold)&&pe(s.y,this.restThreshold)&&pe(s.z,this.restThreshold)&&pe(a,this.restThreshold)&&!this._hasRested&&(this._hasRested=!0,this.dispatchEvent({type:"rest"}))):!u&&this._updatedLastTime&&this.dispatchEvent({type:"sleep"}),this._lastDistance=this._spherical.radius,this._lastZoom=this._zoom,this._updatedLastTime=u,this._needsUpdate=!1,u}toJSON(){return JSON.stringify({enabled:this._enabled,minDistance:this.minDistance,maxDistance:Zi(this.maxDistance),minZoom:this.minZoom,maxZoom:Zi(this.maxZoom),minPolarAngle:this.minPolarAngle,maxPolarAngle:Zi(this.maxPolarAngle),minAzimuthAngle:Zi(this.minAzimuthAngle),maxAzimuthAngle:Zi(this.maxAzimuthAngle),smoothTime:this.smoothTime,draggingSmoothTime:this.draggingSmoothTime,dollySpeed:this.dollySpeed,truckSpeed:this.truckSpeed,dollyToCursor:this.dollyToCursor,verticalDragToForward:this.verticalDragToForward,target:this._targetEnd.toArray(),position:$.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),zoom:this._zoomEnd,focalOffset:this._focalOffsetEnd.toArray(),target0:this._target0.toArray(),position0:this._position0.toArray(),zoom0:this._zoom0,focalOffset0:this._focalOffset0.toArray()})}fromJSON(e,n=!1){let i=JSON.parse(e);this.enabled=i.enabled,this.minDistance=i.minDistance,this.maxDistance=Ki(i.maxDistance),this.minZoom=i.minZoom,this.maxZoom=Ki(i.maxZoom),this.minPolarAngle=i.minPolarAngle,this.maxPolarAngle=Ki(i.maxPolarAngle),this.minAzimuthAngle=Ki(i.minAzimuthAngle),this.maxAzimuthAngle=Ki(i.maxAzimuthAngle),this.smoothTime=i.smoothTime,this.draggingSmoothTime=i.draggingSmoothTime,this.dollySpeed=i.dollySpeed,this.truckSpeed=i.truckSpeed,this.dollyToCursor=i.dollyToCursor,this.verticalDragToForward=i.verticalDragToForward,this._target0.fromArray(i.target0),this._position0.fromArray(i.position0),this._zoom0=i.zoom0,this._focalOffset0.fromArray(i.focalOffset0),this.moveTo(i.target[0],i.target[1],i.target[2],n),St.setFromVector3($.fromArray(i.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)),this.rotateTo(St.theta,St.phi,n),this.dollyTo(St.radius,n),this.zoomTo(i.zoom,n),this.setFocalOffset(i.focalOffset[0],i.focalOffset[1],i.focalOffset[2],n),this._needsUpdate=!0}connect(e){if(this._domElement){console.warn("camera-controls is already connected.");return}e.setAttribute("data-camera-controls-version",xp),this._addAllEventListeners(e),this._getClientRect(this._elementRect)}disconnect(){this.cancel(),this._removeAllEventListeners(),this._domElement&&(this._domElement.removeAttribute("data-camera-controls-version"),this._domElement=void 0)}dispose(){this.removeAllEventListeners(),this.disconnect()}_getTargetDirection(e){return e.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse)}_getCameraDirection(e){return this._getTargetDirection(e).negate()}_findPointerById(e){return this._activePointers.find(n=>n.pointerId===e)}_findPointerByMouseButton(e){return this._activePointers.find(n=>n.mouseButton===e)}_disposePointer(e){this._activePointers.splice(this._activePointers.indexOf(e),1)}_encloseToBoundary(e,n,i){let r=n.lengthSq();if(r===0)return e;let o=ne.copy(n).add(e),s=this._boundary.clampPoint(o,gi).sub(o),a=s.lengthSq();if(a===0)return e.add(n);if(a===r)return e;if(i===0)return e.add(n).add(s);{let c=1+i*a/n.dot(s);return e.add(ne.copy(n).multiplyScalar(c)).add(s.multiplyScalar(1-i))}}_updateNearPlaneCorners(){if(Yn(this._camera)){let e=this._camera,n=e.near,i=e.getEffectiveFOV()*qi,r=Math.tan(i*.5)*n,o=r*e.aspect;this._nearPlaneCorners[0].set(-o,-r,0),this._nearPlaneCorners[1].set(o,-r,0),this._nearPlaneCorners[2].set(o,r,0),this._nearPlaneCorners[3].set(-o,r,0)}else if(Dn(this._camera)){let e=this._camera,n=1/e.zoom,i=e.left*n,r=e.right*n,o=e.top*n,s=e.bottom*n;this._nearPlaneCorners[0].set(i,o,0),this._nearPlaneCorners[1].set(r,o,0),this._nearPlaneCorners[2].set(r,s,0),this._nearPlaneCorners[3].set(i,s,0)}}_collisionTest(){let e=1/0;if(!(this.colliderMeshes.length>=1)||ns(this._camera,"_collisionTest"))return e;let n=this._getTargetDirection(Qi);as.lookAt(wl,n,this._camera.up);for(let i=0;i<4;i++){let r=ne.copy(this._nearPlaneCorners[i]);r.applyMatrix4(as);let o=gi.addVectors(this._target,r);Wr.set(o,n),Wr.far=this._spherical.radius+1;let s=Wr.intersectObjects(this.colliderMeshes);s.length!==0&&s[0].distance<e&&(e=s[0].distance)}return e}_getClientRect(e){if(!this._domElement)return;let n=this._domElement.getBoundingClientRect();return e.x=n.left,e.y=n.top,this._viewport?(e.x+=this._viewport.x,e.y+=n.height-this._viewport.w-this._viewport.y,e.width=this._viewport.z,e.height=this._viewport.w):(e.width=n.width,e.height=n.height),e}_createOnRestPromise(e){return e?Promise.resolve():(this._hasRested=!1,this.dispatchEvent({type:"transitionstart"}),new Promise(n=>{let i=()=>{this.removeEventListener("rest",i),n()};this.addEventListener("rest",i)}))}_addAllEventListeners(e){}_removeAllEventListeners(){}get dampingFactor(){return console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead."),0}set dampingFactor(e){console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.")}get draggingDampingFactor(){return console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."),0}set draggingDampingFactor(e){console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.")}static createBoundingSphere(e,n=new F.Sphere){let i=n,r=i.center;vi.makeEmpty(),e.traverseVisible(s=>{s.isMesh&&vi.expandByObject(s)}),vi.getCenter(r);let o=0;return e.traverseVisible(s=>{if(!s.isMesh)return;let a=s,c=a.geometry.clone();c.applyMatrix4(a.matrixWorld);let u=c.attributes.position;for(let f=0,d=u.count;f<d;f++)$.fromBufferAttribute(u,f),o=Math.max(o,r.distanceToSquared($))}),i.radius=Math.sqrt(o),i}};function _p(t){var e=t,{smoothTime:n=.05}=e,i=oi(e,["smoothTime"]);kt.install({THREE:Oh}),wh({CameraControls:kt});let r=Ge(u=>u.camera),o=Ge(u=>u.gl),s=gp(i),[a,c]=E.useState(!1);return E.useEffect(()=>{let u=s.current;if(!u)return;let{type:f,onCameraUpdate:d}=i||{};if(!d)return;let h=y=>Math.round(y*180/Math.PI),p=()=>({cAzimuthAngle:h(u.azimuthAngle),cPolarAngle:h(u.polarAngle)}),g=()=>{var y;let m={};if(f==="sphere"){let v=u?.zoom;if(Number.isFinite(v))m.cameraZoom=Number(v.toFixed(2));else{let x=(y=u?.camera)==null?void 0:y.zoom;Number.isFinite(x)&&(m.cameraZoom=Number(x.toFixed(2)))}}else Number.isFinite(u.distance)&&(m.cDistance=Number(u.distance.toFixed(2)));return m},C=()=>{c(!0)},_=()=>{c(!1),d(fe(fe({},p()),g()))};return u.addEventListener("controlstart",C),u.addEventListener("rest",_),()=>{u.removeEventListener("controlstart",C),u.removeEventListener("rest",_)}},[s,i]),l.jsx("cameraControls",{ref:s,args:[r,o.domElement],smoothTime:a?0:n,zoomSpeed:10,dollySpeed:5,maxDistance:1e3,restThreshold:.01,mouseButtons:{left:kt.ACTION.ROTATE,middle:i.type==="sphere"?kt.ACTION.ZOOM:kt.ACTION.DOLLY,right:kt.ACTION.NONE,wheel:i.type==="sphere"?kt.ACTION.ZOOM:kt.ACTION.DOLLY},touches:{one:kt.ACTION.ROTATE,two:kt.ACTION.NONE,three:kt.ACTION.NONE}})}/*! Bundled license information:

camera-controls/dist/camera-controls.module.js:
  (*!
   * camera-controls
   * https://github.com/yomotsu/camera-controls
   * (c) 2017 @yomotsu
   * Released under the MIT License.
   *)
*/function Cp(t){return l.jsx(l.Fragment,{children:l.jsx(_p,fe({},t))})}var bp=class extends Mh{constructor(t){super(t),this.type=ir}parse(t){let e=function(_,y){switch(_){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},n=`
`,i=function(_,y,m){y=y||1024;let v=_.pos,x=-1,b=0,w="",T=String.fromCharCode.apply(null,new Uint16Array(_.subarray(v,v+128)));for(;0>(x=T.indexOf(n))&&b<y&&v<_.byteLength;)w+=T,b+=T.length,v+=128,T+=String.fromCharCode.apply(null,new Uint16Array(_.subarray(v,v+128)));return-1<x?(_.pos+=b+x+1,w+T.slice(0,x)):!1},r=function(_){let y=/^#\?(\S+)/,m=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,v=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,x=/^\s*FORMAT=(\S+)\s*$/,b=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,w={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},T,A;for((_.pos>=_.byteLength||!(T=i(_)))&&e(1,"no header found"),(A=T.match(y))||e(3,"bad initial token"),w.valid|=1,w.programtype=A[1],w.string+=T+`
`;T=i(_),T!==!1;){if(w.string+=T+`
`,T.charAt(0)==="#"){w.comments+=T+`
`;continue}if((A=T.match(m))&&(w.gamma=parseFloat(A[1])),(A=T.match(v))&&(w.exposure=parseFloat(A[1])),(A=T.match(x))&&(w.valid|=2,w.format=A[1]),(A=T.match(b))&&(w.valid|=4,w.height=parseInt(A[1],10),w.width=parseInt(A[2],10)),w.valid&2&&w.valid&4)break}return w.valid&2||e(3,"missing format specifier"),w.valid&4||e(3,"missing image size specifier"),w},o=function(_,y,m){let v=y;if(v<8||v>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);v!==(_[2]<<8|_[3])&&e(3,"wrong scanline width");let x=new Uint8Array(4*y*m);x.length||e(4,"unable to allocate buffer space");let b=0,w=0,T=4*v,A=new Uint8Array(4),L=new Uint8Array(T),z=m;for(;z>0&&w<_.byteLength;){w+4>_.byteLength&&e(1),A[0]=_[w++],A[1]=_[w++],A[2]=_[w++],A[3]=_[w++],(A[0]!=2||A[1]!=2||(A[2]<<8|A[3])!=v)&&e(3,"bad rgbe scanline format");let k=0,R;for(;k<T&&w<_.byteLength;){R=_[w++];let G=R>128;if(G&&(R-=128),(R===0||k+R>T)&&e(3,"bad scanline data"),G){let V=_[w++];for(let ge=0;ge<R;ge++)L[k++]=V}else L.set(_.subarray(w,w+R),k),k+=R,w+=R}let ie=v;for(let G=0;G<ie;G++){let V=0;x[b]=L[G+V],V+=v,x[b+1]=L[G+V],V+=v,x[b+2]=L[G+V],V+=v,x[b+3]=L[G+V],b+=4}z--}return x},s=function(_,y,m,v){let x=_[y+3],b=Math.pow(2,x-128)/255;m[v+0]=_[y+0]*b,m[v+1]=_[y+1]*b,m[v+2]=_[y+2]*b,m[v+3]=1},a=function(_,y,m,v){let x=_[y+3],b=Math.pow(2,x-128)/255;m[v+0]=kr.toHalfFloat(Math.min(_[y+0]*b,65504)),m[v+1]=kr.toHalfFloat(Math.min(_[y+1]*b,65504)),m[v+2]=kr.toHalfFloat(Math.min(_[y+2]*b,65504)),m[v+3]=kr.toHalfFloat(1)},c=new Uint8Array(t);c.pos=0;let u=r(c),f=u.width,d=u.height,h=o(c.subarray(c.pos),f,d),p,g,C;switch(this.type){case Jo:C=h.length/4;let _=new Float32Array(C*4);for(let m=0;m<C;m++)s(h,m*4,_,m*4);p=_,g=Jo;break;case ir:C=h.length/4;let y=new Uint16Array(C*4);for(let m=0;m<C;m++)a(h,m*4,y,m*4);p=y,g=ir;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:f,height:d,data:p,header:u.string,gamma:u.gamma,exposure:u.exposure,type:g}}setDataType(t){return this.type=t,this}load(t,e,n,i){function r(o,s){switch(o.type){case Jo:case ir:"colorSpace"in o?o.colorSpace="srgb-linear":o.encoding=3e3,o.minFilter=Bi,o.magFilter=Bi,o.generateMipmaps=!1,o.flipY=!0;break}e&&e(o,s)}return super.load(t,r,n,i)}};new Eu;new Wt;new zr;new Wt;new Wt;new zr;new zr;new zr;new Wt;new Su;new Bh;new Wt;new Eu;new Ih;new zr;function ls(t,{path:e}){return Th(bp,t,n=>n.setPath(e))}function wp(t=!0,e=.1,n="0px"){let[i,r]=E.useState(!t),o=E.useRef(null);return E.useEffect(()=>{if(!t)return;let s=new IntersectionObserver(([a])=>{r(a.isIntersecting)},{threshold:e,rootMargin:n});return o.current&&s.observe(o.current),()=>s.disconnect()},[t,e,n]),{isInView:i,containerRef:o}}var Xu=E.createContext({}),Tp=()=>E.useContext(Xu);function Ep({children:t,style:e={},pixelDensity:n=1,fov:i=45,pointerEvents:r,className:o,envBasePath:s,lazyLoad:a=!0,threshold:c=.1,rootMargin:u="0px",preserveDrawingBuffer:f,powerPreference:d}){let{isInView:h,containerRef:p}=wp(a,c,u),g=E.useMemo(()=>({envBasePath:s}),[s]);return Sp(),l.jsx("div",{ref:p,style:fe({width:"100%",height:"100%"},e),children:(!a||h)&&l.jsx(Xu.Provider,{value:g,children:l.jsx(wa,Vi(fe({id:"gradientCanvas",style:{pointerEvents:r},resize:{offsetSize:!0},className:o},dp(n,i,{preserveDrawingBuffer:f,powerPreference:d})),{children:t}),n+i)})})}function Sp(){E.useEffect(()=>{Vr.uv2_pars_vertex="",Vr.uv2_vertex="",Vr.uv2_pars_fragment="",Vr.encodings_fragment=""},[])}var Ap=t=>t.current&&t.current.isScene,Pp=t=>Ap(t)?t.current:t;function Dp({background:t=!1,envPreset:e}){let{envBasePath:n}=Tp(),i=n||pp,r=ls("city.hdr",{path:i}),o=ls("dawn.hdr",{path:i}),s=ls("lobby.hdr",{path:i}),a={city:r,dawn:o,lobby:s}[e],c=Ge(f=>f.scene);Cu.useLayoutEffect(()=>{if(a){let f=Pp(c);f.background;let d=f.environment;return t!=="only"&&(f.environment=a),t&&(f.background=a),()=>{t!=="only"&&(f.environment=d),t&&(f.background="black")}}},[c,a,t]);let u=a;return u.mapping=jh,null}function Rp({lightType:t,brightness:e,envPreset:n}){return l.jsxs(l.Fragment,{children:[t==="3d"&&l.jsx("ambientLight",{intensity:(e||1)*Math.PI}),t==="env"&&l.jsx(E.Suspense,{fallback:l.jsx(zp,{}),children:l.jsx(Dp,{envPreset:n,background:!1,loadingCallback:()=>{}})})]})}function zp(){return l.jsx("ambientLight",{intensity:.4})}function Lp(t,e){let n=Ge(r=>r.pointer),[i]=E.useState(()=>{let r=new Fh;return function(o,s){r.setFromCamera(n,t instanceof kh?t:t.current);let a=this.constructor.prototype.raycast.bind(this);a&&a(r,s)}});return i}function Np(t,e,n){let{gl:i,size:r,viewport:o}=Ge(),s=typeof t=="number"?t:r.width*o.dpr,a=r.height*o.dpr,c=(typeof t=="number"?n:t)||{},{samples:u}=c,f=oi(c,["samples"]),d=E.useMemo(()=>{let h;return h=new Tu(s,a,fe({minFilter:Bi,magFilter:Bi,encoding:i.outputEncoding,type:ir},f)),h.samples=u,h},[]);return E.useLayoutEffect(()=>{d.setSize(s,a),u&&(d.samples=u)},[u,d,s,a]),E.useEffect(()=>()=>d.dispose(),[]),d}function Op(t,e){if(typeof t=="function")return t(e);t&&(t.current=e)}function Mp(t){return e=>{for(let n of t)Op(n,e)}}var Bp=t=>typeof t=="function",Ip=E.forwardRef((t,e)=>{var n=t,{envMap:i,resolution:r=256,frames:o=1/0,children:s,makeDefault:a}=n,c=oi(n,["envMap","resolution","frames","children","makeDefault"]);let u=Ge(({set:m})=>m),f=Ge(({camera:m})=>m),d=Ge(({size:m})=>m),h=E.useRef(null),p=E.useRef(null),g=Np(r);E.useLayoutEffect(()=>{c.manual||h.current.updateProjectionMatrix()},[d,c]),E.useLayoutEffect(()=>{h.current.updateProjectionMatrix()}),E.useLayoutEffect(()=>{if(a){let m=f;return u(()=>({camera:h.current})),()=>u(()=>({camera:m}))}},[h,a,u]);let C=0,_=null,y=Bp(s);return wt(m=>{y&&(o===1/0||C<o)&&(p.current.visible=!1,m.gl.setRenderTarget(g),_=m.scene.background,i&&(m.scene.background=i),m.gl.render(m.scene,h.current),m.scene.background=_,m.gl.setRenderTarget(null),p.current.visible=!0,C++)}),l.jsxs(l.Fragment,{children:[l.jsx("orthographicCamera",Vi(fe({left:d.width/-2,right:d.width/2,top:d.height/2,bottom:d.height/-2,ref:Mp([h,e])},c),{children:!y&&s})),l.jsx("group",{ref:p,children:y&&s(g.texture)})]})}),qu=E.createContext({}),jp=()=>E.useContext(qu),Fp=2*Math.PI,Pl=new Uh,Dl=new Su,[xi,cs]=[new hl,new hl],Rl=new Wt,zl=new Wt,kp=t=>"minPolarAngle"in t,Vp=({alignment:t="bottom-right",margin:e=[80,80],renderPriority:n=0,autoClear:i=!0,onUpdate:r,onTarget:o,children:s})=>{let a=Ge(({size:R})=>R),c=Ge(({camera:R})=>R),u=Ge(({controls:R})=>R),f=Ge(({gl:R})=>R),d=Ge(({scene:R})=>R),h=Ge(({invalidate:R})=>R),p=E.useRef(),g=E.useRef(),C=E.useRef(null),[_]=E.useState(()=>new Vh),y=E.useRef(!1),m=E.useRef(0),v=E.useRef(new Wt(0,0,0)),x=E.useRef(new Wt(0,0,0));E.useEffect(()=>{x.current.copy(c.up)},[c]);let b=E.useCallback(R=>{y.current=!0,(u||o)&&(v.current=u?.target||o?.()),m.current=c.position.distanceTo(Rl),xi.copy(c.quaternion),zl.copy(R).multiplyScalar(m.current).add(Rl),Pl.lookAt(zl),cs.copy(Pl.quaternion),h()},[u,c,o,h]);E.useEffect(()=>(d.background&&(p.current=d.background,d.background=null,_.background=p.current),()=>{p.current&&(d.background=p.current)}),[]),wt((R,ie)=>{var G;if(C.current&&g.current){if(y.current)if(xi.angleTo(cs)<.01)y.current=!1,kp(u)&&c.up.copy(x.current);else{let V=ie*Fp;xi.rotateTowards(cs,V),c.position.set(0,0,1).applyQuaternion(xi).multiplyScalar(m.current).add(v.current),c.up.set(0,1,0).applyQuaternion(xi).normalize(),c.quaternion.copy(xi),r?r():u&&u.update(),h()}Dl.copy(c.matrix).invert(),(G=g.current)==null||G.quaternion.setFromRotationMatrix(Dl),i&&(f.autoClear=!1),f.clearDepth(),f.render(_,C.current)}},n);let w=Lp(C),T=E.useMemo(()=>({tweenCamera:b,raycast:w}),[b]),[A,L]=e,z=t.endsWith("-center")?0:t.endsWith("-left")?-a.width/2+A:a.width/2-A,k=t.startsWith("center-")?0:t.startsWith("top-")?a.height/2-L:-a.height/2+L;return Eh(l.jsxs(qu.Provider,{value:T,children:[l.jsx(Ip,{ref:C,position:[0,0,200]}),l.jsx("group",{ref:g,position:[z,k,0],children:s})]}),_)};function us({scale:t=[.8,.05,.05],color:e,rotation:n}){return l.jsx("group",{rotation:n,children:l.jsxs("mesh",{position:[.4,0,0],children:[l.jsx("boxGeometry",{args:t}),l.jsx("meshBasicMaterial",{color:e,toneMapped:!1})]})})}function yi(t){var e=t,{onClick:n,font:i,disabled:r,arcStyle:o,label:s,labelColor:a,axisHeadScale:c=1}=e,u=oi(e,["onClick","font","disabled","arcStyle","label","labelColor","axisHeadScale"]);let f=Ge(C=>C.gl),d=E.useMemo(()=>{let C=document.createElement("canvas");C.width=64,C.height=64;let _=C.getContext("2d");return _.beginPath(),_.arc(32,32,16,0,2*Math.PI),_.closePath(),_.fillStyle=o,_.fill(),s&&(_.font=i,_.textAlign="center",_.fillStyle=a,_.fillText(s,32,41)),new Hh(C)},[o,s,a,i]),[h,p]=E.useState(!1),g=(s?1:.75)*(h?1.2:1)*c;return l.jsx("sprite",Vi(fe({scale:g,onPointerOver:r?void 0:C=>{C.stopPropagation(),p(!0)},onPointerOut:r?void 0:n||(C=>{C.stopPropagation(),p(!1)})},u),{children:l.jsx("spriteMaterial",{map:d,"map-encoding":f.outputEncoding,"map-anisotropy":f.capabilities.getMaxAnisotropy()||1,alphaTest:.3,opacity:s?1:.75,toneMapped:!1})}))}var Up=t=>{var e=t,{hideNegativeAxes:n,hideAxisHeads:i,disabled:r,font:o="18px Inter var, Arial, sans-serif",axisColors:s=["#ff2060","#20df80","#2080ff"],axisHeadScale:a=1,axisScale:c,labels:u=["X","Y","Z"],labelColor:f="#000",onClick:d}=e,h=oi(e,["hideNegativeAxes","hideAxisHeads","disabled","font","axisColors","axisHeadScale","axisScale","labels","labelColor","onClick"]);let[p,g,C]=s,{tweenCamera:_,raycast:y}=jp(),m={font:o,disabled:r,labelColor:f,raycast:y,onClick:d,axisHeadScale:a,onPointerDown:r?void 0:v=>{_(v.object.position),v.stopPropagation()}};return l.jsxs("group",Vi(fe({scale:40},h),{children:[l.jsx(us,{color:p,rotation:[0,0,0],scale:c}),l.jsx(us,{color:g,rotation:[0,0,Math.PI/2],scale:c}),l.jsx(us,{color:C,rotation:[0,-Math.PI/2,0],scale:c}),!i&&l.jsxs(l.Fragment,{children:[l.jsx(yi,fe({arcStyle:p,position:[1,0,0],label:u[0]},m)),l.jsx(yi,fe({arcStyle:g,position:[0,1,0],label:u[1]},m)),l.jsx(yi,fe({arcStyle:C,position:[0,0,1],label:u[2]},m)),!n&&l.jsxs(l.Fragment,{children:[l.jsx(yi,fe({arcStyle:p,position:[-1,0,0]},m)),l.jsx(yi,fe({arcStyle:g,position:[0,-1,0]},m)),l.jsx(yi,fe({arcStyle:C,position:[0,0,-1]},m))]})]}),l.jsx("ambientLight",{intensity:.5}),l.jsx("pointLight",{position:[10,10,10],intensity:.5})]}))};function Hp({margin:t=[65,110]}){return l.jsx(l.Fragment,{children:l.jsx(Vp,{alignment:"bottom-right",margin:t,renderPriority:2,children:l.jsx(Up,{axisColors:["#FF430A","#FF430A","#FF430A"],labelColor:"white",hideNegativeAxes:!0,axisHeadScale:.8})})})}var Yp={halo:{props:{type:"plane",uAmplitude:1,uDensity:1.3,uSpeed:.4,uStrength:4,uTime:0,uFrequency:5.5,range:"disabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",axesHelper:"off",brightness:1.2,cAzimuthAngle:180,cDistance:3.6,cPolarAngle:90,cameraZoom:1,color1:"#ff5005",color2:"#dbba95",color3:"#d0bce1",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"3d",pixelDensity:1,fov:45,positionX:-1.4,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:10,rotationZ:50,shader:"defaults",animate:"on",wireframe:!1}}},Gp=Lr((t,e)=>{e.exports=n=>encodeURIComponent(n).replace(/[!'()*]/g,i=>`%${i.charCodeAt(0).toString(16).toUpperCase()}`)}),Wp=Lr((t,e)=>{var n="%[a-f0-9]{2}",i=new RegExp("("+n+")|([^%]+?)","gi"),r=new RegExp("("+n+")+","gi");function o(c,u){try{return[decodeURIComponent(c.join(""))]}catch{}if(c.length===1)return c;u=u||1;var f=c.slice(0,u),d=c.slice(u);return Array.prototype.concat.call([],o(f),o(d))}function s(c){try{return decodeURIComponent(c)}catch{for(var u=c.match(i)||[],f=1;f<u.length;f++)c=o(u,f).join(""),u=c.match(i)||[];return c}}function a(c){for(var u={"%FE%FF":"��","%FF%FE":"��"},f=r.exec(c);f;){try{u[f[0]]=decodeURIComponent(f[0])}catch{var d=s(f[0]);d!==f[0]&&(u[f[0]]=d)}f=r.exec(c)}u["%C2"]="�";for(var h=Object.keys(u),p=0;p<h.length;p++){var g=h[p];c=c.replace(new RegExp(g,"g"),u[g])}return c}e.exports=function(c){if(typeof c!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof c+"`");try{return c=c.replace(/\+/g," "),decodeURIComponent(c)}catch{return a(c)}}}),$p=Lr((t,e)=>{e.exports=(n,i)=>{if(!(typeof n=="string"&&typeof i=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(i==="")return[n];let r=n.indexOf(i);return r===-1?[n]:[n.slice(0,r),n.slice(r+i.length)]}}),Xp=Lr((t,e)=>{e.exports=function(n,i){for(var r={},o=Object.keys(n),s=Array.isArray(i),a=0;a<o.length;a++){var c=o[a],u=n[c];(s?i.indexOf(c)!==-1:i(c,u,n))&&(r[c]=u)}return r}}),qp=Lr(t=>{var e=Gp(),n=Wp(),i=$p(),r=Xp(),o=m=>m==null,s=Symbol("encodeFragmentIdentifier");function a(m){switch(m.arrayFormat){case"index":return v=>(x,b)=>{let w=x.length;return b===void 0||m.skipNull&&b===null||m.skipEmptyString&&b===""?x:b===null?[...x,[f(v,m),"[",w,"]"].join("")]:[...x,[f(v,m),"[",f(w,m),"]=",f(b,m)].join("")]};case"bracket":return v=>(x,b)=>b===void 0||m.skipNull&&b===null||m.skipEmptyString&&b===""?x:b===null?[...x,[f(v,m),"[]"].join("")]:[...x,[f(v,m),"[]=",f(b,m)].join("")];case"colon-list-separator":return v=>(x,b)=>b===void 0||m.skipNull&&b===null||m.skipEmptyString&&b===""?x:b===null?[...x,[f(v,m),":list="].join("")]:[...x,[f(v,m),":list=",f(b,m)].join("")];case"comma":case"separator":case"bracket-separator":{let v=m.arrayFormat==="bracket-separator"?"[]=":"=";return x=>(b,w)=>w===void 0||m.skipNull&&w===null||m.skipEmptyString&&w===""?b:(w=w===null?"":w,b.length===0?[[f(x,m),v,f(w,m)].join("")]:[[b,f(w,m)].join(m.arrayFormatSeparator)])}default:return v=>(x,b)=>b===void 0||m.skipNull&&b===null||m.skipEmptyString&&b===""?x:b===null?[...x,f(v,m)]:[...x,[f(v,m),"=",f(b,m)].join("")]}}function c(m){let v;switch(m.arrayFormat){case"index":return(x,b,w)=>{if(v=/\[(\d*)\]$/.exec(x),x=x.replace(/\[\d*\]$/,""),!v){w[x]=b;return}w[x]===void 0&&(w[x]={}),w[x][v[1]]=b};case"bracket":return(x,b,w)=>{if(v=/(\[\])$/.exec(x),x=x.replace(/\[\]$/,""),!v){w[x]=b;return}if(w[x]===void 0){w[x]=[b];return}w[x]=[].concat(w[x],b)};case"colon-list-separator":return(x,b,w)=>{if(v=/(:list)$/.exec(x),x=x.replace(/:list$/,""),!v){w[x]=b;return}if(w[x]===void 0){w[x]=[b];return}w[x]=[].concat(w[x],b)};case"comma":case"separator":return(x,b,w)=>{let T=typeof b=="string"&&b.includes(m.arrayFormatSeparator),A=typeof b=="string"&&!T&&d(b,m).includes(m.arrayFormatSeparator);b=A?d(b,m):b;let L=T||A?b.split(m.arrayFormatSeparator).map(z=>d(z,m)):b===null?b:d(b,m);w[x]=L};case"bracket-separator":return(x,b,w)=>{let T=/(\[\])$/.test(x);if(x=x.replace(/\[\]$/,""),!T){w[x]=b&&d(b,m);return}let A=b===null?[]:b.split(m.arrayFormatSeparator).map(L=>d(L,m));if(w[x]===void 0){w[x]=A;return}w[x]=[].concat(w[x],A)};default:return(x,b,w)=>{if(w[x]===void 0){w[x]=b;return}w[x]=[].concat(w[x],b)}}}function u(m){if(typeof m!="string"||m.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function f(m,v){return v.encode?v.strict?e(m):encodeURIComponent(m):m}function d(m,v){return v.decode?n(m):m}function h(m){return Array.isArray(m)?m.sort():typeof m=="object"?h(Object.keys(m)).sort((v,x)=>Number(v)-Number(x)).map(v=>m[v]):m}function p(m){let v=m.indexOf("#");return v!==-1&&(m=m.slice(0,v)),m}function g(m){let v="",x=m.indexOf("#");return x!==-1&&(v=m.slice(x)),v}function C(m){m=p(m);let v=m.indexOf("?");return v===-1?"":m.slice(v+1)}function _(m,v){return v.parseNumbers&&!Number.isNaN(Number(m))&&typeof m=="string"&&m.trim()!==""?m=Number(m):v.parseBooleans&&m!==null&&(m.toLowerCase()==="true"||m.toLowerCase()==="false")&&(m=m.toLowerCase()==="true"),m}function y(m,v){v=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},v),u(v.arrayFormatSeparator);let x=c(v),b=Object.create(null);if(typeof m!="string"||(m=m.trim().replace(/^[?#&]/,""),!m))return b;for(let w of m.split("&")){if(w==="")continue;let[T,A]=i(v.decode?w.replace(/\+/g," "):w,"=");A=A===void 0?null:["comma","separator","bracket-separator"].includes(v.arrayFormat)?A:d(A,v),x(d(T,v),A,b)}for(let w of Object.keys(b)){let T=b[w];if(typeof T=="object"&&T!==null)for(let A of Object.keys(T))T[A]=_(T[A],v);else b[w]=_(T,v)}return v.sort===!1?b:(v.sort===!0?Object.keys(b).sort():Object.keys(b).sort(v.sort)).reduce((w,T)=>{let A=b[T];return A&&typeof A=="object"&&!Array.isArray(A)?w[T]=h(A):w[T]=A,w},Object.create(null))}t.extract=C,t.parse=y,t.stringify=(m,v)=>{if(!m)return"";v=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},v),u(v.arrayFormatSeparator);let x=A=>v.skipNull&&o(m[A])||v.skipEmptyString&&m[A]==="",b=a(v),w={};for(let A of Object.keys(m))x(A)||(w[A]=m[A]);let T=Object.keys(w);return v.sort!==!1&&T.sort(v.sort),T.map(A=>{let L=m[A];return L===void 0?"":L===null?f(A,v):Array.isArray(L)?L.length===0&&v.arrayFormat==="bracket-separator"?f(A,v)+"[]":L.reduce(b(A),[]).join("&"):f(A,v)+"="+f(L,v)}).filter(A=>A.length>0).join("&")},t.parseUrl=(m,v)=>{v=Object.assign({decode:!0},v);let[x,b]=i(m,"#");return Object.assign({url:x.split("?")[0]||"",query:y(C(m),v)},v&&v.parseFragmentIdentifier&&b?{fragmentIdentifier:d(b,v)}:{})},t.stringifyUrl=(m,v)=>{v=Object.assign({encode:!0,strict:!0,[s]:!0},v);let x=p(m.url).split("?")[0]||"",b=t.extract(m.url),w=t.parse(b,{sort:!1}),T=Object.assign(w,m.query),A=t.stringify(T,v);A&&(A=`?${A}`);let L=g(m.url);return m.fragmentIdentifier&&(L=`#${v[s]?f(m.fragmentIdentifier,v):m.fragmentIdentifier}`),`${x}${A}${L}`},t.pick=(m,v,x)=>{x=Object.assign({parseFragmentIdentifier:!0,[s]:!1},x);let{url:b,query:w,fragmentIdentifier:T}=t.parseUrl(m,x);return t.stringifyUrl({url:b,query:r(w,v),fragmentIdentifier:T},x)},t.exclude=(m,v,x)=>{let b=Array.isArray(v)?w=>!v.includes(w):(w,T)=>!v(w,T);return t.pick(m,b,x)}}),Zp=am(qp());function Kp(t){let e=fe(fe({},Yp.halo.props),t),{control:n,urlString:i,onCameraUpdate:r}=e,o=oi(e,["control","urlString","onCameraUpdate"]);n==="query"&&(o=Zp.parse(Om(i),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"}));let s=o,{lightType:a,envPreset:c,brightness:u,grain:f,toggleAxis:d}=s;return oi(s,["lightType","envPreset","brightness","grain","toggleAxis"]),l.jsxs(l.Fragment,{children:[l.jsx(Mm,fe({},o)),l.jsx(Rp,{lightType:a,brightness:u,envPreset:c}),f!=="off"&&l.jsx(fp,{}),d&&l.jsx(Hp,{}),l.jsx(Cp,Vi(fe({},o),{onCameraUpdate:r}))]})}function Qp(){return l.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"radial-gradient(ellipse at 70% 30%, #3912ff 0%, #2f0000 45%, #000000 85%)",opacity:.95}})}function Jp(){const{pixelDensity:t,frameRate:e}=E.useMemo(()=>{if(typeof window>"u")return{pixelDensity:1,frameRate:10};const n=window.innerWidth<768,i=navigator.hardwareConcurrency||4,r=n||i<4;return{pixelDensity:r?.75:1,frameRate:r?8:10}},[]);return l.jsxs("div",{className:"fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none",children:[l.jsx(E.Suspense,{fallback:l.jsx(Qp,{}),children:l.jsx(Ep,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"},children:l.jsx(Kp,{animate:"on",axesHelper:"off",brightness:1.2,cAzimuthAngle:188,cDistance:14,cPolarAngle:25,cameraZoom:5,color1:"#2f0000",color2:"#3912ff",color3:"#000000",destination:"onCanvas",embedMode:"off",envPreset:"city",format:"gif",fov:45,frameRate:e,gizmoHelper:"hide",grain:"on",lightType:"3d",pixelDensity:t,positionX:-1.4,positionY:0,positionZ:0,range:"disabled",rangeEnd:16.6,rangeStart:0,reflection:.1,rotationX:0,rotationY:10,rotationZ:50,shader:"defaults",type:"sphere",uAmplitude:1,uDensity:1.3,uFrequency:5.5,uSpeed:.5,uStrength:4,uTime:0,wireframe:!1,zoomOut:!1})})}),l.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(circle at 50% 50%, rgba(3, 3, 5, 0.25) 0%, rgba(3, 3, 5, 0.65) 60%, rgba(3, 3, 5, 0.95) 100%)"}})]})}function e0(){return l.jsx("div",{className:"fixed inset-0 pointer-events-none z-[1] opacity-[0.03] select-none",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,backgroundRepeat:"repeat"}})}class t0{constructor(){this.ctx=null}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playClick(e=.08){try{if(this.init(),!this.ctx)return;const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(1400,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.04),i.gain.setValueAtTime(e,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.04)}catch{}}playHover(e=.03){try{if(this.init(),!this.ctx)return;const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(880,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(1200,this.ctx.currentTime+.03),i.gain.setValueAtTime(e,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.03),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.03)}catch{}}playScan(e=.07){try{if(this.init(),!this.ctx)return;const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(300,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(2400,this.ctx.currentTime+.25),n.frequency.exponentialRampToValueAtTime(600,this.ctx.currentTime+.5),i.gain.setValueAtTime(e,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.5);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1800,this.ctx.currentTime),n.connect(r),r.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.5)}catch{}}playChime(e=.09){try{if(this.init(),!this.ctx)return;const n=this.ctx.currentTime;[1046.5,1318.51,1567.98].forEach((i,r)=>{const o=this.ctx.createOscillator(),s=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(i,n+r*.06),s.gain.setValueAtTime(0,n+r*.06),s.gain.linearRampToValueAtTime(e,n+r*.06+.01),s.gain.exponentialRampToValueAtTime(.001,n+r*.06+.3),o.connect(s),s.connect(this.ctx.destination),o.start(n+r*.06),o.stop(n+r*.06+.35)})}catch{}}playSwitch(e=.06){try{if(this.init(),!this.ctx)return;const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(600,this.ctx.currentTime),n.frequency.linearRampToValueAtTime(900,this.ctx.currentTime+.05),i.gain.setValueAtTime(e,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.06),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.06)}catch{}}}const Rt=new t0,B=Sh((t,e)=>({isLoaded:!1,loadingProgress:0,loadingStage:"INITIALIZING INZU LAB",setLoadingProgress:n=>t({loadingProgress:n}),setLoadingStage:n=>t({loadingStage:n}),setLoaded:()=>t({isLoaded:!0}),currentSection:"hero",setCurrentSection:n=>t({currentSection:n}),characterMode:"beauty",setCharacterMode:n=>{e().soundEnabled&&Rt.playSwitch(),t({characterMode:n})},inspectionActive:!1,setInspectionActive:n=>{e().soundEnabled&&Rt.playScan(),t({inspectionActive:n})},activeOutfit:"blazer",setActiveOutfit:n=>{e().soundEnabled&&Rt.playSwitch(),t({activeOutfit:n})},activeHotspot:null,setActiveHotspot:n=>{e().soundEnabled&&n&&Rt.playChime(.05),t({activeHotspot:n})},cursorVariant:"default",cursorLabel:"",setCursor:(n,i="")=>t({cursorVariant:n,cursorLabel:i}),resetCursor:()=>t({cursorVariant:"default",cursorLabel:""}),qualityLevel:"high",setQualityLevel:n=>t({qualityLevel:n}),soundEnabled:!1,toggleSound:()=>t(n=>{const i=!n.soundEnabled;return i&&Rt.playChime(),{soundEnabled:i}}),scrollProgress:0,setScrollProgress:n=>t({scrollProgress:n}),orbitProgress:0,setOrbitProgress:n=>t({orbitProgress:n}),heroVisible:!0,setHeroVisible:n=>t({heroVisible:n}),heroRevealed:!1,setHeroRevealed:()=>t({heroRevealed:!0}),introComplete:!1,setIntroComplete:()=>t({introComplete:!0})}));function n0(){const t=E.useRef(null),e=E.useRef(null),n=E.useRef(null),[i,r]=E.useState(!1),o=B(u=>u.cursorVariant),s=B(u=>u.cursorLabel);if(E.useEffect(()=>{if(window.matchMedia("(hover: none)").matches||"ontouchstart"in window){r(!0);return}const u=t.current,f=e.current;if(!u||!f)return;const d=we.quickTo(u,"x",{duration:.06,ease:"none"}),h=we.quickTo(u,"y",{duration:.06,ease:"none"}),p=we.quickTo(f,"x",{duration:.3,ease:"power3.out"}),g=we.quickTo(f,"y",{duration:.3,ease:"power3.out"}),C=_=>{d(_.clientX),h(_.clientY),p(_.clientX),g(_.clientY)};return window.addEventListener("mousemove",C),()=>window.removeEventListener("mousemove",C)},[]),E.useEffect(()=>{o==="wait"?we.to(t.current,{scale:1.5,opacity:.5,repeat:-1,yoyo:!0,duration:.5}):(we.killTweensOf(t.current),we.to(t.current,{scale:1,opacity:1,duration:.3}))},[o]),i)return null;const a={position:"absolute",top:0,left:0,borderRadius:"50%",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",transform:"translate(-50%, -50%)",transition:"width 0.3s var(--ease-out), height 0.3s var(--ease-out), border-color 0.3s var(--ease-out), background-color 0.3s var(--ease-out)"},c=()=>{switch(o){case"inspect":return{width:"80px",height:"80px",border:"1px solid rgba(255,255,255,0.8)"};case"explore":return{width:"70px",height:"70px",border:"1px solid rgba(255,255,255,0.3)",backgroundColor:"rgba(255,255,255,0.05)"};case"enter":return{width:"60px",height:"60px",border:"1px solid rgba(255,255,255,0.5)",backgroundColor:"rgba(255,255,255,0.1)"};case"navigate":return{width:"50px",height:"50px",border:"1px solid rgba(255,255,255,0.3)"};case"scanning":return{width:"80px",height:"80px",border:"1px solid #00ffcc"};default:return{width:"40px",height:"40px",border:"1px solid rgba(255,255,255,0.3)"}}};return l.jsxs("div",{ref:n,style:{position:"fixed",inset:0,zIndex:"var(--z-cursor)",pointerEvents:"none",overflow:"hidden"},children:[l.jsx("div",{ref:e,style:{...a,...c()},children:o!=="default"&&o!=="wait"&&l.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"9px",letterSpacing:"0.15em",textTransform:"uppercase",color:o==="scanning"?"#00ffcc":"white"},children:s||(o==="inspect"?"INSPECT":o==="explore"?"EXPLORE":o==="enter"?"ENTER":o==="scanning"?"SCANNING":"")})}),l.jsx("div",{ref:t,style:{position:"absolute",top:0,left:0,width:"6px",height:"6px",backgroundColor:"white",borderRadius:"50%",mixBlendMode:"difference",transform:"translate(-50%, -50%)",pointerEvents:"none"}})]})}function i0(){const t=E.useRef(null),e=E.useRef(null),n=B(d=>d.loadingProgress),i=B(d=>d.setLoadingProgress),r=B(d=>d.setHeroRevealed),o=B(d=>d.setIntroComplete),[s,a]=E.useState("SYSTEM INITIALIZING"),[c,u]=E.useState(!1);E.useEffect(()=>{let d=0;const h=setInterval(()=>{d+=Math.random()*12+8,d>=100?(d=100,i(100),clearInterval(h)):i(d)},180);return()=>clearInterval(h)},[i]),E.useEffect(()=>{n>=100?(a("EXPERIENCE READY"),u(!0),e.current&&we.to(e.current,{opacity:.9,scale:1.02,duration:.8}),we.timeline({onComplete:()=>{r(),setTimeout(()=>{o()},300)}}).to(t.current,{y:"-100%",duration:1.3,ease:"power3.inOut",delay:.6})):n>=80?(a("SYNCHRONIZING LIGHT / 3D WORLD"),e.current&&we.to(e.current,{opacity:.7,duration:.6})):n>=60?(a("CALIBRATING COUTURE MATERIAL"),e.current&&we.to(e.current,{opacity:.45,duration:.6})):n>=40?(a("OBJECT DETECTED / LOADING GEOMETRY"),e.current&&we.to(e.current,{opacity:.25,duration:.6})):n>=20?(a("INZU LAB / ACCESS GRANTED"),e.current&&we.to(e.current,{opacity:.1,duration:.6})):a("SYSTEM INITIALIZING")},[n,r,o]);const f=Math.floor(n).toString().padStart(3,"0")+"%";return l.jsxs("div",{ref:t,style:{position:"fixed",inset:0,zIndex:"var(--z-loading, 50)",backgroundColor:"#030303",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontFamily:"var(--font-mono)",color:c?"#00ffcc":"#e0e0e0",transition:"color 0.4s ease",overflow:"hidden",pointerEvents:c?"none":"auto"},children:[l.jsx("div",{ref:e,style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"clamp(280px, 35vw, 480px)",height:"clamp(380px, 50vh, 680px)",opacity:0,pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 0 25px rgba(255,255,255,0.15))"},children:l.jsx("img",{src:"/inzu-character.png",alt:"Celestial Couture Silhouette",style:{width:"100%",height:"100%",objectFit:"contain",maskImage:"radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 80%)",WebkitMaskImage:"radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 80%)"}})}),l.jsx("div",{style:{position:"relative",zIndex:2,fontSize:"11px",letterSpacing:"0.25em",textTransform:"uppercase",padding:"0.6rem 1.4rem",border:c?"1px solid #00ffcc":"1px solid rgba(255,255,255,0.08)",backgroundColor:"rgba(5, 5, 5, 0.75)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",transition:"border-color 0.4s ease"},children:s}),l.jsxs("div",{style:{position:"absolute",bottom:"2.5rem",left:"2.5rem",fontSize:"11px",color:"#888",letterSpacing:"0.15em"},children:[l.jsx("span",{children:"CALIBRATION / "}),l.jsx("span",{style:{color:c?"#00ffcc":"white"},children:f})]}),l.jsx("div",{style:{position:"absolute",bottom:"2.5rem",right:"2.5rem",fontSize:"11px",color:"#444",letterSpacing:"0.2em"},children:"INZU ARCHITECTURE / 2026"}),l.jsx("div",{style:{position:"absolute",bottom:0,left:0,width:"100%",height:"2px",backgroundColor:"#0a0a0a"},children:l.jsx("div",{style:{height:"100%",width:`${n}%`,backgroundColor:c?"#00ffcc":"#ffffff",boxShadow:c?"0 0 10px #00ffcc":"0 0 8px rgba(255,255,255,0.3)",transition:"width 0.2s ease, background-color 0.4s ease"}})})]})}function r0(){const[t,e]=E.useState(!1),n=B(c=>c.soundEnabled),i=B(c=>c.toggleSound),r=B(c=>c.setCursor),o=B(c=>c.resetCursor);E.useEffect(()=>{const c=()=>{e(window.scrollY>60)};return window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]);const s=c=>{const u=document.getElementById(c);u&&u.scrollIntoView({behavior:"smooth"})},a=[{label:"EXPERIENCE",id:"hero"},{label:"DISSECTION",id:"surface-structure"},{label:"SELECTED WORKS",id:"portfolio"},{label:"CAPABILITIES",id:"features"},{label:"STUDIO",id:"about"},{label:"CONTACT",id:"contact"}];return l.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${t?"bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]":"bg-transparent"}`,children:[l.jsxs("div",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),onMouseEnter:()=>r("enter","HOME"),onMouseLeave:o,className:"flex items-center gap-3 cursor-none group",children:[l.jsxs("div",{className:"relative flex h-2.5 w-2.5 items-center justify-center",children:[l.jsx("span",{className:"absolute h-full w-full animate-ping rounded-full bg-scan opacity-75"}),l.jsx("span",{className:"relative h-2 w-2 rounded-full bg-scan"})]}),l.jsxs("div",{className:"flex items-baseline gap-2",children:[l.jsx("span",{className:"font-display text-xl font-bold tracking-widest text-white transition-colors duration-200 group-hover:text-scan",children:"INZU"}),l.jsx("span",{className:"font-mono text-[9px] tracking-widest text-scan uppercase border border-scan/30 bg-scan/10 px-1.5 py-0.5 rounded",children:"LAB 2026"})]})]}),l.jsx("nav",{className:"hidden lg:flex items-center gap-1 bg-black/40 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-xl",children:a.map(c=>l.jsx("button",{onClick:()=>{n&&Rt.playClick(.06),s(c.id)},onMouseEnter:()=>{n&&Rt.playHover(.02),r("navigate",c.label)},onMouseLeave:o,className:"rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60 transition-all duration-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/10 hover:text-white cursor-none",children:c.label},c.id))}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("button",{onClick:i,onMouseEnter:()=>r("enter",n?"MUTE":"SOUND"),onMouseLeave:o,className:"flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[10px] tracking-widest text-white/70 backdrop-blur-md transition-all duration-200 hover:border-scan hover:text-scan cursor-none",children:[l.jsx("span",{children:n?"SFX ON":"SFX OFF"}),l.jsxs("span",{className:"flex items-end gap-[2px] h-3",children:[l.jsx("span",{className:`w-[2px] rounded-full bg-scan transition-all duration-150 ${n?"h-3 animate-pulse":"h-1"}`}),l.jsx("span",{className:`w-[2px] rounded-full bg-scan transition-all duration-150 ${n?"h-2 animate-pulse delay-75":"h-1"}`}),l.jsx("span",{className:`w-[2px] rounded-full bg-scan transition-all duration-150 ${n?"h-3 animate-pulse delay-150":"h-1"}`})]})]}),l.jsx("button",{onClick:()=>s("contact"),onMouseEnter:()=>r("enter","INITIATE"),onMouseLeave:o,className:"inline-flex items-center justify-center rounded-full border border-scan/50 bg-scan/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-scan backdrop-blur-md transition-all duration-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-scan hover:text-black hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] cursor-none",children:"START PROJECT"})]})]})}const Zu=E.createContext({});function Ra(t){const e=E.useRef(null);return e.current===null&&(e.current=t()),e.current}const o0=typeof window<"u",Ku=o0?E.useLayoutEffect:E.useEffect,za=E.createContext(null);function La(t,e){t.indexOf(e)===-1&&t.push(e)}function Do(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const sn=(t,e,n)=>n>e?e:n<t?t:n;let Yo=()=>{};const Bn={},Qu=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Ju=t=>typeof t=="object"&&t!==null,ef=t=>/^0[^.\s]+$/u.test(t);function tf(t){let e;return()=>(e===void 0&&(e=t()),e)}const Lt=t=>t,Nr=(...t)=>t.reduce((e,n)=>i=>n(e(i))),Tr=(t,e,n)=>{const i=e-t;return i?(n-t)/i:1};class Na{constructor(){this.subscriptions=[]}add(e){return La(this.subscriptions,e),()=>Do(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let o=0;o<r;o++){const s=this.subscriptions[o];s&&s(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Nt=t=>t*1e3,zt=t=>t/1e3,nf=(t,e)=>e?t*(1e3/e):0,rf=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,s0=1e-7,a0=12;function l0(t,e,n,i,r){let o,s,a=0;do s=e+(n-e)/2,o=rf(s,i,r)-t,o>0?n=s:e=s;while(Math.abs(o)>s0&&++a<a0);return s}function Or(t,e,n,i){if(t===e&&n===i)return Lt;const r=o=>l0(o,0,1,t,n);return o=>o===0||o===1?o:rf(r(o),e,i)}const of=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,sf=t=>e=>1-t(1-e),af=Or(.33,1.53,.69,.99),Oa=sf(af),lf=of(Oa),cf=t=>t>=1?1:(t*=2)<1?.5*Oa(t):.5*(2-Math.pow(2,-10*(t-1))),Ma=t=>1-Math.sin(Math.acos(t)),uf=sf(Ma),ff=of(Ma),c0=Or(.42,0,1,1),u0=Or(0,0,.58,1),df=Or(.42,0,.58,1),f0=t=>Array.isArray(t)&&typeof t[0]!="number",hf=t=>Array.isArray(t)&&typeof t[0]=="number",d0={linear:Lt,easeIn:c0,easeInOut:df,easeOut:u0,circIn:Ma,circInOut:ff,circOut:uf,backIn:Oa,backInOut:lf,backOut:af,anticipate:cf},h0=t=>typeof t=="string",Ll=t=>{if(hf(t)){Yo(t.length===4);const[e,n,i,r]=t;return Or(e,n,i,r)}else if(h0(t))return d0[t];return t},$r=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function m0(t){let e=new Set,n=new Set,i=!1,r=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(u){o.has(u)&&(c.schedule(u),t()),u(s)}const c={schedule:(u,f=!1,d=!1)=>{const p=d&&i?e:n;return f&&o.add(u),p.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,i){r=!0;return}i=!0;const f=e;e=n,n=f,e.forEach(a),e.clear(),i=!1,r&&(r=!1,c.process(u))}};return c}const p0=40;function mf(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=$r.reduce((v,x)=>(v[x]=m0(o),v),{}),{setup:a,read:c,resolveKeyframes:u,preUpdate:f,update:d,preRender:h,render:p,postRender:g}=s,C=()=>{const v=Bn.useManualTiming,x=v?r.timestamp:performance.now();n=!1,v||(r.delta=i?1e3/60:Math.max(Math.min(x-r.timestamp,p0),1)),r.timestamp=x,r.isProcessing=!0,a.process(r),c.process(r),u.process(r),f.process(r),d.process(r),h.process(r),p.process(r),g.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(C))},_=()=>{n=!0,i=!0,r.isProcessing||t(C)};return{schedule:$r.reduce((v,x)=>{const b=s[x];return v[x]=(w,T=!1,A=!1)=>(n||_(),b.schedule(w,T,A)),v},{}),cancel:v=>{for(let x=0;x<$r.length;x++)s[$r[x]].cancel(v)},state:r,steps:s}}const{schedule:ce,cancel:_n,state:Ye,steps:fs}=mf(typeof requestAnimationFrame<"u"?requestAnimationFrame:Lt,!0);let ho;function g0(){ho=void 0}const ft={now:()=>(ho===void 0&&ft.set(Ye.isProcessing||Bn.useManualTiming?Ye.timestamp:performance.now()),ho),set:t=>{ho=t,queueMicrotask(g0)}},pf=t=>e=>typeof e=="string"&&e.startsWith(t),gf=pf("--"),v0=pf("var(--"),Ba=t=>v0(t)?x0.test(t.split("/*")[0].trim()):!1,x0=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Nl(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Ui={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Er={...Ui,transform:t=>sn(0,1,t)},Xr={...Ui,default:1},ur=t=>Math.round(t*1e5)/1e5,Ia=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function y0(t){return t==null}const _0=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ja=(t,e)=>n=>!!(typeof n=="string"&&_0.test(n)&&n.startsWith(t)||e&&!y0(n)&&Object.prototype.hasOwnProperty.call(n,e)),vf=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,o,s,a]=i.match(Ia);return{[t]:parseFloat(r),[e]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},C0=t=>sn(0,255,t),ds={...Ui,transform:t=>Math.round(C0(t))},Kn={test:ja("rgb","red"),parse:vf("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+ds.transform(t)+", "+ds.transform(e)+", "+ds.transform(n)+", "+ur(Er.transform(i))+")"};function b0(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const ks={test:ja("#"),parse:b0,transform:Kn.transform},Mr=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),pn=Mr("deg"),rn=Mr("%"),M=Mr("px"),w0=Mr("vh"),T0=Mr("vw"),Ol={...rn,parse:t=>rn.parse(t)/100,transform:t=>rn.transform(t*100)},Si={test:ja("hsl","hue"),parse:vf("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+rn.transform(ur(e))+", "+rn.transform(ur(n))+", "+ur(Er.transform(i))+")"},Le={test:t=>Kn.test(t)||ks.test(t)||Si.test(t),parse:t=>Kn.test(t)?Kn.parse(t):Si.test(t)?Si.parse(t):ks.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Kn.transform(t):Si.transform(t),getAnimatableNone:t=>{const e=Le.parse(t);return e.alpha=0,Le.transform(e)}},E0=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function S0(t){return isNaN(t)&&typeof t=="string"&&(t.match(Ia)?.length||0)+(t.match(E0)?.length||0)>0}const xf="number",yf="color",A0="var",P0="var(",Ml="${}",D0=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ii(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let o=0;const a=e.replace(D0,c=>(Le.test(c)?(i.color.push(o),r.push(yf),n.push(Le.parse(c))):c.startsWith(P0)?(i.var.push(o),r.push(A0),n.push(c)):(i.number.push(o),r.push(xf),n.push(parseFloat(c))),++o,Ml)).split(Ml);return{values:n,split:a,indexes:i,types:r}}function R0(t){return Ii(t).values}function _f({split:t,types:e}){const n=t.length;return i=>{let r="";for(let o=0;o<n;o++)if(r+=t[o],i[o]!==void 0){const s=e[o];s===xf?r+=ur(i[o]):s===yf?r+=Le.transform(i[o]):r+=i[o]}return r}}function z0(t){return _f(Ii(t))}const L0=t=>typeof t=="number"?0:Le.test(t)?Le.getAnimatableNone(t):t,N0=(t,e)=>typeof t=="number"?e?.trim().endsWith("/")?t:0:L0(t);function O0(t){const e=Ii(t);return _f(e)(e.values.map((i,r)=>N0(i,e.split[r])))}const Gt={test:S0,parse:R0,createTransformer:z0,getAnimatableNone:O0};function hs(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function M0({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,o=0,s=0;if(!e)r=o=s=n;else{const a=n<.5?n*(1+e):n+e-n*e,c=2*n-a;r=hs(c,a,t+1/3),o=hs(c,a,t),s=hs(c,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:i}}function Ro(t,e){return n=>n>0?e:t}const he=(t,e,n)=>t+(e-t)*n,ms=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},B0=[ks,Kn,Si],I0=t=>B0.find(e=>e.test(t));function Bl(t){const e=I0(t);if(!e)return!1;let n=e.parse(t);return e===Si&&(n=M0(n)),n}const Il=(t,e)=>{const n=Bl(t),i=Bl(e);if(!n||!i)return Ro(t,e);const r={...n};return o=>(r.red=ms(n.red,i.red,o),r.green=ms(n.green,i.green,o),r.blue=ms(n.blue,i.blue,o),r.alpha=he(n.alpha,i.alpha,o),Kn.transform(r))},Vs=new Set(["none","hidden"]);function j0(t,e){return Vs.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function F0(t,e){return n=>he(t,e,n)}function Fa(t){return typeof t=="number"?F0:typeof t=="string"?Ba(t)?Ro:Le.test(t)?Il:U0:Array.isArray(t)?Cf:typeof t=="object"?Le.test(t)?Il:k0:Ro}function Cf(t,e){const n=[...t],i=n.length,r=t.map((o,s)=>Fa(o)(o,e[s]));return o=>{for(let s=0;s<i;s++)n[s]=r[s](o);return n}}function k0(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Fa(t[r])(t[r],e[r]));return r=>{for(const o in i)n[o]=i[o](r);return n}}function V0(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],s=t.indexes[o][i[o]],a=t.values[s]??0;n[r]=a,i[o]++}return n}const U0=(t,e)=>{const n=Gt.createTransformer(e),i=Ii(t),r=Ii(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Vs.has(t)&&!r.values.length||Vs.has(e)&&!i.values.length?j0(t,e):Nr(Cf(V0(i,r),r.values),n):Ro(t,e)};function bf(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?he(t,e,n):Fa(t)(t,e)}const H0=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>ce.update(e,n),stop:()=>_n(e),now:()=>Ye.isProcessing?Ye.timestamp:ft.now()}},wf=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let o=0;o<r;o++)i+=Math.round(t(o/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},ka=2e4;function Va(t,e=50,n=ka,i){let r=0,o=t.next(r);for(;!o.done&&r<n;)r+=e,o=t.next(r);return r>=n?1/0:r}function Y0(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Va(i),ka);return{type:"keyframes",ease:o=>i.next(r*o).value/e,duration:zt(r)}}const be={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Us(t,e){return t*Math.sqrt(1-e*e)}const G0=12;function W0(t,e,n){let i=n;for(let r=1;r<G0;r++)i=i-t(i)/e(i);return i}const ps=.001;function $0({duration:t=be.duration,bounce:e=be.bounce,velocity:n=be.velocity,mass:i=be.mass}){let r,o,s=1-e;s=sn(be.minDamping,be.maxDamping,s),t=sn(be.minDuration,be.maxDuration,zt(t)),s<1?(r=u=>{const f=u*s,d=f*t,h=f-n,p=Us(u,s),g=Math.exp(-d);return ps-h/p*g},o=u=>{const d=u*s*t,h=d*n+n,p=s*s*u*u*t,g=Math.exp(-d),C=Us(u*u,s);return(-r(u)+ps>0?-1:1)*((h-p)*g)/C}):(r=u=>{const f=Math.exp(-u*t),d=(u-n)*t+1;return-ps+f*d},o=u=>{const f=Math.exp(-u*t),d=(n-u)*(t*t);return f*d});const a=5/t,c=W0(r,o,a);if(t=Nt(t),isNaN(c))return{stiffness:be.stiffness,damping:be.damping,duration:t};{const u=c*c*i;return{stiffness:u,damping:s*2*Math.sqrt(i*u),duration:t}}}const X0=["duration","bounce"],q0=["stiffness","damping","mass"];function jl(t,e){return e.some(n=>t[n]!==void 0)}function Z0(t){let e={velocity:be.velocity,stiffness:be.stiffness,damping:be.damping,mass:be.mass,isResolvedFromDuration:!1,...t};if(!jl(t,q0)&&jl(t,X0))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,o=2*sn(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:be.mass,stiffness:r,damping:o}}else{const n=$0({...t,velocity:0});e={...e,...n,mass:be.mass},e.isResolvedFromDuration=!0}return e}function zo(t=be.visualDuration,e=be.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:c,damping:u,mass:f,duration:d,velocity:h,isResolvedFromDuration:p}=Z0({...n,velocity:-zt(n.velocity||0)}),g=h||0,C=u/(2*Math.sqrt(c*f)),_=s-o,y=zt(Math.sqrt(c/f)),m=C*y,v=Math.abs(_)<5;i||(i=v?be.restSpeed.granular:be.restSpeed.default),r||(r=v?be.restDelta.granular:be.restDelta.default);let x,b;if(C<1){const T=Us(y,C),A=(g+m*_)/T,L=m*A+_*T,z=m*_-A*T;let k=-1,R=0,ie=0;const G=V=>{if(V!==k){k=V;const ge=Math.exp(-m*V),re=Math.sin(T*V),W=Math.cos(T*V);R=s-ge*(A*re+_*W),ie=ge*(L*re+z*W)}};x=V=>(G(V),R),b=V=>(G(V),ie)}else if(C===1){x=A=>s-Math.exp(-y*A)*(_+(g+y*_)*A);const T=g+y*_;b=A=>Math.exp(-y*A)*(y*T*A-g)}else{const T=y*Math.sqrt(C*C-1);x=k=>{const R=Math.exp(-m*k),ie=Math.min(T*k,300);return s-R*((g+m*_)*Math.sinh(ie)+T*_*Math.cosh(ie))/T};const A=(g+m*_)/T,L=m*A-_*T,z=m*_-A*T;b=k=>{const R=Math.exp(-m*k),ie=Math.min(T*k,300);return R*(L*Math.sinh(ie)+z*Math.cosh(ie))}}const w={calculatedDuration:p&&d||null,velocity:T=>Nt(b(T)),next:T=>{const A=x(T);if(p)a.done=T>=d;else{const L=Nt(b(T));a.done=Math.abs(L)<=i&&Math.abs(s-A)<=r}return a.value=a.done?s:A,a},toString:()=>{const T=Math.min(Va(w),ka),A=wf(L=>w.next(T*L).value,T,30);return T+"ms "+A},toTransition:()=>{}};return w}zo.applyToOptions=t=>{const e=Y0(t,100,zo);return t.ease=e.ease,t.duration=Nt(e.duration),t.type="keyframes",t};function Hs({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:c,restDelta:u=.5,restSpeed:f}){const d=t[0],h={done:!1,value:d},p=T=>T<a||T>c,g=T=>a===void 0?c:c===void 0||Math.abs(a-T)<Math.abs(c-T)?a:c;let C=n*e;const _=d+C,y=s===void 0?_:s(_);y!==_&&(C=y-d);const m=T=>-C*Math.exp(-T/i),v=T=>{const A=m(T);h.done=Math.abs(A)<=u,h.value=h.done?y:y+A};let x,b;const w=T=>{p(h.value)&&(x=T,b=zo({keyframes:[h.value,g(h.value)],velocity:-m(T)/i*1e3,damping:r,stiffness:o,restDelta:u,restSpeed:f}))};return w(0),{calculatedDuration:null,next:T=>{let A=!1;return!b&&x===void 0&&(A=!0,v(T),w(T)),x!==void 0&&T>=x?b.next(T-x):(!A&&v(T),h)}}}function K0(t,e,n){const i=[],r=n||Bn.mix||bf,o=t.length-1;for(let s=0;s<o;s++){let a=r(t[s],t[s+1]);if(e){const c=Array.isArray(e)?e[s]||Lt:e;a=Nr(c,a)}i.push(a)}return i}function Tf(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const o=t.length;if(Yo(o===e.length),o===1)return()=>e[0];if(o===2&&e[0]===e[1])return()=>e[1];const s=t[0]===t[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=K0(e,i,r),c=a.length,u=f=>{if(s&&f<t[0])return e[0];let d=0;if(c>1)for(;d<t.length-2&&!(f<t[d+1]);d++);const h=Tr(t[d],t[d+1],f);return a[d](h)};return n?f=>u(sn(t[0],t[o-1],f)):u}function Q0(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Tr(0,e,i);t.push(he(n,1,r))}}function J0(t){const e=[0];return Q0(e,t.length-1),e}function eg(t,e){return t.map(n=>n*e)}function tg(t,e){return t.map(()=>e||df).splice(0,t.length-1)}function fr({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=f0(i)?i.map(Ll):Ll(i),o={done:!1,value:e[0]},s=eg(n&&n.length===e.length?n:J0(e),t),a=Tf(s,e,{ease:Array.isArray(r)?r:tg(e,r)});return{calculatedDuration:t,next:c=>(o.value=a(c),o.done=c>=t,o)}}const ng=5;function ig(t,e,n){const i=Math.max(e-ng,0);return nf(n-t(i),e-i)}const rg=t=>t!==null;function Go(t,{repeat:e,repeatType:n="loop"},i,r=1){const o=t.filter(rg),a=r<0||e&&n!=="loop"&&e%2===1?0:o.length-1;return!a||i===void 0?o[a]:i}const og={decay:Hs,inertia:Hs,tween:fr,keyframes:fr,spring:zo};function Ef(t){typeof t.type=="string"&&(t.type=og[t.type])}class Ua{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const sg=t=>t/100;class Sr extends Ua{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==ft.now()&&this.tick(ft.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Ef(e);const{type:n=fr,repeat:i=0,repeatDelay:r=0,repeatType:o,velocity:s=0}=e;let{keyframes:a}=e;const c=n||fr;c!==fr&&typeof a[0]!="number"&&(this.mixKeyframes=Nr(sg,bf(a[0],a[1])),a=[0,100]);const u=c({...e,keyframes:a});o==="mirror"&&(this.mirroredGenerator=c({...e,keyframes:[...a].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=Va(u));const{calculatedDuration:f}=u;this.calculatedDuration=f,this.resolvedDuration=f+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=u}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:c}=this;if(this.startTime===null)return i.next(0);const{delay:u=0,keyframes:f,repeat:d,repeatType:h,repeatDelay:p,type:g,onUpdate:C,finalKeyframe:_}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const y=this.currentTime-u*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?y<0:y>r;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,x=i;if(d){const A=Math.min(this.currentTime,r)/a;let L=Math.floor(A),z=A%1;!z&&A>=1&&(z=1),z===1&&L--,L=Math.min(L,d+1),!!(L%2)&&(h==="reverse"?(z=1-z,p&&(z-=p/a)):h==="mirror"&&(x=s)),v=sn(0,1,z)*a}let b;m?(this.delayState.value=f[0],b=this.delayState):b=x.next(v),o&&!m&&(b.value=o(b.value));let{done:w}=b;!m&&c!==null&&(w=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return T&&g!==Hs&&(b.value=Go(f,this.options,_,this.speed)),C&&C(b.value),T&&this.finish(),b}then(e,n){return this.finished.then(e,n)}get duration(){return zt(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+zt(e)}get time(){return zt(this.currentTime)}set time(e){e=Nt(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return ig(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(ft.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=zt(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=H0,startTime:n}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),this.options.onPlay?.();const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ft.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function ag(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Qn=t=>t*180/Math.PI,Ys=t=>{const e=Qn(Math.atan2(t[1],t[0]));return Gs(e)},lg={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Ys,rotateZ:Ys,skewX:t=>Qn(Math.atan(t[1])),skewY:t=>Qn(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Gs=t=>(t=t%360,t<0&&(t+=360),t),Fl=Ys,kl=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Vl=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),cg={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:kl,scaleY:Vl,scale:t=>(kl(t)+Vl(t))/2,rotateX:t=>Gs(Qn(Math.atan2(t[6],t[5]))),rotateY:t=>Gs(Qn(Math.atan2(-t[2],t[0]))),rotateZ:Fl,rotate:Fl,skewX:t=>Qn(Math.atan(t[4])),skewY:t=>Qn(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ws(t){return t.includes("scale")?1:0}function $s(t,e){if(!t||t==="none")return Ws(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=cg,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=lg,r=a}if(!r)return Ws(e);const o=i[e],s=r[1].split(",").map(fg);return typeof o=="function"?o(s):s[o]}const ug=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return $s(n,e)};function fg(t){return parseFloat(t.trim())}const Hi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Yi=new Set([...Hi,"pathRotation"]),Ul=t=>t===Ui||t===M,dg=new Set(["x","y","z"]),hg=Hi.filter(t=>!dg.has(t));function mg(t){const e=[];return hg.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Ln={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>$s(e,"x"),y:(t,{transform:e})=>$s(e,"y")};Ln.translateX=Ln.x;Ln.translateY=Ln.y;const ei=new Set;let Xs=!1,qs=!1,Zs=!1;function Sf(){if(qs){const t=Array.from(ei).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=mg(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([o,s])=>{i.getValue(o)?.set(s)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}qs=!1,Xs=!1,ei.forEach(t=>t.complete(Zs)),ei.clear()}function Af(){ei.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(qs=!0)})}function pg(){Zs=!0,Af(),Sf(),Zs=!1}class Ha{constructor(e,n,i,r,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(ei.add(this),Xs||(Xs=!0,ce.read(Af),ce.resolveKeyframes(Sf))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const o=r?.get(),s=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const a=i.readValue(n,s);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=s),r&&o===void 0&&r.set(e[0])}ag(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ei.delete(this)}cancel(){this.state==="scheduled"&&(ei.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const gg=t=>t.startsWith("--");function Pf(t,e,n){gg(e)?t.style.setProperty(e,n):t.style[e]=n}const vg={};function Df(t,e){const n=tf(t);return()=>vg[e]??n()}const xg=Df(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Rf=Df(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),rr=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Hl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:rr([0,.65,.55,1]),circOut:rr([.55,0,1,.45]),backIn:rr([.31,.01,.66,-.59]),backOut:rr([.33,1.53,.69,.99])};function zf(t,e){if(t)return typeof t=="function"?Rf()?wf(t,e):"ease-out":hf(t)?rr(t):Array.isArray(t)?t.map(n=>zf(n,e)||Hl.easeOut):Hl[t]}function yg(t,e,n,{delay:i=0,duration:r=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:c}={},u=void 0){const f={[e]:n};c&&(f.offset=c);const d=zf(a,r);Array.isArray(d)&&(f.easing=d);const h={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return u&&(h.pseudoElement=u),t.animate(f,h)}function Lf(t){return typeof t=="function"&&"applyToOptions"in t}function _g({type:t,...e}){return Lf(t)&&Rf()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class Nf extends Ua{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:c}=e;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=e,Yo(typeof e.type!="string");const u=_g(e);this.animation=yg(n,i,r,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const f=Go(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(f),Pf(n,i,f),this.animation.cancel()}c?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return zt(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+zt(e)}get time(){return zt(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Nt(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&xg()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),Lt):r(this)}}const Of={anticipate:cf,backInOut:lf,circInOut:ff};function Cg(t){return t in Of}function bg(t){typeof t.ease=="string"&&Cg(t.ease)&&(t.ease=Of[t.ease])}const gs=10;class wg extends Nf{constructor(e){bg(e),Ef(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:o,...s}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new Sr({...s,autoplay:!1}),c=Math.max(gs,ft.now()-this.startTime),u=sn(0,gs,c-gs),f=a.sample(c).value,{name:d}=this.options;o&&d&&Pf(o,d,f),n.setWithVelocity(a.sample(Math.max(0,c-u)).value,f,u),a.stop()}}const Yl=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Gt.test(t)||t==="0")&&!t.startsWith("url("));function Tg(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function Eg(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const o=t[t.length-1],s=Yl(r,e),a=Yl(o,e);return!s||!a?!1:Tg(t)||(n==="spring"||Lf(n))&&i}function Ks(t){t.duration=0,t.type="keyframes"}const Mf=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Sg=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Ag(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&Sg.test(t[e]))return!0;return!1}const Pg=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Dg=tf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Rg(t){const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:o,type:s,keyframes:a}=t,c=e?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;const{onUpdate:u,transformTemplate:f}=e.owner.getProps();return Dg()&&n&&(Mf.has(n)||Pg.has(n)&&Ag(a))&&(n!=="transform"||!f)&&!u&&!i&&r!=="mirror"&&o!==0&&s!=="inertia"}const zg=40;class Lg extends Ua{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:c,motionValue:u,element:f,...d}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ft.now();const h={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:o,repeatType:s,name:c,motionValue:u,element:f,...d},p=f?.KeyframeResolver||Ha;this.keyframeResolver=new p(a,(g,C,_)=>this.onKeyframesResolved(g,C,h,!_),c,u,f),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,n,i,r){this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:c,isHandoff:u,onUpdate:f}=i;this.resolvedAt=ft.now();let d=!0;Eg(e,o,s,a)||(d=!1,(Bn.instantAnimations||!c)&&f?.(Go(e,i,n)),e[0]=e[e.length-1],Ks(i),i.repeat=0);const p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>zg?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},g=d&&!u&&Rg(p),C=p.motionValue?.owner?.current;let _;if(g)try{_=new wg({...p,element:C})}catch{_=new Sr(p)}else _=new Sr(p);_.finished.then(()=>{this.notifyFinished()}).catch(Lt),this.pendingTimeline&&(this.stopTimeline=_.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=_}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),pg()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function Bf(t,e,n,i=0,r=1){const o=Array.from(t).sort((u,f)=>u.sortNodePosition(f)).indexOf(e),s=t.size,a=(s-1)*i;return typeof n=="function"?n(o,s):r===1?o*i:a-o*i}const Gl=30,Ng=t=>!isNaN(parseFloat(t)),dr={current:void 0};class Og{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{const r=ft.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ft.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Ng(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Na);const i=this.events[e].add(n);return e==="change"?()=>{i(),ce.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return dr.current&&dr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Gl)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Gl);return nf(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function si(t,e){return new Og(t,e)}function If(t,e){if(t?.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function Ya(t,e){const n=t?.[e]??t?.default??t;return n!==t?If(n,t):n}const Mg={type:"spring",stiffness:500,damping:25,restSpeed:10},Bg=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Ig={type:"keyframes",duration:.8},jg={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Fg=(t,{keyframes:e})=>e.length>2?Ig:Yi.has(t)?t.startsWith("scale")?Bg(e[1]):Mg:jg,kg=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Vg(t){for(const e in t)if(!kg.has(e))return!0;return!1}const Ga=(t,e,n,i={},r,o)=>s=>{const a=Ya(i,t)||{},c=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-Nt(c);const f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:o?void 0:r};Vg(a)||Object.assign(f,Fg(t,f)),f.duration&&(f.duration=Nt(f.duration)),f.repeatDelay&&(f.repeatDelay=Nt(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let d=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(Ks(f),f.delay===0&&(d=!0)),(Bn.instantAnimations||Bn.skipAnimations||r?.shouldSkipAnimations||a.skipAnimations)&&(d=!0,Ks(f),f.delay=0),f.allowFlatten=!a.type&&!a.ease,d&&!o&&e.get()!==void 0){const h=Go(f.keyframes,a);if(h!==void 0){ce.update(()=>{f.onUpdate(h),f.onComplete()});return}}return a.isSync?new Sr(f):new Lg(f)},Ug=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Hg(t){const e=Ug.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function jf(t,e,n=1){const[i,r]=Hg(t);if(!i)return;const o=window.getComputedStyle(e).getPropertyValue(i);if(o){const s=o.trim();return Qu(s)?parseFloat(s):s}return Ba(r)?jf(r,e,n+1):r}function Wl(t){const e=[{},{}];return t?.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Wa(t,e,n,i){if(typeof e=="function"){const[r,o]=Wl(i);e=e(n!==void 0?n:t.custom,r,o)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,o]=Wl(i);e=e(n!==void 0?n:t.custom,r,o)}return e}function ti(t,e,n){const i=t.getProps();return Wa(i,e,n!==void 0?n:i.custom,t)}const Ff=new Set(["width","height","top","left","right","bottom",...Hi]),Qs=t=>Array.isArray(t);function Yg(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,si(n))}function Gg(t){return Qs(t)?t[t.length-1]||0:t}function Wg(t,e){const n=ti(t,e);let{transitionEnd:i={},transition:r={},...o}=n||{};o={...o,...i};for(const s in o){const a=Gg(o[s]);Yg(t,s,a)}}const Ie=t=>!!(t&&t.getVelocity);function $g(t){return!!(Ie(t)&&t.add)}function Js(t,e){const n=t.getValue("willChange");if($g(n))return n.add(e);if(!n&&Bn.WillChange){const i=new Bn.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function $a(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const Xg="framerAppearId",kf="data-"+$a(Xg);function Vf(t){return t.props[kf]}const qg=typeof window<"u";function Zg({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function Uf(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:o,transitionEnd:s,...a}=e;const c=t.getDefaultTransition();o=o?If(o,c):c;const u=o?.reduceMotion,f=o?.skipAnimations;i&&(o=i);const d=[],h=r&&t.animationState&&t.animationState.getState()[r],p=o?.path;p&&p.animateVisualElement(t,a,o,n,d);for(const g in a){const C=t.getValue(g,t.latestValues[g]??null),_=a[g];if(_===void 0||h&&Zg(h,g))continue;const y={delay:n,...Ya(o||{},g)};f&&(y.skipAnimations=!0);const m=C.get();if(m!==void 0&&!C.isAnimating()&&!Array.isArray(_)&&_===m&&!y.velocity){ce.update(()=>C.set(_));continue}let v=!1;if(qg&&window.MotionHandoffAnimation){const w=Vf(t);if(w){const T=window.MotionHandoffAnimation(w,g,ce);T!==null&&(y.startTime=T,v=!0)}}Js(t,g);const x=u??t.shouldReduceMotion;C.start(Ga(g,C,_,x&&Ff.has(g)?{type:!1}:y,t,v));const b=C.animation;b&&d.push(b)}if(s){const g=()=>ce.update(()=>{s&&Wg(t,s)});d.length?Promise.all(d).then(g):g()}return d}function ea(t,e,n={}){const i=ti(t,e,n.type==="exit"?t.presenceContext?.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const o=i?()=>Promise.all(Uf(t,i,n)):()=>Promise.resolve(),s=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=r;return Kg(t,e,c,u,f,d,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[o,s]:[s,o];return c().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function Kg(t,e,n=0,i=0,r=0,o=1,s){const a=[];for(const c of t.variantChildren)c.notify("AnimationStart",e),a.push(ea(c,e,{...s,delay:n+(typeof i=="function"?0:i)+Bf(t.variantChildren,c,i,r,o)}).then(()=>c.notify("AnimationComplete",e)));return Promise.all(a)}function Qg(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(o=>ea(t,o,n));i=Promise.all(r)}else if(typeof e=="string")i=ea(t,e,n);else{const r=typeof e=="function"?ti(t,e,n.custom):e;i=Promise.all(Uf(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const Jg={test:t=>t==="auto",parse:t=>t},Hf=t=>e=>e.test(t),Yf=[Ui,M,rn,pn,T0,w0,Jg],$l=t=>Yf.find(Hf(t));function ev(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ef(t):!0}const tv=new Set(["brightness","contrast","saturate","opacity"]);function nv(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Ia)||[];if(!i)return t;const r=n.replace(i,"");let o=tv.has(e)?1:0;return i!==n&&(o*=100),e+"("+o+r+")"}const iv=/\b([a-z-]*)\(.*?\)/gu,ta={...Gt,getAnimatableNone:t=>{const e=t.match(iv);return e?e.map(nv).join(" "):t}},na={...Gt,getAnimatableNone:t=>{const e=Gt.parse(t);return Gt.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},Xl={...Ui,transform:Math.round},rv={rotate:pn,pathRotation:pn,rotateX:pn,rotateY:pn,rotateZ:pn,scale:Xr,scaleX:Xr,scaleY:Xr,scaleZ:Xr,skew:pn,skewX:pn,skewY:pn,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:Er,originX:Ol,originY:Ol,originZ:M},Lo={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,inset:M,insetBlock:M,insetBlockStart:M,insetBlockEnd:M,insetInline:M,insetInlineStart:M,insetInlineEnd:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,paddingBlock:M,paddingBlockStart:M,paddingBlockEnd:M,paddingInline:M,paddingInlineStart:M,paddingInlineEnd:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,marginBlock:M,marginBlockStart:M,marginBlockEnd:M,marginInline:M,marginInlineStart:M,marginInlineEnd:M,fontSize:M,backgroundPositionX:M,backgroundPositionY:M,...rv,zIndex:Xl,fillOpacity:Er,strokeOpacity:Er,numOctaves:Xl},ov={...Lo,color:Le,backgroundColor:Le,outlineColor:Le,fill:Le,stroke:Le,borderColor:Le,borderTopColor:Le,borderRightColor:Le,borderBottomColor:Le,borderLeftColor:Le,filter:ta,WebkitFilter:ta,mask:na,WebkitMask:na},Gf=t=>ov[t],sv=new Set([ta,na]);function Wf(t,e){let n=Gf(t);return sv.has(n)||(n=Gt),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const av=new Set(["auto","none","0"]);function lv(t,e,n){let i=0,r;for(;i<t.length&&!r;){const o=t[i];typeof o=="string"&&!av.has(o)&&Ii(o).values.length&&(r=t[i]),i++}if(r&&n)for(const o of e)t[o]=Wf(n,r)}class cv extends Ha{constructor(e,n,i,r,o){super(e,n,i,r,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let d=e[f];if(typeof d=="string"&&(d=d.trim(),Ba(d))){const h=jf(d,n.current);h!==void 0&&(e[f]=h),f===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!Ff.has(i)||e.length!==2)return;const[r,o]=e,s=$l(r),a=$l(o),c=Nl(r),u=Nl(o);if(c!==u&&Ln[i]){this.needsMeasurement=!0;return}if(s!==a)if(Ul(s)&&Ul(a))for(let f=0;f<e.length;f++){const d=e[f];typeof d=="string"&&(e[f]=parseFloat(d))}else Ln[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||ev(e[r]))&&i.push(r);i.length&&lv(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ln[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const o=i.length-1,s=i[o];i[o]=Ln[n](e.measureViewportBox(),window.getComputedStyle(e.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),this.removedTransforms?.length&&this.removedTransforms.forEach(([a,c])=>{e.getValue(a).set(c)}),this.resolveNoneKeyframes()}}const Xa=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function $f(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=n?.[t]??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const ia=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function uv(t){return Ju(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:qa}=mf(queueMicrotask,!1),Yt={x:!1,y:!1};function Xf(){return Yt.x||Yt.y}function fv(t){return t==="x"||t==="y"?Yt[t]?null:(Yt[t]=!0,()=>{Yt[t]=!1}):Yt.x||Yt.y?null:(Yt.x=Yt.y=!0,()=>{Yt.x=Yt.y=!1})}function qf(t,e){const n=$f(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function dv(t){return!(t.pointerType==="touch"||Xf())}function hv(t,e,n={}){const[i,r,o]=qf(t,n);return i.forEach(s=>{let a=!1,c=!1,u;const f=()=>{s.removeEventListener("pointerleave",g)},d=_=>{u&&(u(_),u=void 0),f()},h=_=>{a=!1,window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),c&&(c=!1,d(_))},p=()=>{a=!0,window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",h,r)},g=_=>{if(_.pointerType!=="touch"){if(a){c=!0;return}d(_)}},C=_=>{if(!dv(_))return;c=!1;const y=e(s,_);typeof y=="function"&&(u=y,s.addEventListener("pointerleave",g,r))};s.addEventListener("pointerenter",C,r),s.addEventListener("pointerdown",p,r)}),o}const Zf=(t,e)=>e?t===e?!0:Zf(t,e.parentElement):!1,Za=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,mv=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function pv(t){return mv.has(t.tagName)||t.isContentEditable===!0}const gv=new Set(["INPUT","SELECT","TEXTAREA"]);function vv(t){return gv.has(t.tagName)||t.isContentEditable===!0}const mo=new WeakSet;function ql(t){return e=>{e.key==="Enter"&&t(e)}}function vs(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const xv=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=ql(()=>{if(mo.has(n))return;vs(n,"down");const r=ql(()=>{vs(n,"up")}),o=()=>vs(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",o,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Zl(t){return Za(t)&&!Xf()}const Kl=new WeakSet;function yv(t,e,n={}){const[i,r,o]=qf(t,n),s=a=>{const c=a.currentTarget;if(!Zl(a)||Kl.has(a))return;mo.add(c),n.stopPropagation&&Kl.add(a);const u=e(c,a),f={...r,capture:!0},d=(g,C)=>{window.removeEventListener("pointerup",h,f),window.removeEventListener("pointercancel",p,f),mo.has(c)&&mo.delete(c),Zl(g)&&typeof u=="function"&&u(g,{success:C})},h=g=>{d(g,c===window||c===document||n.useGlobalTarget||Zf(c,g.target))},p=g=>{d(g,!1)};window.addEventListener("pointerup",h,f),window.addEventListener("pointercancel",p,f)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,r),uv(a)&&(a.addEventListener("focus",u=>xv(u,r)),!pv(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function Ka(t){return Ju(t)&&"ownerSVGElement"in t}const po=new WeakMap;let go;const Kf=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Ka(i)&&"getBBox"in i?i.getBBox()[e]:i[n],_v=Kf("inline","width","offsetWidth"),Cv=Kf("block","height","offsetHeight");function bv({target:t,borderBoxSize:e}){po.get(t)?.forEach(n=>{n(t,{get width(){return _v(t,e)},get height(){return Cv(t,e)}})})}function wv(t){t.forEach(bv)}function Tv(){typeof ResizeObserver>"u"||(go=new ResizeObserver(wv))}function Ev(t,e){go||Tv();const n=$f(t);return n.forEach(i=>{let r=po.get(i);r||(r=new Set,po.set(i,r)),r.add(e),go?.observe(i)}),()=>{n.forEach(i=>{const r=po.get(i);r?.delete(e),r?.size||go?.unobserve(i)})}}const vo=new Set;let Ai;function Sv(){Ai=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};vo.forEach(e=>e(t))},window.addEventListener("resize",Ai)}function Av(t){return vo.add(t),Ai||Sv(),()=>{vo.delete(t),!vo.size&&typeof Ai=="function"&&(window.removeEventListener("resize",Ai),Ai=void 0)}}function Ql(t,e){return typeof t=="function"?Av(t):Ev(t,e)}function Pv(t){return Ka(t)&&t.tagName==="svg"}function Dv(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],o=t[2+n],s=t[3+n],a=Tf(r,o,s);return e?a(i):a}function Rv(t,e,n={}){const i=t.get();let r=null,o=i,s;const a=typeof i=="string"?i.replace(/[\d.-]/g,""):void 0,c=()=>{r&&(r.stop(),r=null),t.animation=void 0},u=()=>{const d=Jl(t.get()),h=Jl(o);if(d===h){c();return}const p=r?r.getGeneratorVelocity():t.getVelocity();c(),r=new Sr({keyframes:[d,h],velocity:p,type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:s})},f=()=>{u(),t.animation=r??void 0,t.events.animationStart?.notify(),r?.then(()=>{t.animation=void 0,t.events.animationComplete?.notify()})};if(t.attach((d,h)=>{o=d,s=p=>h(xs(p,a)),ce.postRender(f)},c),Ie(e)){let d=n.skipInitialAnimation===!0;const h=e.on("change",g=>{d?(d=!1,t.jump(xs(g,a),!1)):t.set(xs(g,a))}),p=t.on("destroy",h);return()=>{h(),p()}}return c}function xs(t,e){return e?t+e:t}function Jl(t){return typeof t=="number"?t:parseFloat(t)}const zv=[...Yf,Le,Gt],Lv=t=>zv.find(Hf(t)),ec=()=>({translate:0,scale:1,origin:0,originPoint:0}),Pi=()=>({x:ec(),y:ec()}),tc=()=>({min:0,max:0}),Me=()=>({x:tc(),y:tc()}),Nv=new WeakMap;function Wo(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Ar(t){return typeof t=="string"||Array.isArray(t)}const Qa=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ja=["initial",...Qa];function $o(t){return Wo(t.animate)||Ja.some(e=>Ar(t[e]))}function Qf(t){return!!($o(t)||t.variants)}function Ov(t,e,n){for(const i in e){const r=e[i],o=n[i];if(Ie(r))t.addValue(i,r);else if(Ie(o))t.addValue(i,si(r,{owner:t}));else if(o!==r)if(t.hasValue(i)){const s=t.getValue(i);s.liveStyle===!0?s.jump(r):s.hasAnimated||s.set(r)}else{const s=t.getStaticValue(i);t.addValue(i,si(s!==void 0?s:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const ra={current:null},Jf={current:!1},Mv=typeof window<"u";function Bv(){if(Jf.current=!0,!!Mv)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>ra.current=t.matches;t.addEventListener("change",e),e()}else ra.current=!1}const nc=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let No={};function ed(t){No=t}function Iv(){return No}class jv{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:o,blockInitialAnimation:s,visualState:a},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ha,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=ft.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ce.render(this.render,!1,!0))};const{latestValues:u,renderState:f}=a;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=f,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=o,this.options=c,this.blockInitialAnimation=!!s,this.isControllingVariants=$o(n),this.isVariantNode=Qf(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const g=h[p];u[p]!==void 0&&Ie(g)&&g.set(u[p])}}mount(e){if(this.hasBeenMounted)for(const n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=e,Nv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Jf.current||Bv(),this.shouldReduceMotion=ra.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),_n(this.notifyUpdate),_n(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&Mf.has(e)&&this.current instanceof HTMLElement){const{factory:s,keyframes:a,times:c,ease:u,duration:f}=n.accelerate,d=new Nf({element:this.current,name:e,keyframes:a,times:c,ease:u,duration:Nt(f)}),h=s(d);this.valueSubscriptions.set(e,()=>{h(),d.cancel()});return}const i=Yi.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",s=>{this.latestValues[e]=s,this.props.onUpdate&&ce.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),o&&o()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in No){const n=No[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const o=this.features[e];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Me()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<nc.length;i++){const r=nc[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o="on"+r,s=e[o];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=Ov(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=si(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Qu(i)||ef(i))?i=parseFloat(i):!Lv(i)&&Gt.test(n)&&(i=Wf(e,n)),this.setBaseTarget(e,Ie(i)?i.get():i)),Ie(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=Wa(this.props,n,this.presenceContext?.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Ie(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Na),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){qa.render(this.render)}}class td extends jv{constructor(){super(...arguments),this.KeyframeResolver=cv}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ie(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class jn{constructor(e){this.isMounted=!1,this.node=e}update(){}}function nd({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Fv({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function kv(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function ys(t){return t===void 0||t===1}function oa({scale:t,scaleX:e,scaleY:n}){return!ys(t)||!ys(e)||!ys(n)}function Xn(t){return oa(t)||id(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function id(t){return ic(t.x)||ic(t.y)}function ic(t){return t&&t!=="0%"}function Oo(t,e,n){const i=t-n,r=e*i;return n+r}function rc(t,e,n,i,r){return r!==void 0&&(t=Oo(t,r,i)),Oo(t,n,i)+e}function sa(t,e=0,n=1,i,r){t.min=rc(t.min,e,n,i,r),t.max=rc(t.max,e,n,i,r)}function rd(t,{x:e,y:n}){sa(t.x,e.translate,e.scale,e.originPoint),sa(t.y,n.translate,n.scale,n.originPoint)}const oc=.999999999999,sc=1.0000000000001;function Vv(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let o,s;for(let a=0;a<r;a++){o=n[a],s=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&o.options.layoutScroll&&o.scroll&&o!==o.root&&(tn(t.x,-o.scroll.offset.x),tn(t.y,-o.scroll.offset.y)),s&&(e.x*=s.x.scale,e.y*=s.y.scale,rd(t,s)),i&&Xn(o.latestValues)&&xo(t,o.latestValues,o.layout?.layoutBox))}e.x<sc&&e.x>oc&&(e.x=1),e.y<sc&&e.y>oc&&(e.y=1)}function tn(t,e){t.min+=e,t.max+=e}function ac(t,e,n,i,r=.5){const o=he(t.min,t.max,r);sa(t,e,n,o,i)}function lc(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function xo(t,e,n){const i=n??t;ac(t.x,lc(e.x,i.x),e.scaleX,e.scale,e.originX),ac(t.y,lc(e.y,i.y),e.scaleY,e.scale,e.originY)}function od(t,e){return nd(kv(t.getBoundingClientRect(),e))}function Uv(t,e,n){const i=od(t,n),{scroll:r}=e;return r&&(tn(i.x,r.offset.x),tn(i.y,r.offset.y)),i}const Hv={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Yv=Hi.length;function Gv(t,e,n){let i="",r=!0;for(let s=0;s<Yv;s++){const a=Hi[s],c=t[a];if(c===void 0)continue;let u=!0;if(typeof c=="number")u=c===(a.startsWith("scale")?1:0);else{const f=parseFloat(c);u=a.startsWith("scale")?f===1:f===0}if(!u||n){const f=ia(c,Lo[a]);if(!u){r=!1;const d=Hv[a]||a;i+=`${d}(${f}) `}n&&(e[a]=f)}}const o=t.pathRotation;return o&&(r=!1,i+=`rotate(${ia(o,Lo.pathRotation)}) `),i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function el(t,e,n){const{style:i,vars:r,transformOrigin:o}=t;let s=!1,a=!1;for(const c in e){const u=e[c];if(Yi.has(c)){s=!0;continue}else if(gf(c)){r[c]=u;continue}else{const f=ia(u,Lo[c]);c.startsWith("origin")?(a=!0,o[c]=f):i[c]=f}}if(e.transform||(s||n?i.transform=Gv(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:c="50%",originY:u="50%",originZ:f=0}=o;i.transformOrigin=`${c} ${u} ${f}`}}function sd(t,{style:e,vars:n},i,r){const o=t.style;let s;for(s in e)o[s]=e[s];r?.applyProjectionStyles(o,i);for(s in n)o.setProperty(s,n[s])}function cc(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const er={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(M.test(t))t=parseFloat(t);else return t;const n=cc(t,e.target.x),i=cc(t,e.target.y);return`${n}% ${i}%`}},Wv={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Gt.parse(t);if(r.length>5)return i;const o=Gt.createTransformer(t),s=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,c=n.y.scale*e.y;r[0+s]/=a,r[1+s]/=c;const u=he(a,c,.5);return typeof r[2+s]=="number"&&(r[2+s]/=u),typeof r[3+s]=="number"&&(r[3+s]/=u),o(r)}},aa={borderRadius:{...er,applyTo:[...Xa]},borderTopLeftRadius:er,borderTopRightRadius:er,borderBottomLeftRadius:er,borderBottomRightRadius:er,boxShadow:Wv};function ad(t,{layout:e,layoutId:n}){return Yi.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!aa[t]||t==="opacity")}function tl(t,e,n){const i=t.style,r=e?.style,o={};if(!i)return o;for(const s in i)(Ie(i[s])||r&&Ie(r[s])||ad(s,t)||n?.getValue(s)?.liveStyle!==void 0)&&(o[s]=i[s]);return o}function $v(t){return window.getComputedStyle(t)}class Xv extends td{constructor(){super(...arguments),this.type="html",this.renderInstance=sd}mount(e){Yo(!!e.style),super.mount(e)}readValueFromInstance(e,n){if(Yi.has(n))return this.projection?.isProjecting?Ws(n):ug(e,n);{const i=$v(e),r=(gf(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return od(e,n)}build(e,n,i){el(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return tl(e,n,i)}}const qv={offset:"stroke-dashoffset",array:"stroke-dasharray"},Zv={offset:"strokeDashoffset",array:"strokeDasharray"};function Kv(t,e,n=1,i=0,r=!0){t.pathLength=1;const o=r?qv:Zv;t[o.offset]=`${-i}`,t[o.array]=`${e} ${n}`}const ld=["transform","opacity","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function cd(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:o=1,pathOffset:s=0,...a},c,u,f){if(el(t,a,u),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:h}=t;for(const p of ld)d[p]!==void 0&&(h[p]=d[p],delete d[p]);(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=f?.transformBox??"fill-box",delete d.transformBox),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&Kv(d,r,o,s,!1)}const ud=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),fd=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Qv(t,e,n,i){sd(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(ud.has(r)?r:$a(r),e.attrs[r])}function dd(t,e,n){const i=tl(t,e,n);for(const r in t)if(Ie(t[r])||Ie(e[r])){const o=Hi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[o]=t[r]}return i}class Jv extends td{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Me}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Yi.has(n)){const i=Gf(n);return i&&i.default||0}if(ld.includes(n)){const r=getComputedStyle(e)[n];if(typeof r=="string"&&r)return r.trim()}return n=ud.has(n)?n:$a(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return dd(e,n,i)}build(e,n,i){cd(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){Qv(e,n,i,r)}mount(e){this.isSVGTag=fd(e.tagName),super.mount(e)}}const ex=Ja.length;function hd(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?hd(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<ex;n++){const i=Ja[n],r=t.props[i];(Ar(r)||r===!1)&&(e[i]=r)}return e}function md(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const tx=[...Qa].reverse(),nx=Qa.length;function ix(t){return e=>Promise.all(e.map(({animation:n,options:i})=>Qg(t,n,i)))}function rx(t){let e=ix(t),n=uc(),i=!0,r=!1;const o=u=>(f,d)=>{const h=ti(t,d,u==="exit"?t.presenceContext?.custom:void 0);if(h){const{transition:p,transitionEnd:g,...C}=h;f={...f,...C,...g}}return f};function s(u){e=u(t)}function a(u){const{props:f}=t,d=hd(t.parent)||{},h=[],p=new Set;let g={},C=1/0;for(let y=0;y<nx;y++){const m=tx[y],v=n[m],x=f[m]!==void 0?f[m]:d[m],b=Ar(x),w=m===u?v.isActive:null;w===!1&&(C=y);let T=x===d[m]&&x!==f[m]&&b;if(T&&(i||r)&&t.manuallyAnimateOnMount&&(T=!1),v.protectedKeys={...g},!v.isActive&&w===null||!x&&!v.prevProp||Wo(x)||typeof x=="boolean")continue;if(m==="exit"&&v.isActive&&w!==!0){v.prevResolvedValues&&(g={...g,...v.prevResolvedValues});continue}const A=ox(v.prevProp,x);let L=A||m===u&&v.isActive&&!T&&b||y>C&&b,z=!1;const k=Array.isArray(x)?x:[x];let R=k.reduce(o(m),{});w===!1&&(R={});const{prevResolvedValues:ie={}}=v,G={...ie,...R},V=W=>{L=!0,p.has(W)&&(z=!0,p.delete(W)),v.needsAnimating[W]=!0;const ee=t.getValue(W);ee&&(ee.liveStyle=!1)};for(const W in G){const ee=R[W],S=ie[W];if(g.hasOwnProperty(W))continue;let me=!1;Qs(ee)&&Qs(S)?me=!md(ee,S)||A:me=ee!==S,me?ee!=null?V(W):p.add(W):ee!==void 0&&p.has(W)?V(W):v.protectedKeys[W]=!0}v.prevProp=x,v.prevResolvedValues=R,v.isActive&&(g={...g,...R}),(i||r)&&t.blockInitialAnimation&&(L=!1);const ge=T&&A;L&&(!ge||z)&&h.push(...k.map(W=>{const ee={type:m};if(typeof W=="string"&&(i||r)&&!ge&&t.manuallyAnimateOnMount&&t.parent){const{parent:S}=t,me=ti(S,W);if(S.enteringChildren&&me){const{delayChildren:an}=me.transition||{};ee.delay=Bf(S.enteringChildren,t,an)}}return{animation:W,options:ee}}))}if(p.size){const y={};if(typeof f.initial!="boolean"){const m=ti(t,Array.isArray(f.initial)?f.initial[0]:f.initial);m&&m.transition&&(y.transition=m.transition)}p.forEach(m=>{const v=t.getBaseTarget(m),x=t.getValue(m);x&&(x.liveStyle=!0),y[m]=v??null}),h.push({animation:y})}let _=!!h.length;return i&&(f.initial===!1||f.initial===f.animate)&&!t.manuallyAnimateOnMount&&(_=!1),i=!1,r=!1,_?e(h):Promise.resolve()}function c(u,f){if(n[u].isActive===f)return Promise.resolve();t.variantChildren?.forEach(h=>h.animationState?.setActive(u,f)),n[u].isActive=f;const d=a(u);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:a,setActive:c,setAnimateFunction:s,getState:()=>n,reset:()=>{n=uc(),r=!0}}}function ox(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!md(e,t):!1}function Wn(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function uc(){return{animate:Wn(!0),whileInView:Wn(),whileHover:Wn(),whileTap:Wn(),whileDrag:Wn(),whileFocus:Wn(),exit:Wn()}}function la(t,e){t.min=e.min,t.max=e.max}function Vt(t,e){la(t.x,e.x),la(t.y,e.y)}function fc(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const pd=1e-4,sx=1-pd,ax=1+pd,gd=.01,lx=0-gd,cx=0+gd;function dt(t){return t.max-t.min}function ux(t,e,n){return Math.abs(t-e)<=n}function dc(t,e,n,i=.5){t.origin=i,t.originPoint=he(e.min,e.max,t.origin),t.scale=dt(n)/dt(e),t.translate=he(n.min,n.max,t.origin)-t.originPoint,(t.scale>=sx&&t.scale<=ax||isNaN(t.scale))&&(t.scale=1),(t.translate>=lx&&t.translate<=cx||isNaN(t.translate))&&(t.translate=0)}function hr(t,e,n,i){dc(t.x,e.x,n.x,i?i.originX:void 0),dc(t.y,e.y,n.y,i?i.originY:void 0)}function hc(t,e,n,i=0){const r=i?he(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+dt(e)}function fx(t,e,n,i){hc(t.x,e.x,n.x,i?.x),hc(t.y,e.y,n.y,i?.y)}function mc(t,e,n,i=0){const r=i?he(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+dt(e)}function Mo(t,e,n,i){mc(t.x,e.x,n.x,i?.x),mc(t.y,e.y,n.y,i?.y)}function pc(t,e,n,i,r){return t-=e,t=Oo(t,1/n,i),r!==void 0&&(t=Oo(t,1/r,i)),t}function dx(t,e=0,n=1,i=.5,r,o=t,s=t){if(rn.test(e)&&(e=parseFloat(e),e=he(s.min,s.max,e/100)-s.min),typeof e!="number")return;let a=he(o.min,o.max,i);t===o&&(a-=e),t.min=pc(t.min,e,n,a,r),t.max=pc(t.max,e,n,a,r)}function gc(t,e,[n,i,r],o,s){dx(t,e[n],e[i],e[r],e.scale,o,s)}const hx=["x","scaleX","originX"],mx=["y","scaleY","originY"];function vc(t,e,n,i){gc(t.x,e,hx,n?n.x:void 0,i?i.x:void 0),gc(t.y,e,mx,n?n.y:void 0,i?i.y:void 0)}function xc(t){return t.translate===0&&t.scale===1}function vd(t){return xc(t.x)&&xc(t.y)}function yc(t,e){return t.min===e.min&&t.max===e.max}function px(t,e){return yc(t.x,e.x)&&yc(t.y,e.y)}function _c(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function xd(t,e){return _c(t.x,e.x)&&_c(t.y,e.y)}function Cc(t){return dt(t.x)/dt(t.y)}function bc(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Jt(t){return[t("x"),t("y")]}function gx(t,e,n){let i="";const r=t.x.translate/e.x,o=t.y.translate/e.y,s=n?.z||0;if((r||o||s)&&(i=`translate3d(${r}px, ${o}px, ${s}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:f,pathRotation:d,rotateX:h,rotateY:p,skewX:g,skewY:C}=n;u&&(i=`perspective(${u}px) ${i}`),f&&(i+=`rotate(${f}deg) `),d&&(i+=`rotate(${d}deg) `),h&&(i+=`rotateX(${h}deg) `),p&&(i+=`rotateY(${p}deg) `),g&&(i+=`skewX(${g}deg) `),C&&(i+=`skewY(${C}deg) `)}const a=t.x.scale*e.x,c=t.y.scale*e.y;return(a!==1||c!==1)&&(i+=`scale(${a}, ${c})`),i||"none"}const vx=Xa.length,wc=t=>typeof t=="string"?parseFloat(t):t,Tc=t=>typeof t=="number"||M.test(t);function xx(t,e,n,i,r,o){r?(t.opacity=he(0,n.opacity??1,yx(i)),t.opacityExit=he(e.opacity??1,0,_x(i))):o&&(t.opacity=he(e.opacity??1,n.opacity??1,i));for(let s=0;s<vx;s++){const a=Xa[s];let c=Ec(e,a),u=Ec(n,a);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Tc(c)===Tc(u)?(t[a]=Math.max(he(wc(c),wc(u),i),0),(rn.test(u)||rn.test(c))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=he(e.rotate||0,n.rotate||0,i))}function Ec(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const yx=yd(0,.5,uf),_x=yd(.5,.95,Lt);function yd(t,e,n){return i=>i<t?0:i>e?1:n(Tr(t,e,i))}function Cx(t,e,n){const i=Ie(t)?t:si(t);return i.start(Ga("",i,e,n)),i.animation}function Pr(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}const bx=(t,e)=>t.depth-e.depth;class wx{constructor(){this.children=[],this.isDirty=!1}add(e){La(this.children,e),this.isDirty=!0}remove(e){Do(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(bx),this.isDirty=!1,this.children.forEach(e)}}function Tx(t,e){const n=ft.now(),i=({timestamp:r})=>{const o=r-n;o>=e&&(_n(i),t(o-e))};return ce.setup(i,!0),()=>_n(i)}function yo(t){return Ie(t)?t.get():t}class Ex{constructor(){this.members=[]}add(e){La(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(Do(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(Do(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){for(let n=this.members.indexOf(e)-1;n>=0;n--){const i=this.members[n];if(i.isPresent!==!1&&i.instance?.isConnected!==!1)return this.promote(i),!0}return!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:r}=i.options,{layoutDependency:o}=e.options;(r===void 0||r!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const _o={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_s=["","X","Y","Z"],Sx=1e3;let Ax=0;function Cs(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function _d(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Vf(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:o}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ce,!(r||o))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&_d(i)}function Cd({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(s={},a=e?.()){this.id=Ax++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Rx),this.nodes.forEach(Bx),this.nodes.forEach(Ix),this.nodes.forEach(zx)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new wx)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Na),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const c=this.eventHandlers.get(s);c&&c.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=Ka(s)&&!Pv(s),this.instance=s;const{layoutId:a,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||a)&&(this.isLayoutDirty=!0),t){let f,d=0;const h=()=>this.root.updateBlockedByResize=!1;ce.read(()=>{d=window.innerWidth}),t(s,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,f&&f(),f=Tx(h,250),_o.hasAnimatedSinceResize&&(_o.hasAnimatedSinceResize=!1,this.nodes.forEach(Pc)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeLayoutChanged:h,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||u.getDefaultTransition()||Ux,{onLayoutAnimationStart:C,onLayoutAnimationComplete:_}=u.getProps(),y=!this.targetLayout||!xd(this.targetLayout,p),m=!d&&h;if(this.options.layoutRoot||this.resumeFrom||m||d&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...Ya(g,"layout"),onPlay:C,onComplete:_};(u.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(f,m,v.path)}else d||Pc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),_n(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(jx),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&_d(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const d=this.path[f];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:c}=this.options;if(a===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const c=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),c&&this.nodes.forEach(Nx),this.nodes.forEach(Sc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ac);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Ox),this.nodes.forEach(Mx),this.nodes.forEach(Px),this.nodes.forEach(Dx)):this.nodes.forEach(Ac),this.clearAllSnapshots();const a=ft.now();Ye.delta=sn(0,1e3/60,a-Ye.timestamp),Ye.timestamp=a,Ye.isProcessing=!0,fs.update.process(Ye),fs.preRender.process(Ye),fs.render.process(Ye),Ye.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qa.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Lx),this.sharedNodes.forEach(Fx)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ce.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ce.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!dt(this.snapshot.measuredBox.x)&&!dt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Me()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const c=i(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!r)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!vd(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,f=u!==this.prevTransformTemplateValue;s&&this.instance&&(a||Xn(this.latestValues)||f)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let c=this.removeElementScroll(a);return s&&(c=this.removeTransform(c)),Hx(c),{animationId:this.root.animationId,measuredBox:a,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return Me();const a=s.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Yx))){const{scroll:u}=this.root;u&&(tn(a.x,u.offset.x),tn(a.y,u.offset.y))}return a}removeElementScroll(s){const a=Me();if(Vt(a,s),this.scroll?.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:d}=u;u!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&Vt(a,s),tn(a.x,f.offset.x),tn(a.y,f.offset.y))}return a}applyTransform(s,a=!1,c){const u=c||Me();Vt(u,s);for(let f=0;f<this.path.length;f++){const d=this.path[f];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&(tn(u.x,-d.scroll.offset.x),tn(u.y,-d.scroll.offset.y)),Xn(d.latestValues)&&xo(u,d.latestValues,d.layout?.layoutBox)}return Xn(this.latestValues)&&xo(u,this.latestValues,this.layout?.layoutBox),u}removeTransform(s){const a=Me();Vt(a,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!Xn(u.latestValues))continue;let f;u.instance&&(oa(u.latestValues)&&u.updateSnapshot(),f=Me(),Vt(f,u.measurePageBox())),vc(a,u.latestValues,u.snapshot?.layoutBox,f)}return Xn(this.latestValues)&&vc(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ye.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==a;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!this.layout||!(f||d))return;this.resolvedRelativeTargetAt=Ye.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Me(),this.targetWithTransforms=Me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),fx(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Vt(this.target,this.layout.layoutBox),rd(this.target,this.targetDelta)):Vt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||oa(this.parent.latestValues)||id(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,a,c){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),Mo(this.relativeTargetOrigin,a,c,this.options.layoutAnchor||void 0),Vt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const s=this.getLead(),a=!!this.resumingFrom||this!==s;let c=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(c=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ye.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;Vt(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;Vv(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Me());const{target:p}=s;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(fc(this.prevProjectionDelta.x,this.projectionDelta.x),fc(this.prevProjectionDelta.y,this.projectionDelta.y)),hr(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==h||!bc(this.projectionDelta.x,this.prevProjectionDelta.x)||!bc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.visualElement?.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Pi(),this.projectionDelta=Pi(),this.projectionDeltaWithTransform=Pi()}setAnimationOrigin(s,a=!1,c){const u=this.snapshot,f=u?u.latestValues:{},d={...this.latestValues},h=Pi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Me(),g=u?u.source:void 0,C=this.layout?this.layout.source:void 0,_=g!==C,y=this.getStack(),m=!y||y.members.length<=1,v=!!(_&&!m&&this.options.crossfade===!0&&!this.path.some(Vx));this.animationProgress=0;let x;const b=c?.interpolateProjection(s);this.mixTargetDelta=w=>{const T=w/1e3,A=b?.(T);A?(h.x.translate=A.x,h.x.scale=he(s.x.scale,1,T),h.x.origin=s.x.origin,h.x.originPoint=s.x.originPoint,h.y.translate=A.y,h.y.scale=he(s.y.scale,1,T),h.y.origin=s.y.origin,h.y.originPoint=s.y.originPoint):(Dc(h.x,s.x,T),Dc(h.y,s.y,T)),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Mo(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),kx(this.relativeTarget,this.relativeTargetOrigin,p,T),x&&px(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Me()),Vt(x,this.relativeTarget)),_&&(this.animationValues=d,xx(d,f,this.latestValues,T,v,m)),A&&A.rotate!==void 0&&(this.animationValues||(this.animationValues=d),this.animationValues.pathRotation=A.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(_n(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ce.update(()=>{_o.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=si(0)),this.motionValue.jump(0,!1),this.currentAnimation=Cx(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Sx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:c,layout:u,latestValues:f}=s;if(!(!a||!c||!u)){if(this!==s&&this.layout&&u&&bd(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||Me();const d=dt(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+d;const h=dt(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+h}Vt(a,c),xo(a,f),hr(this.projectionDeltaWithTransform,this.layoutCorrected,a,f)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new Ex),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){const{layoutId:s}=this.options;return s?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:s}=this.options;return s?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(a=!0),!a)return;const u={};c.z&&Cs("z",s,u,this.animationValues);for(let f=0;f<_s.length;f++)Cs(`rotate${_s[f]}`,s,u,this.animationValues),Cs(`skew${_s[f]}`,s,u,this.animationValues);s.render();for(const f in u)s.setStaticValue(f,u[f]),this.animationValues&&(this.animationValues[f]=u[f]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=yo(a?.pointerEvents)||"",s.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=yo(a?.pointerEvents)||""),this.hasProjected&&!Xn(this.latestValues)&&(s.transform=c?c({},""):"none",this.hasProjected=!1);return}s.visibility="";const f=u.animationValues||u.latestValues;this.applyTransformsToTarget();let d=gx(this.projectionDeltaWithTransform,this.treeScale,f);c&&(d=c(f,d)),s.transform=d;const{x:h,y:p}=this.projectionDelta;s.transformOrigin=`${h.origin*100}% ${p.origin*100}% 0`,u.animationValues?s.opacity=u===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:s.opacity=u===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const g in aa){if(f[g]===void 0)continue;const{correct:C,applyTo:_,isCSSVariable:y}=aa[g],m=d==="none"?f[g]:C(f[g],u);if(_){const v=_.length;for(let x=0;x<v;x++)s[_[x]]=m}else y?this.options.visualElement.renderState.vars[g]=m:s[g]=m}this.options.layoutId&&(s.pointerEvents=u===this?yo(a?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>s.currentAnimation?.stop()),this.root.nodes.forEach(Sc),this.root.sharedNodes.clear()}}}function Px(t){t.updateLayout()}function Dx(t){const e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:i}=t.layout,{animationType:r}=t.options,o=e.source!==t.layout.source;if(r==="size")Jt(f=>{const d=o?e.measuredBox[f]:e.layoutBox[f],h=dt(d);d.min=n[f].min,d.max=d.min+h});else if(r==="x"||r==="y"){const f=r==="x"?"y":"x";la(o?e.measuredBox[f]:e.layoutBox[f],n[f])}else bd(r,e.layoutBox,n)&&Jt(f=>{const d=o?e.measuredBox[f]:e.layoutBox[f],h=dt(n[f]);d.max=d.min+h,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+h)});const s=Pi();hr(s,n,e.layoutBox);const a=Pi();o?hr(a,t.applyTransform(i,!0),e.measuredBox):hr(a,n,e.layoutBox);const c=!vd(s);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:h}=f;if(d&&h){const p=t.options.layoutAnchor||void 0,g=Me();Mo(g,e.layoutBox,d.layoutBox,p);const C=Me();Mo(C,n,h.layoutBox,p),xd(g,C)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=C,t.relativeTargetOrigin=g,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:e,delta:a,layoutDelta:s,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:n}=t.options;n&&n()}t.options.transition=void 0}function Rx(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function zx(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Lx(t){t.clearSnapshot()}function Sc(t){t.clearMeasurements()}function Nx(t){t.isLayoutDirty=!0,t.updateLayout()}function Ac(t){t.isLayoutDirty=!1}function Ox(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function Mx(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Pc(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Bx(t){t.resolveTargetDelta()}function Ix(t){t.calcProjection()}function jx(t){t.resetSkewAndRotation()}function Fx(t){t.removeLeadSnapshot()}function Dc(t,e,n){t.translate=he(e.translate,0,n),t.scale=he(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Rc(t,e,n,i){t.min=he(e.min,n.min,i),t.max=he(e.max,n.max,i)}function kx(t,e,n,i){Rc(t.x,e.x,n.x,i),Rc(t.y,e.y,n.y,i)}function Vx(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Ux={duration:.45,ease:[.4,0,.1,1]},zc=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Lc=zc("applewebkit/")&&!zc("chrome/")?Math.round:Lt;function Nc(t){t.min=Lc(t.min),t.max=Lc(t.max)}function Hx(t){Nc(t.x),Nc(t.y)}function bd(t,e,n){return t==="position"||t==="preserve-aspect"&&!ux(Cc(e),Cc(n),.2)}function Yx(t){return t!==t.root&&t.scroll?.wasRoot}const Gx=Cd({attachResizeListener:(t,e)=>Pr(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),bs={current:void 0},wd=Cd({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!bs.current){const t=new Gx({});t.mount(window),t.setOptions({layoutScroll:!0}),bs.current=t}return bs.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Xo=E.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Wx(t=!0){const e=E.useContext(za);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,o=E.useId();E.useEffect(()=>{if(t)return r(o)},[t]);const s=E.useCallback(()=>t&&i&&i(o),[o,i,t]);return!n&&i?[!1,s]:[!0]}const Td=E.createContext({strict:!1}),Oc={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Mc=!1;function $x(){if(Mc)return;const t={};for(const e in Oc)t[e]={isEnabled:n=>Oc[e].some(i=>!!n[i])};ed(t),Mc=!0}function Ed(){return $x(),Iv()}function Xx(t){const e=Ed();for(const n in t)e[n]={...e[n],...t[n]};ed(e)}const qo=E.createContext({});function qx(t,e){if($o(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Ar(n)?n:void 0,animate:Ar(i)?i:void 0}}return t.inherit!==!1?e:{}}function Zx(t){const{initial:e,animate:n}=qx(t,E.useContext(qo));return E.useMemo(()=>({initial:e,animate:n}),[Bc(e),Bc(n)])}function Bc(t){return Array.isArray(t)?t.join(" "):t}const nl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Sd(t,e,n){for(const i in e)!Ie(e[i])&&!ad(i,n)&&(t[i]=e[i])}function Kx({transformTemplate:t},e){return E.useMemo(()=>{const n=nl();return el(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Qx(t,e){const n=t.style||{},i={};return Sd(i,n,t),Object.assign(i,Kx(t,e)),i}function Jx(t,e){const n={},i=Qx(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const Ad=()=>({...nl(),attrs:{}});function ey(t,e,n,i){const r=E.useMemo(()=>{const o=Ad();return cd(o,e,fd(i),t.transformTemplate,t.style),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};Sd(o,t.style,t),r.style={...o,...r.style}}return r}const ty=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Bo(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||ty.has(t)}function ny(t,e){return t.startsWith("on")?!Bo(t):e?.(t)??!Bo(t)}function iy(t,e,n,i){const r={};for(const o in t)o==="values"&&typeof t.values=="object"||Ie(t[o])||(ny(o,i)||n===!0&&Bo(o)||!e&&!Bo(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}const ry=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function il(t){return typeof t!="string"||t.includes("-")?!1:!!(ry.indexOf(t)>-1||/[A-Z]/u.test(t))}function oy(t,e,n,{latestValues:i},r,o=!1,s,a){const u=(s??il(t)?ey:Jx)(e,i,r,t),f=iy(e,typeof t=="string",o,a),d=t!==E.Fragment?{...f,...u,ref:n}:{},{children:h}=e,p=E.useMemo(()=>Ie(h)?h.get():h,[h]);return E.createElement(t,{...d,children:p})}function sy({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:ay(n,i,r,t),renderState:e()}}function ay(t,e,n,i){const r={},o=i(t,{});for(const h in o)r[h]=yo(o[h]);let{initial:s,animate:a}=t;const c=$o(t),u=Qf(t);e&&u&&!c&&t.inherit!==!1&&(s===void 0&&(s=e.initial),a===void 0&&(a=e.animate));let f=n?n.initial===!1:!1;f=f||s===!1;const d=f?a:s;if(d&&typeof d!="boolean"&&!Wo(d)){const h=Array.isArray(d)?d:[d];for(let p=0;p<h.length;p++){const g=Wa(t,h[p]);if(g){const{transitionEnd:C,transition:_,...y}=g;for(const m in y){let v=y[m];if(Array.isArray(v)){const x=f?v.length-1:0;v=v[x]}v!==null&&(r[m]=v)}for(const m in C)r[m]=C[m]}}}return r}const Pd=t=>(e,n)=>{const i=E.useContext(qo),r=E.useContext(za),o=()=>sy(t,e,i,r);return n?o():Ra(o)},ly=Pd({scrapeMotionValuesFromProps:tl,createRenderState:nl}),cy=Pd({scrapeMotionValuesFromProps:dd,createRenderState:Ad}),uy=Symbol.for("motionComponentSymbol");function fy(t,e,n){const i=E.useRef(n);E.useInsertionEffect(()=>{i.current=n});const r=E.useRef(null);return E.useCallback(o=>{o&&t.onMount?.(o),e&&(o?e.mount(o):e.unmount());const s=i.current;if(typeof s=="function")if(o){const a=s(o);typeof a=="function"&&(r.current=a)}else r.current?(r.current(),r.current=null):s(o);else s&&(s.current=o)},[e])}const Dd=E.createContext({});function wi(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function dy(t,e,n,i,r,o){const{visualElement:s}=E.useContext(qo),a=E.useContext(Td),c=E.useContext(za),u=E.useContext(Xo),f=u.reducedMotion,d=u.skipAnimations,h=E.useRef(null),p=E.useRef(!1);i=i||a.renderer,!h.current&&i&&(h.current=i(t,{visualState:e,parent:s,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:f,skipAnimations:d,isSVG:o}),p.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));const g=h.current,C=E.useContext(Dd);g&&!g.projection&&r&&(g.type==="html"||g.type==="svg")&&hy(h.current,n,r,C);const _=E.useRef(!1);E.useInsertionEffect(()=>{g&&_.current&&g.update(n,c)});const y=n[kf],m=E.useRef(!!y&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(y)&&window.MotionHasOptimisedAnimation?.(y));return Ku(()=>{p.current=!0,g&&(_.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),m.current&&g.animationState&&g.animationState.animateChanges())}),E.useEffect(()=>{g&&(!m.current&&g.animationState&&g.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(y)}),m.current=!1),g.enteringChildren=void 0)}),g}function hy(t,e,n,i){const{layoutId:r,layout:o,drag:s,dragConstraints:a,layoutScroll:c,layoutRoot:u,layoutAnchor:f,layoutCrossfade:d}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Rd(t.parent)),t.projection.setOptions({layoutId:r,layout:o,alwaysMeasureLayout:!!s||a&&wi(a),visualElement:t,animationType:typeof o=="string"?o:"both",initialPromotionConfig:i,crossfade:d,layoutScroll:c,layoutRoot:u,layoutAnchor:f})}function Rd(t){if(t)return t.options.allowProjection!==!1?t.projection:Rd(t.parent)}function ws(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&Xx(i);const o=n?n==="svg":il(t),s=o?cy:ly;function a(u,f){let d;const h={...E.useContext(Xo),...u,layoutId:my(u)},{isStatic:p,isValidProp:g}=h,C=Zx(u),_=s(u,p);if(!p&&typeof window<"u"){py();const y=gy(h);d=y.MeasureLayout,C.visualElement=dy(t,_,h,r,y.ProjectionNode,o)}return l.jsxs(qo.Provider,{value:C,children:[d&&C.visualElement?l.jsx(d,{visualElement:C.visualElement,...h}):null,oy(t,u,fy(_,C.visualElement,f),_,p,e,o,g)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const c=E.forwardRef(a);return c[uy]=t,c}function my({layoutId:t}){const e=E.useContext(Zu).id;return e&&t!==void 0?e+"-"+t:t}function py(t,e){E.useContext(Td).strict}function gy(t){const e=Ed(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n?.isEnabled(t)||i?.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function vy(t,e){if(typeof Proxy>"u")return ws;const n=new Map,i=(o,s)=>ws(o,s,t,e),r=(o,s)=>i(o,s);return new Proxy(r,{get:(o,s)=>s==="create"?i:(n.has(s)||n.set(s,ws(s,void 0,t,e)),n.get(s))})}const xy=(t,e)=>e.isSVG??il(t)?new Jv(e):new Xv(e,{allowProjection:t!==E.Fragment});class yy extends jn{constructor(e){super(e),e.animationState||(e.animationState=rx(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Wo(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let _y=0;class Cy extends jn{constructor(){super(...arguments),this.id=_y++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:o,custom:s}=this.node.getProps();if(typeof o=="string"||typeof o=="object"&&o!==null&&!Array.isArray(o)){const a=ti(this.node,o,s);if(a){const{transition:c,transitionEnd:u,...f}=a;for(const d in f)this.node.getValue(d)?.jump(f[d])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const by={animation:{Feature:yy},exit:{Feature:Cy}};function Br(t){return{point:{x:t.pageX,y:t.pageY}}}const wy=t=>e=>Za(e)&&t(e,Br(e));function mr(t,e,n,i){return Pr(t,e,wy(n),i)}const zd=({current:t})=>t?t.ownerDocument.defaultView:null,Ic=(t,e)=>Math.abs(t-e);function Ty(t,e){const n=Ic(t.x,e.x),i=Ic(t.y,e.y);return Math.sqrt(n**2+i**2)}const jc=new Set(["auto","scroll"]);class Ld{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=g=>{this.handleScroll(g.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=qr(this.lastRawMoveEventInfo,this.transformPagePoint));const g=Ts(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,_=Ty(g.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!_)return;const{point:y}=g,{timestamp:m}=Ye;this.history.push({...y,timestamp:m});const{onStart:v,onMove:x}=this.handlers;C||(v&&v(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,g)},this.handlePointerMove=(g,C)=>{this.lastMoveEvent=g,this.lastRawMoveEventInfo=C,this.lastMoveEventInfo=qr(C,this.transformPagePoint),ce.update(this.updatePoint,!0)},this.handlePointerUp=(g,C)=>{this.end();const{onEnd:_,onSessionEnd:y,resumeAnimation:m}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Ts(g.type==="pointercancel"?this.lastMoveEventInfo:qr(C,this.transformPagePoint),this.history);this.startEvent&&_&&_(g,v),y&&y(g,v)},!Za(e))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=s,this.contextWindow=r||window;const c=Br(e),u=qr(c,this.transformPagePoint),{point:f}=u,{timestamp:d}=Ye;this.history=[{...f,timestamp:d}];const{onSessionStart:h}=n;h&&h(e,Ts(u,this.history));const p={passive:!0,capture:!0};this.removeListeners=Nr(mr(this.contextWindow,"pointermove",this.handlePointerMove,p),mr(this.contextWindow,"pointerup",this.handlePointerUp,p),mr(this.contextWindow,"pointercancel",this.handlePointerUp,p)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(jc.has(i.overflowX)||jc.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},o={x:r.x-n.x,y:r.y-n.y};o.x===0&&o.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(e,r),ce.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),_n(this.updatePoint)}}function qr(t,e){return e?{point:e(t.point)}:t}function Fc(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Ts({point:t},e){return{point:t,delta:Fc(t,Nd(e)),offset:Fc(t,Ey(e)),velocity:Sy(e,.1)}}function Ey(t){return t[0]}function Nd(t){return t[t.length-1]}function Sy(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=Nd(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Nt(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Nt(e)*2&&(i=t[1]);const o=zt(r.timestamp-i.timestamp);if(o===0)return{x:0,y:0};const s={x:(r.x-i.x)/o,y:(r.y-i.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Ay(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?he(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?he(n,t,i.max):Math.min(t,n)),t}function kc(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function Py(t,{top:e,left:n,bottom:i,right:r}){return{x:kc(t.x,n,r),y:kc(t.y,e,i)}}function Vc(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Dy(t,e){return{x:Vc(t.x,e.x),y:Vc(t.y,e.y)}}function Ry(t,e){let n=.5;const i=dt(t),r=dt(e);return r>i?n=Tr(e.min,e.max-i,t.min):i>r&&(n=Tr(t.min,t.max-r,e.min)),sn(0,1,n)}function zy(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const ca=.35;function Ly(t=ca){return t===!1?t=0:t===!0&&(t=ca),{x:Uc(t,"left","right"),y:Uc(t,"top","bottom")}}function Uc(t,e,n){return{min:Hc(t,e),max:Hc(t,n)}}function Hc(t,e){return typeof t=="number"?t:t[e]||0}const Ny=new WeakMap;class Oy{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Me(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=d=>{n&&this.snapToCursor(Br(d).point),this.stopAnimation()},s=(d,h)=>{const{drag:p,dragPropagation:g,onDragStart:C}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=fv(p),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Jt(y=>{let m=this.getAxisMotionValue(y).get()||0;if(rn.test(m)){const{projection:v}=this.visualElement;if(v&&v.layout){const x=v.layout.layoutBox[y];x&&(m=dt(x)*(parseFloat(m)/100))}}this.originPoint[y]=m}),C&&ce.update(()=>C(d,h),!1,!0),Js(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},a=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h;const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:C,onDrag:_}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:y}=h;if(g&&this.currentDirection===null){this.currentDirection=By(y),this.currentDirection!==null&&C&&C(this.currentDirection);return}this.updateAxis("x",h.point,y),this.updateAxis("y",h.point,y),this.visualElement.render(),_&&ce.update(()=>_(d,h),!1,!0)},c=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h,this.stop(d,h),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new Ld(e,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:i,contextWindow:zd(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!r||!i)return;const{velocity:s}=r;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&ce.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Zr(e,r,this.currentDirection))return;const o=this.getAxisMotionValue(e);let s=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(s=Ay(s,this.constraints[e],this.elastic[e])),o.set(s)}resolveConstraints(){const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&wi(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=Py(i.layoutBox,e):this.constraints=!1,this.elastic=Ly(n),r!==this.constraints&&!wi(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&Jt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=zy(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!wi(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());const o=Uv(i,r.root,this.visualElement.getTransformPagePoint());let s=Dy(r.layout.layoutBox,o);if(n){const a=n(Fv(s));this.hasMutatedConstraints=!!a,a&&(s=nd(a))}return s}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),c=this.constraints||{},u=Jt(f=>{if(!Zr(f,n,this.currentDirection))return;let d=c&&c[f]||{};(s===!0||s===f)&&(d={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[f]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(f,g)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Js(this.visualElement,e),i.start(Ga(e,i,0,n,this.visualElement,!1))}stopAnimation(){Jt(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps()[n];return r||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Jt(n=>{const{drag:i}=this.getProps();if(!Zr(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,o=this.getAxisMotionValue(n);if(r&&r.layout){const{min:s,max:a}=r.layout.layoutBox[n],c=o.get()||0;o.set(e[n]-he(s,a,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!wi(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Jt(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const c=a.get();r[s]=Ry({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),Jt(s=>{if(!Zr(s,e,null))return;const a=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];a.set(he(c,u,r[s]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Ny.set(this.visualElement,this);const e=this.visualElement.current,n=mr(e,"pointerdown",u=>{const{drag:f,dragListener:d=!0}=this.getProps(),h=u.target,p=h!==e&&vv(h);f&&d&&!p&&this.start(u)});let i;const r=()=>{const{dragConstraints:u}=this.getProps();wi(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),i||(i=My(e,u.current,()=>this.scalePositionWithinConstraints())))},{projection:o}=this.visualElement,s=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),ce.read(r);const a=Pr(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:u,hasLayoutChanged:f})=>{this.isDragging&&f&&(Jt(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=u[d].translate,h.set(h.get()+u[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),c&&c(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:o=!1,dragElastic:s=ca,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Yc(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function My(t,e,n){const i=Ql(t,Yc(n)),r=Ql(e,Yc(n));return()=>{i(),r()}}function Zr(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function By(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Iy extends jn{constructor(e){super(e),this.removeGroupControls=Lt,this.removeListeners=Lt,this.controls=new Oy(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Lt}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Es=t=>(e,n)=>{t&&ce.update(()=>t(e,n),!1,!0)};class jy extends jn{constructor(){super(...arguments),this.removePointerDownListener=Lt}onPointerDown(e){this.session=new Ld(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:zd(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Es(e),onStart:Es(n),onMove:Es(i),onEnd:(o,s)=>{delete this.session,r&&ce.postRender(()=>r(o,s))}}}mount(){this.removePointerDownListener=mr(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ss=!1;class Fy extends E.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:o}=e;o&&(n.group&&n.group.add(o),i&&i.register&&r&&i.register(o),Ss&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),_o.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:o}=this.props,{projection:s}=i;return s&&(s.isPresent=o,e.layoutDependency!==n&&s.setOptions({...s.options,layoutDependency:n}),Ss=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==o?s.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?s.promote():s.relegate()||ce.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),qa.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Ss=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Od(t){const[e,n]=Wx(),i=E.useContext(Zu);return l.jsx(Fy,{...t,layoutGroup:i,switchLayoutGroup:E.useContext(Dd),isPresent:e,safeToRemove:n})}const ky={pan:{Feature:jy},drag:{Feature:Iy,ProjectionNode:wd,MeasureLayout:Od}};function Gc(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,o=i[r];o&&ce.postRender(()=>o(e,Br(e)))}class Vy extends jn{mount(){const{current:e}=this.node;e&&(this.unmount=hv(e,(n,i)=>(Gc(this.node,i,"Start"),r=>Gc(this.node,r,"End"))))}unmount(){}}class Uy extends jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Nr(Pr(this.node.current,"focus",()=>this.onFocus()),Pr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Wc(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),o=i[r];o&&ce.postRender(()=>o(e,Br(e)))}class Hy extends jn{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=yv(e,(r,o)=>(Wc(this.node,o,"Start"),(s,{success:a})=>Wc(this.node,s,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:i?.tap===!1})}unmount(){}}const ua=new WeakMap,As=new WeakMap,Yy=t=>{const e=ua.get(t.target);e&&e(t)},Gy=t=>{t.forEach(Yy)};function Wy({root:t,...e}){const n=t||document;As.has(n)||As.set(n,{});const i=As.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(Gy,{root:t,...e})),i[r]}function $y(t,e,n){const i=Wy(e);return ua.set(t,n),i.observe(t),()=>{ua.delete(t),i.unobserve(t)}}const Xy={some:0,all:1};class qy extends jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:o}=e,s={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:Xy[r]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:f,onViewportLeave:d}=this.node.getProps(),h=u?f:d;h&&h(c)};this.stopObserver=$y(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Zy(e,n))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function Zy({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const Ky={inView:{Feature:qy},tap:{Feature:Hy},focus:{Feature:Uy},hover:{Feature:Vy}},Qy={layout:{ProjectionNode:wd,MeasureLayout:Od}},Jy={...by,...Ky,...ky,...Qy},$c=vy(Jy,xy);function Io(t){const e=Ra(()=>si(t)),{isStatic:n}=E.useContext(Xo);if(n){const[,i]=E.useState(t);E.useEffect(()=>e.on("change",i),[])}return e}function Md(t,e){const n=Io(e()),i=()=>n.set(e());return i(),Ku(()=>{const r=()=>ce.preRender(i,!1,!0),o=t.map(s=>s.on("change",r));return()=>{o.forEach(s=>s()),_n(i)}}),n}function e1(t){dr.current=[],t();const e=Md(dr.current,t);return dr.current=void 0,e}function t1(t,e,n,i){if(typeof t=="function")return e1(t);const o=Dv(e,n,i),s=Array.isArray(t)?Xc(t,o):Xc([t],([c])=>o(c)),a=Array.isArray(t)?void 0:t.accelerate;return a&&!a.isTransformed&&typeof e!="function"&&Array.isArray(n)&&i?.clamp!==!1&&(s.accelerate={...a,times:e,keyframes:n,isTransformed:!0}),s}function Xc(t,e){const n=Ra(()=>[]);return Md(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}function n1(t,e={}){const{isStatic:n}=E.useContext(Xo),i=()=>Ie(t)?t.get():t;if(n)return t1(i);const r=Io(i());return E.useInsertionEffect(()=>Rv(r,t,e),[r,JSON.stringify(e)]),r}function qc(t,e={}){return n1(t,{type:"spring",...e})}function fa({children:t,className:e="",onClick:n,strength:i=.35,cursorLabel:r="ENTER",as:o="button",href:s,...a}){const c=E.useRef(null),u=B(m=>m.setCursor),f=B(m=>m.resetCursor),d=Io(0),h=Io(0),p=qc(d,{stiffness:180,damping:18}),g=qc(h,{stiffness:180,damping:18}),C=m=>{if(!c.current)return;const{clientX:v,clientY:x}=m,{left:b,top:w,width:T,height:A}=c.current.getBoundingClientRect(),L=b+T/2,z=w+A/2;d.set((v-L)*i),h.set((x-z)*i)},_=()=>{d.set(0),h.set(0),f()},y=o==="a"?$c.a:$c.button;return l.jsxs(y,{ref:c,style:{x:p,y:g},onMouseMove:C,onMouseEnter:()=>u("enter",r),onMouseLeave:_,onClick:n,href:s,className:`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-[#f2f0ea] backdrop-blur-md transition-all duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#00ffcc] hover:bg-white hover:text-black hover:shadow-[0_0_35px_rgba(0,255,204,0.4)] ${e}`,...a,children:[l.jsx("span",{className:"relative z-10 flex items-center gap-2",children:t}),l.jsx("span",{className:"absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-white to-[#e8e4e0] transition-transform duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"})]})}function Bd({options:t=[],value:e,onChange:n,size:i="md",className:r="",style:o={}}){const s=B(p=>p.setCursor),a=B(p=>p.resetCursor),c=B(p=>p.soundEnabled),u=(p,g)=>{p!==e&&(c&&Rt.playSwitch(.06),n?.(p))},f=i==="sm"?"0.35rem":i==="lg"?"0.65rem":"0.45rem",d=i==="sm"?"0.75rem":i==="lg"?"1.35rem":"1rem",h=i==="sm"?"9px":i==="lg"?"11px":"10px";return l.jsx("div",{className:`origin-toggle-container ${r}`,style:{display:"inline-flex",alignItems:"center",padding:"3px",borderRadius:"9999px",backgroundColor:"rgba(10, 10, 16, 0.75)",border:"1px solid rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.05)",position:"relative",userSelect:"none",...o},children:t.map(p=>{const g=p.value===e;return l.jsxs("button",{type:"button",onClick:()=>u(p.value,p.label),onMouseEnter:()=>{c&&Rt.playHover(.02),s("navigate",p.label)},onMouseLeave:a,style:{position:"relative",padding:`${f} ${d}`,borderRadius:"9999px",fontFamily:"var(--font-mono)",fontSize:h,fontWeight:g?600:400,letterSpacing:"0.12em",textTransform:"uppercase",color:g?"#ffffff":"var(--color-white-dim)",backgroundColor:g?"rgba(0, 255, 204, 0.15)":"transparent",border:g?"1px solid rgba(0, 255, 204, 0.4)":"1px solid transparent",boxShadow:g?"0 0 16px rgba(0, 255, 204, 0.25)":"none",transition:"all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",cursor:"none",display:"inline-flex",alignItems:"center",gap:"0.4rem",whiteSpace:"nowrap"},children:[p.icon&&l.jsx("span",{style:{display:"inline-flex",alignItems:"center"},children:p.icon}),l.jsx("span",{children:p.label}),g&&l.jsx("span",{style:{width:"4px",height:"4px",borderRadius:"50%",backgroundColor:"#00ffcc",boxShadow:"0 0 6px #00ffcc"}})]},p.value)})})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=t=>t?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function r1(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:i1(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=t=>{const e=o1(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ps(t){return t!=null}function a1(t,e={}){const n=e.attributeNames??{},i=h=>n[h]??h,r=t.size??t.width??$n.width,o=t.size??t.height??$n.height,s=t.aliases?.filter(h=>typeof h=="string"&&h.trim()!=="").map(h=>`lucide-${h}`)??[],a=[...t.name?[`lucide-${t.name}`]:[],...s],c=e.className?.split(" ").filter(Boolean)??[],u=e.includeDefaultClasses===!1?da(...c):da("lucide",...a,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??$n["stroke-width"])*Number(t.size??t.width??$n.width)/Number(e.size??e.width??$n.width):e.strokeWidth??$n["stroke-width"];return["svg",{...Object.entries($n).reduce((h,[p,g])=>(h[i(p)]=g,h),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Ps(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Ps(e.width)&&{[i("width")]:e.width},..."height"in e&&Ps(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:f,...u&&{[i("class")]:u},[i("viewBox")]:`0 0 ${r} ${o}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(h=>{const[p,g,C]=h,_=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...g}:g;return C?[p,_,C]:[p,_]})]}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function l1(t,e={}){return a1(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},u1=E.createContext({}),f1=()=>E.useContext(u1),d1=E.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:o,nonScalingStroke:s,className:a="",children:c,iconNode:u=[],icon:f={node:u,aliases:[],size:24},...d},h)=>{const{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:C=!1,nonScalingStroke:_=!1,color:y="currentColor",className:m=""}=f1()??{},v=!!c||c1(d),[x,b,w=[]]=l1(f,{color:t??y,width:n??e??p,height:i??e??p,strokeWidth:r??g,absoluteStrokeWidth:o??C,nonScalingStroke:s??_,className:da(m,a),hasA11yProp:v,attributes:d});return E.createElement(x,{ref:h,...b},[...w.map(([T,A])=>E.createElement(T,A)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $t(t,e=[],n=[]){const i=typeof t=="string"?r1(t,e,n):t,r=E.forwardRef(({className:o,...s},a)=>E.createElement(d1,{ref:a,icon:i,className:o,...s}));return i.name&&(r.displayName=s1(i.name)),r}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};Id.node;const h1=$t(Id);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd={name:"arrow-down-right",size:24,node:[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]};jd.node;const m1=$t(jd);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};Fd.node;const p1=$t(Fd);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};kd.node;const g1=$t(kd);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};Vd.node;const Ud=$t(Vd);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd={name:"earth",size:24,node:[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["globe-2"]};Hd.node;const v1=$t(Hd);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Yd.node;const x1=$t(Yd);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Gd.node;const y1=$t(Gd);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd={name:"orbit",size:24,node:[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85",key:"1enhxb"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152",key:"1crzgf"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]};Wd.node;const _1=$t(Wd);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};$d.node;const C1=$t($d);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Xd.node;const b1=$t(Xd);function w1(){const t=E.useRef(null),e=E.useRef(null),n=B(u=>u.characterMode),i=B(u=>u.setCharacterMode),r=B(u=>u.setInspectionActive);B(u=>u.setCursor),B(u=>u.resetCursor),E.useEffect(()=>{if(!t.current)return;const u=we.context(()=>{we.fromTo(".hero-word",{opacity:0,y:50,rotateX:-20},{opacity:1,y:0,rotateX:0,duration:1.1,stagger:.12,ease:"power3.out",delay:.2}),we.fromTo(".hero-meta",{opacity:0,y:25},{opacity:1,y:0,duration:.9,stagger:.15,ease:"power2.out",delay:.6})},t);return()=>u.revert()},[]);const o=u=>{i(u),r(u==="scan")},s=[{label:"BEAUTY",value:"beauty"},{label:"WIREFRAME",value:"mesh"},{label:"IRIDESCENT",value:"iridescence"},{label:"SCAN 3D",value:"scan"}],c="MAKE PRODUCTS FEEL REAL BEFORE THEY ARRIVE.".split(" ");return l.jsxs("section",{ref:t,id:"hero",className:"relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-32 pb-14 overflow-hidden",children:[l.jsxs("div",{className:"hero-meta flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"flex h-2 w-2 rounded-full bg-scan animate-ping"}),l.jsx("span",{className:"font-mono text-xs tracking-[0.25em] text-[#00ffcc] uppercase",children:"EXPERIENCE ENGINE // 2026"})]}),l.jsxs("div",{className:"flex items-center gap-6 font-mono text-[10px] tracking-widest text-white/50",children:[l.jsx("span",{children:"PIPELINE: THREE.JS + GLSL"}),l.jsx("span",{children:"LATENCY: 0.001MS"}),l.jsx("span",{className:"text-white/80",children:"COUTURE CAD SYNTHESIS"})]})]}),l.jsxs("div",{className:"my-auto py-8 max-w-4xl",children:[l.jsxs("div",{className:"hero-meta mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 font-mono text-[10px] tracking-widest text-white/70 backdrop-blur-md",children:[l.jsx(C1,{size:12,className:"text-scan"}),l.jsx("span",{children:"AWWWARDS SOTD ARCHITECTURE"})]}),l.jsx("h1",{ref:e,className:"font-display font-bold text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-[#f2f0ea] uppercase select-none",children:c.map((u,f)=>l.jsx("span",{className:"hero-word inline-block mr-[0.25em] will-change-transform",style:{background:f%3===1?"linear-gradient(180deg, #ffffff 30%, #00ffcc 100%)":"none",WebkitBackgroundClip:f%3===1?"text":"none",WebkitTextFillColor:f%3===1?"transparent":"inherit"},children:u},f))}),l.jsx("p",{className:"hero-meta mt-6 max-w-xl font-body text-sm md:text-base leading-relaxed text-white/70 font-light",children:"We engineer photorealistic WebGL environments, tactile PBR cloth dynamics, and kinetic 3D digital twins for luxury brands that demand absolute distinction."}),l.jsxs("div",{className:"hero-meta mt-8 flex flex-wrap items-center gap-4",children:[l.jsxs(fa,{onClick:()=>{const u=document.getElementById("statement");u&&u.scrollIntoView({behavior:"smooth"})},cursorLabel:"EXPLORE",children:[l.jsx("span",{children:"DISCOVER PHILOSOPHY"}),l.jsx(m1,{size:14})]}),l.jsx(fa,{onClick:()=>{const u=document.getElementById("surface-structure");u&&u.scrollIntoView({behavior:"smooth"})},cursorLabel:"INSPECT",className:"border-white/10 hover:border-white/40 hover:bg-white/10 hover:text-white",children:l.jsx("span",{children:"3D DISSECTION LAB"})})]})]}),l.jsxs("div",{className:"hero-meta flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-white/10 pt-5",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-4",children:[l.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-white/50",children:"VIEW MODE //"}),l.jsx(Bd,{options:s,value:n,onChange:o,size:"md"})]}),l.jsxs("div",{className:"font-mono text-[10px] tracking-widest text-white/40 md:text-right space-y-1",children:[l.jsx("div",{children:"INTERPOLATION // GAZE & BREATHING ACTIVE"}),l.jsx("div",{className:"text-scan",children:"STATUS // REALTIME 60FPS LOCKED"})]})]})]})}function T1(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function E1(t,e,n){return e&&T1(t.prototype,e),t}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var We,Co,bt,Nn,On,Li,qd,qn,Ni,Zd,xn,Ht,Kd,Qd=function(){return We||typeof window<"u"&&(We=window.gsap)&&We.registerPlugin&&We},Jd=1,Di=[],K=[],on=[],pr=Date.now,ha=function(e,n){return n},S1=function(){var e=Ni.core,n=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,K),r.push.apply(r,on),K=i,on=r,ha=function(s,a){return n[s](a)}},Mn=function(e,n){return~on.indexOf(e)&&on[on.indexOf(e)+1][n]},gr=function(e){return!!~Zd.indexOf(e)},st=function(e,n,i,r,o){return e.addEventListener(n,i,{passive:r!==!1,capture:!!o})},ot=function(e,n,i,r){return e.removeEventListener(n,i,!!r)},Kr="scrollLeft",Qr="scrollTop",ma=function(){return xn&&xn.isPressed||K.cache++},jo=function(e,n){var i=function r(o){if(o||o===0){Jd&&(bt.history.scrollRestoration="manual");var s=xn&&xn.isPressed;o=r.v=Math.round(o)||(xn&&xn.iOS?1:0),e(o),r.cacheID=K.cache,s&&ha("ss",o)}else(n||K.cache!==r.cacheID||ha("ref"))&&(r.cacheID=K.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ut={s:Kr,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:jo(function(t){return arguments.length?bt.scrollTo(t,Be.sc()):bt.pageXOffset||Nn[Kr]||On[Kr]||Li[Kr]||0})},Be={s:Qr,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ut,sc:jo(function(t){return arguments.length?bt.scrollTo(ut.sc(),t):bt.pageYOffset||Nn[Qr]||On[Qr]||Li[Qr]||0})},pt=function(e,n){return(n&&n._ctx&&n._ctx.selector||We.utils.toArray)(e)[0]||(typeof e=="string"&&We.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},A1=function(e,n){for(var i=n.length;i--;)if(n[i]===e||n[i].contains(e))return!0;return!1},In=function(e,n){var i=n.s,r=n.sc;gr(e)&&(e=Nn.scrollingElement||On);var o=K.indexOf(e),s=r===Be.sc?1:2;!~o&&(o=K.push(e)-1),K[o+s]||st(e,"scroll",ma);var a=K[o+s],c=a||(K[o+s]=jo(Mn(e,i),!0)||(gr(e)?r:jo(function(u){return arguments.length?e[i]=u:e[i]})));return c.target=e,a||(c.smooth=We.getProperty(e,"scrollBehavior")==="smooth"),c},pa=function(e,n,i){var r=e,o=e,s=pr(),a=s,c=n||50,u=Math.max(500,c*3),f=function(g,C){var _=pr();C||_-s>c?(o=r,r=g,a=s,s=_):i?r+=g:r=o+(g-o)/(_-a)*(s-a)},d=function(){o=r=i?0:r,a=s=0},h=function(g){var C=a,_=o,y=pr();return(g||g===0)&&g!==r&&f(g),s===a||y-a>u?0:(r+(i?_:-_))/((i?y:s)-C)*1e3};return{update:f,reset:d,getVelocity:h}},tr=function(e,n){return n&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Zc=function(e){var n=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(i)?n:i},eh=function(){Ni=We.core.globals().ScrollTrigger,Ni&&Ni.core&&S1()},th=function(e){return We=e||Qd(),!Co&&We&&typeof document<"u"&&document.body&&(bt=window,Nn=document,On=Nn.documentElement,Li=Nn.body,Zd=[bt,Nn,On,Li],We.utils.clamp,Kd=We.core.context||function(){},qn="onpointerenter"in Li?"pointer":"mouse",qd=Ae.isTouch=bt.matchMedia&&bt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in bt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ht=Ae.eventTypes=("ontouchstart"in On?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in On?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Jd=0},500),Co=1),Ni||eh(),Co};ut.op=Be;K.cache=0;var Ae=function(){function t(n){this.init(n)}var e=t.prototype;return e.init=function(i){Co||th(We)||console.warn("Please gsap.registerPlugin(Observer)"),Ni||eh();var r=i.tolerance,o=i.dragMinimum,s=i.type,a=i.target,c=i.lineHeight,u=i.debounce,f=i.preventDefault,d=i.onStop,h=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,C=i.event,_=i.onDragStart,y=i.onDragEnd,m=i.onDrag,v=i.onPress,x=i.onRelease,b=i.onRight,w=i.onLeft,T=i.onUp,A=i.onDown,L=i.onChangeX,z=i.onChangeY,k=i.onChange,R=i.onToggleX,ie=i.onToggleY,G=i.onHover,V=i.onHoverEnd,ge=i.onMove,re=i.ignoreCheck,W=i.isNormalizer,ee=i.onGestureStart,S=i.onGestureEnd,me=i.onWheel,an=i.onEnable,Cn=i.onDisable,Tt=i.onClick,ln=i.scrollSpeed,Xe=i.capture,Pe=i.allowClicks,nt=i.lockAxis,qe=i.onLockAxis;this.target=a=pt(a)||On,this.vars=i,p&&(p=We.utils.toArray(p)),r=r||1e-9,o=o||0,g=g||1,ln=ln||1,s=s||"wheel,touch,pointer",u=u!==!1,c||(c=parseFloat(bt.getComputedStyle(Li).lineHeight)||22);var bn,it,rt,te,Te,ht,gt,P=this,vt=0,cn=0,wn=i.passive||!f&&i.passive!==!1,_e=In(a,ut),un=In(a,Be),Tn=_e(),Fn=un(),je=~s.indexOf("touch")&&!~s.indexOf("pointer")&&Ht[0]==="pointerdown",En=gr(a),Ee=a.ownerDocument||Nn,Mt=[0,0,0],Et=[0,0,0],fn=0,Gi=function(){return fn=pr()},De=function(j,oe){return(P.event=j)&&p&&A1(j.target,p)||oe&&je&&j.pointerType!=="touch"||re&&re(j,oe)},Ir=function(){P._vx.reset(),P._vy.reset(),it.pause(),d&&d(P)},dn=function(){var j=P.deltaX=Zc(Mt),oe=P.deltaY=Zc(Et),N=Math.abs(j)>=r,U=Math.abs(oe)>=r;k&&(N||U)&&k(P,j,oe,Mt,Et),N&&(b&&P.deltaX>0&&b(P),w&&P.deltaX<0&&w(P),L&&L(P),R&&P.deltaX<0!=vt<0&&R(P),vt=P.deltaX,Mt[0]=Mt[1]=Mt[2]=0),U&&(A&&P.deltaY>0&&A(P),T&&P.deltaY<0&&T(P),z&&z(P),ie&&P.deltaY<0!=cn<0&&ie(P),cn=P.deltaY,Et[0]=Et[1]=Et[2]=0),(te||rt)&&(ge&&ge(P),rt&&(_&&rt===1&&_(P),m&&m(P),rt=0),te=!1),ht&&!(ht=!1)&&qe&&qe(P),Te&&(me(P),Te=!1),bn=0},ui=function(j,oe,N){Mt[N]+=j,Et[N]+=oe,P._vx.update(j),P._vy.update(oe),u?bn||(bn=requestAnimationFrame(dn)):dn()},fi=function(j,oe){nt&&!gt&&(P.axis=gt=Math.abs(j)>Math.abs(oe)?"x":"y",ht=!0),gt!=="y"&&(Mt[2]+=j,P._vx.update(j,!0)),gt!=="x"&&(Et[2]+=oe,P._vy.update(oe,!0)),u?bn||(bn=requestAnimationFrame(dn)):dn()},Sn=function(j){if(!De(j,1)){j=tr(j,f);var oe=j.clientX,N=j.clientY,U=oe-P.x,I=N-P.y,H=P.isDragging;P.x=oe,P.y=N,(H||(U||I)&&(Math.abs(P.startX-oe)>=o||Math.abs(P.startY-N)>=o))&&(rt||(rt=H?2:1),H||(P.isDragging=!0),fi(U,I))}},kn=P.onPress=function(Y){De(Y,1)||Y&&Y.button||(P.axis=gt=null,it.pause(),P.isPressed=!0,Y=tr(Y),vt=cn=0,P.startX=P.x=Y.clientX,P.startY=P.y=Y.clientY,P._vx.reset(),P._vy.reset(),st(W?a:Ee,Ht[1],Sn,wn,!0),P.deltaX=P.deltaY=0,v&&v(P))},Q=P.onRelease=function(Y){if(!De(Y,1)){ot(W?a:Ee,Ht[1],Sn,!0);var j=!isNaN(P.y-P.startY),oe=P.isDragging,N=oe&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),U=tr(Y);!N&&j&&(P._vx.reset(),P._vy.reset(),f&&Pe&&We.delayedCall(.08,function(){if(pr()-fn>300&&!Y.defaultPrevented){if(Y.target.click)Y.target.click();else if(Ee.createEvent){var I=Ee.createEvent("MouseEvents");I.initMouseEvent("click",!0,!0,bt,1,U.screenX,U.screenY,U.clientX,U.clientY,!1,!1,!1,!1,0,null),Y.target.dispatchEvent(I)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,d&&oe&&!W&&it.restart(!0),rt&&dn(),y&&oe&&y(P),x&&x(P,N)}},Vn=function(j){return j.touches&&j.touches.length>1&&(P.isGesturing=!0)&&ee(j,P.isDragging)},Bt=function(){return(P.isGesturing=!1)||S(P)},It=function(j){if(!De(j)){var oe=_e(),N=un();ui((oe-Tn)*ln,(N-Fn)*ln,1),Tn=oe,Fn=N,d&&it.restart(!0)}},jt=function(j){if(!De(j)){j=tr(j,f),me&&(Te=!0);var oe=(j.deltaMode===1?c:j.deltaMode===2?bt.innerHeight:1)*g;ui(j.deltaX*oe,j.deltaY*oe,0),d&&!W&&it.restart(!0)}},Un=function(j){if(!De(j)){var oe=j.clientX,N=j.clientY,U=oe-P.x,I=N-P.y;P.x=oe,P.y=N,te=!0,d&&it.restart(!0),(U||I)&&fi(U,I)}},di=function(j){P.event=j,G(P)},hn=function(j){P.event=j,V(P)},Wi=function(j){return De(j)||tr(j,f)&&Tt(P)};it=P._dc=We.delayedCall(h||.25,Ir).pause(),P.deltaX=P.deltaY=0,P._vx=pa(0,50,!0),P._vy=pa(0,50,!0),P.scrollX=_e,P.scrollY=un,P.isDragging=P.isGesturing=P.isPressed=!1,Kd(this),P.enable=function(Y){return P.isEnabled||(st(En?Ee:a,"scroll",ma),s.indexOf("scroll")>=0&&st(En?Ee:a,"scroll",It,wn,Xe),s.indexOf("wheel")>=0&&st(a,"wheel",jt,wn,Xe),(s.indexOf("touch")>=0&&qd||s.indexOf("pointer")>=0)&&(st(a,Ht[0],kn,wn,Xe),st(Ee,Ht[2],Q),st(Ee,Ht[3],Q),Pe&&st(a,"click",Gi,!0,!0),Tt&&st(a,"click",Wi),ee&&st(Ee,"gesturestart",Vn),S&&st(Ee,"gestureend",Bt),G&&st(a,qn+"enter",di),V&&st(a,qn+"leave",hn),ge&&st(a,qn+"move",Un)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=te=rt=!1,P._vx.reset(),P._vy.reset(),Tn=_e(),Fn=un(),Y&&Y.type&&kn(Y),an&&an(P)),P},P.disable=function(){P.isEnabled&&(Di.filter(function(Y){return Y!==P&&gr(Y.target)}).length||ot(En?Ee:a,"scroll",ma),P.isPressed&&(P._vx.reset(),P._vy.reset(),ot(W?a:Ee,Ht[1],Sn,!0)),ot(En?Ee:a,"scroll",It,Xe),ot(a,"wheel",jt,Xe),ot(a,Ht[0],kn,Xe),ot(Ee,Ht[2],Q),ot(Ee,Ht[3],Q),ot(a,"click",Gi,!0),ot(a,"click",Wi),ot(Ee,"gesturestart",Vn),ot(Ee,"gestureend",Bt),ot(a,qn+"enter",di),ot(a,qn+"leave",hn),ot(a,qn+"move",Un),P.isEnabled=P.isPressed=P.isDragging=!1,Cn&&Cn(P))},P.kill=P.revert=function(){P.disable();var Y=Di.indexOf(P);Y>=0&&Di.splice(Y,1),xn===P&&(xn=0)},Di.push(P),W&&gr(a)&&(xn=P),P.enable(C)},E1(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();Ae.version="3.15.0";Ae.create=function(t){return new Ae(t)};Ae.register=th;Ae.getAll=function(){return Di.slice()};Ae.getById=function(t){return Di.filter(function(e){return e.vars.id===t})[0]};Qd()&&We.registerPlugin(Ae);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var O,Ti,Z,le,Ct,ae,rl,Fo,Dr,vr,or,Jr,Je,Zo,ga,lt,Kc,Qc,Ei,nh,Ds,ih,at,va,rh,oh,Rn,xa,ol,Oi,sl,xr,ya,Rs,eo=1,et=Date.now,zs=et(),Ot=0,sr=0,Jc=function(e,n,i){var r=_t(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+n+"Clamp"]=r,r?e.substr(6,e.length-7):e},eu=function(e,n){return n&&(!_t(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},P1=function t(){return sr&&requestAnimationFrame(t)},tu=function(){return Zo=1},nu=function(){return Zo=0},en=function(e){return e},ar=function(e){return Math.round(e*1e5)/1e5||0},sh=function(){return typeof window<"u"},ah=function(){return O||sh()&&(O=window.gsap)&&O.registerPlugin&&O},ai=function(e){return!!~rl.indexOf(e)},lh=function(e){return(e==="Height"?sl:Z["inner"+e])||Ct["client"+e]||ae["client"+e]},ch=function(e){return Mn(e,"getBoundingClientRect")||(ai(e)?function(){return So.width=Z.innerWidth,So.height=sl,So}:function(){return vn(e)})},D1=function(e,n,i){var r=i.d,o=i.d2,s=i.a;return(s=Mn(e,"getBoundingClientRect"))?function(){return s()[r]}:function(){return(n?lh(o):e["client"+o])||0}},R1=function(e,n){return!n||~on.indexOf(e)?ch(e):function(){return So}},nn=function(e,n){var i=n.s,r=n.d2,o=n.d,s=n.a;return Math.max(0,(i="scroll"+r)&&(s=Mn(e,i))?s()-ch(e)()[o]:ai(e)?(Ct[i]||ae[i])-lh(r):e[i]-e["offset"+r])},to=function(e,n){for(var i=0;i<Ei.length;i+=3)(!n||~n.indexOf(Ei[i+1]))&&e(Ei[i],Ei[i+1],Ei[i+2])},_t=function(e){return typeof e=="string"},tt=function(e){return typeof e=="function"},lr=function(e){return typeof e=="number"},Zn=function(e){return typeof e=="object"},nr=function(e,n,i){return e&&e.progress(n?0:1)&&i&&e.pause()},_i=function(e,n,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return n(e,i)}):n(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Ci=Math.abs,uh="left",fh="top",al="right",ll="bottom",ni="width",ii="height",yr="Right",_r="Left",Cr="Top",br="Bottom",ze="padding",Pt="margin",ji="Width",cl="Height",Oe="px",Dt=function(e){return Z.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},z1=function(e){var n=Dt(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},iu=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},vn=function(e,n){var i=n&&Dt(e)[ga]!=="matrix(1, 0, 0, 1, 0, 0)"&&O.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},ko=function(e,n){var i=n.d2;return e["offset"+i]||e["client"+i]||0},dh=function(e){var n=[],i=e.labels,r=e.duration(),o;for(o in i)n.push(i[o]/r);return n},L1=function(e){return function(n){return O.utils.snap(dh(e),n)}},ul=function(e){var n=O.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,o){return r-o});return i?function(r,o,s){s===void 0&&(s=.001);var a;if(!o)return n(r);if(o>0){for(r-=s,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=s;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,o,s){s===void 0&&(s=.001);var a=n(r);return!o||Math.abs(a-r)<s||a-r<0==o<0?a:n(o<0?r-e:r+e)}},N1=function(e){return function(n,i){return ul(dh(e))(n,i.direction)}},no=function(e,n,i,r){return i.split(",").forEach(function(o){return e(n,o,r)})},Ve=function(e,n,i,r,o){return e.addEventListener(n,i,{passive:!r,capture:!!o})},ke=function(e,n,i,r){return e.removeEventListener(n,i,!!r)},io=function(e,n,i){i=i&&i.wheelHandler,i&&(e(n,"wheel",i),e(n,"touchmove",i))},ru={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ro={toggleActions:"play",anticipatePin:0},Vo={top:0,left:0,center:.5,bottom:1,right:1},bo=function(e,n){if(_t(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=n/100),e=e.substr(0,i-1)),e=r+(e in Vo?Vo[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},oo=function(e,n,i,r,o,s,a,c){var u=o.startColor,f=o.endColor,d=o.fontSize,h=o.indent,p=o.fontWeight,g=le.createElement("div"),C=ai(i)||Mn(i,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,y=C?ae:i.tagName==="IFRAME"?i.contentDocument.body:i,m=e.indexOf("start")!==-1,v=m?u:f,x="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((_||c)&&C?"fixed;":"absolute;"),(_||c||!C)&&(x+=(r===Be?al:ll)+":"+(s+parseFloat(h))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=m,g.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),g.style.cssText=x,g.innerText=n||n===0?e+"-"+n:e,y.children[0]?y.insertBefore(g,y.children[0]):y.appendChild(g),g._offset=g["offset"+r.op.d2],wo(g,0,r,m),g},wo=function(e,n,i,r){var o={display:"block"},s=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,o[i.a+"Percent"]=r?-100:0,o[i.a]=r?"1px":0,o["border"+s+ji]=1,o["border"+a+ji]=0,o[i.p]=n+"px",O.set(e,o)},q=[],_a={},Rr,ou=function(){return et()-Ot>34&&(Rr||(Rr=requestAnimationFrame(yn)))},bi=function(){(!at||!at.isPressed||at.startX>ae.clientWidth)&&(K.cache++,at?Rr||(Rr=requestAnimationFrame(yn)):yn(),Ot||ci("scrollStart"),Ot=et())},Ls=function(){oh=Z.innerWidth,rh=Z.innerHeight},cr=function(e){K.cache++,(e===!0||!Je&&!ih&&!le.fullscreenElement&&!le.webkitFullscreenElement&&(!va||oh!==Z.innerWidth||Math.abs(Z.innerHeight-rh)>Z.innerHeight*.25))&&Fo.restart(!0)},li={},O1=[],hh=function t(){return ke(X,"scrollEnd",t)||Jn(!0)},ci=function(e){return li[e]&&li[e].map(function(n){return n()})||O1},yt=[],mh=function(e){for(var n=0;n<yt.length;n+=5)(!e||yt[n+4]&&yt[n+4].query===e)&&(yt[n].style.cssText=yt[n+1],yt[n].getBBox&&yt[n].setAttribute("transform",yt[n+2]||""),yt[n+3].uncache=1)},ph=function(){return K.forEach(function(e){return tt(e)&&++e.cacheID&&(e.rec=e())})},fl=function(e,n){var i;for(lt=0;lt<q.length;lt++)i=q[lt],i&&(!n||i._ctx===n)&&(e?i.kill(1):i.revert(!0,!0));xr=!0,n&&mh(n),n||ci("revert")},gh=function(e,n){K.cache++,(n||!ct)&&K.forEach(function(i){return tt(i)&&i.cacheID++&&(i.rec=0)}),_t(e)&&(Z.history.scrollRestoration=ol=e)},ct,ri=0,su,M1=function(){if(su!==ri){var e=su=ri;requestAnimationFrame(function(){return e===ri&&Jn(!0)})}},vh=function(){ae.appendChild(Oi),sl=!at&&Oi.offsetHeight||Z.innerHeight,ae.removeChild(Oi)},au=function(e){return Dr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},Jn=function(e,n){if(Ct=le.documentElement,ae=le.body,rl=[Z,le,Ct,ae],Ot&&!e&&!xr){Ve(X,"scrollEnd",hh);return}vh(),ct=X.isRefreshing=!0,xr||ph();var i=ci("refreshInit");nh&&X.sort(),n||fl(),K.forEach(function(r){tt(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),q.slice(0).forEach(function(r){return r.refresh()}),xr=!1,q.forEach(function(r){if(r._subPinOffset&&r.pin){var o=r.vars.horizontal?"offsetWidth":"offsetHeight",s=r.pin[o];r.revert(!0,1),r.adjustPinSpacing(r.pin[o]-s),r.refresh()}}),ya=1,au(!0),q.forEach(function(r){var o=nn(r.scroller,r._dir),s=r.vars.end==="max"||r._endClamp&&r.end>o,a=r._startClamp&&r.start>=o;(s||a)&&r.setPositions(a?o-1:r.start,s?Math.max(a?o:r.start+1,o):r.end,!0)}),au(!1),ya=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),K.forEach(function(r){tt(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),gh(ol,1),Fo.pause(),ri++,ct=2,yn(2),q.forEach(function(r){return tt(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ct=X.isRefreshing=!1,ci("refresh")},Ca=0,To=1,wr,yn=function(e){if(e===2||!ct&&!xr){X.isUpdating=!0,wr&&wr.update(0);var n=q.length,i=et(),r=i-zs>=50,o=n&&q[0].scroll();if(To=Ca>o?-1:1,ct||(Ca=o),r&&(Ot&&!Zo&&i-Ot>200&&(Ot=0,ci("scrollEnd")),or=zs,zs=i),To<0){for(lt=n;lt-- >0;)q[lt]&&q[lt].update(0,r);To=1}else for(lt=0;lt<n;lt++)q[lt]&&q[lt].update(0,r);X.isUpdating=!1}Rr=0},ba=[uh,fh,ll,al,Pt+br,Pt+yr,Pt+Cr,Pt+_r,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Eo=ba.concat([ni,ii,"boxSizing","max"+ji,"max"+cl,"position",Pt,ze,ze+Cr,ze+yr,ze+br,ze+_r]),B1=function(e,n,i){Mi(i);var r=e._gsap;if(r.spacerIsNative)Mi(r.spacerState);else if(e._gsap.swappedIn){var o=n.parentNode;o&&(o.insertBefore(e,n),o.removeChild(n))}e._gsap.swappedIn=!1},Ns=function(e,n,i,r){if(!e._gsap.swappedIn){for(var o=ba.length,s=n.style,a=e.style,c;o--;)c=ba[o],s[c]=i[c];s.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(s.display="inline-block"),a[ll]=a[al]="auto",s.flexBasis=i.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[ni]=ko(e,ut)+Oe,s[ii]=ko(e,Be)+Oe,s[ze]=a[Pt]=a[fh]=a[uh]="0",Mi(r),a[ni]=a["max"+ji]=i[ni],a[ii]=a["max"+cl]=i[ii],a[ze]=i[ze],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},I1=/([A-Z])/g,Mi=function(e){if(e){var n=e.t.style,i=e.length,r=0,o,s;for((e.t._gsap||O.core.getCache(e.t)).uncache=1;r<i;r+=2)s=e[r+1],o=e[r],s?n[o]=s:n[o]&&n.removeProperty(o.replace(I1,"-$1").toLowerCase())}},so=function(e){for(var n=Eo.length,i=e.style,r=[],o=0;o<n;o++)r.push(Eo[o],i[Eo[o]]);return r.t=e,r},j1=function(e,n,i){for(var r=[],o=e.length,s=i?8:0,a;s<o;s+=2)a=e[s],r.push(a,a in n?n[a]:e[s+1]);return r.t=e.t,r},So={left:0,top:0},lu=function(e,n,i,r,o,s,a,c,u,f,d,h,p,g){tt(e)&&(e=e(c)),_t(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?bo("0"+e.substr(3),i):0));var C=p?p.time():0,_,y,m;if(p&&p.seek(0),isNaN(e)||(e=+e),lr(e))p&&(e=O.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,e)),a&&wo(a,i,r,!0);else{tt(n)&&(n=n(c));var v=(e||"0").split(" "),x,b,w,T;m=pt(n,c)||ae,x=vn(m)||{},(!x||!x.left&&!x.top)&&Dt(m).display==="none"&&(T=m.style.display,m.style.display="block",x=vn(m),T?m.style.display=T:m.style.removeProperty("display")),b=bo(v[0],x[r.d]),w=bo(v[1]||"0",i),e=x[r.p]-u[r.p]-f+b+o-w,a&&wo(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(g&&(c[g]=e||-.001,e<0&&(e=0)),s){var A=e+i,L=s._isStart;_="scroll"+r.d2,wo(s,A,r,L&&A>20||!L&&(d?Math.max(ae[_],Ct[_]):s.parentNode[_])<=A+1),d&&(u=vn(a),d&&(s.style[r.op.p]=u[r.op.p]-r.op.m-s._offset+Oe))}return p&&m&&(_=vn(m),p.seek(h),y=vn(m),p._caScrollDist=_[r.p]-y[r.p],e=e/p._caScrollDist*h),p&&p.seek(C),p?e:Math.round(e)},F1=/(webkit|moz|length|cssText|inset)/i,cu=function(e,n,i,r){if(e.parentNode!==n){var o=e.style,s,a;if(n===ae){e._stOrig=o.cssText,a=Dt(e);for(s in a)!+s&&!F1.test(s)&&a[s]&&typeof o[s]=="string"&&s!=="0"&&(o[s]=a[s]);o.top=i,o.left=r}else o.cssText=e._stOrig;O.core.getCache(e).uncache=1,n.appendChild(e)}},xh=function(e,n,i){var r=n,o=r;return function(s){var a=Math.round(e());return a!==r&&a!==o&&Math.abs(a-r)>3&&Math.abs(a-o)>3&&(s=a,i&&i()),o=r,r=Math.round(s),r}},ao=function(e,n,i){var r={};r[n.p]="+="+i,O.set(e,r)},uu=function(e,n){var i=In(e,n),r="_scroll"+n.p2,o=function s(a,c,u,f,d){var h=s.tween,p=c.onComplete,g={};u=u||i();var C=xh(i,u,function(){h.kill(),s.tween=0});return d=f&&d||0,f=f||a-u,h&&h.kill(),c[r]=a,c.inherit=!1,c.modifiers=g,g[r]=function(){return C(u+f*h.ratio+d*h.ratio*h.ratio)},c.onUpdate=function(){K.cache++,s.tween&&yn()},c.onComplete=function(){s.tween=0,p&&p.call(h)},h=s.tween=O.to(e,c),h};return e[r]=i,i.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},Ve(e,"wheel",i.wheelHandler),X.isTouch&&Ve(e,"touchmove",i.wheelHandler),o},X=function(){function t(n,i){Ti||t.register(O)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xa(this),this.init(n,i)}var e=t.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!sr){this.update=this.refresh=this.kill=en;return}i=iu(_t(i)||lr(i)||i.nodeType?{trigger:i}:i,ro);var o=i,s=o.onUpdate,a=o.toggleClass,c=o.id,u=o.onToggle,f=o.onRefresh,d=o.scrub,h=o.trigger,p=o.pin,g=o.pinSpacing,C=o.invalidateOnRefresh,_=o.anticipatePin,y=o.onScrubComplete,m=o.onSnapComplete,v=o.once,x=o.snap,b=o.pinReparent,w=o.pinSpacer,T=o.containerAnimation,A=o.fastScrollEnd,L=o.preventOverlaps,z=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ut:Be,k=!d&&d!==0,R=pt(i.scroller||Z),ie=O.core.getCache(R),G=ai(R),V=("pinType"in i?i.pinType:Mn(R,"pinType")||G&&"fixed")==="fixed",ge=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],re=k&&i.toggleActions.split(" "),W="markers"in i?i.markers:ro.markers,ee=G?0:parseFloat(Dt(R)["border"+z.p2+ji])||0,S=this,me=i.onRefreshInit&&function(){return i.onRefreshInit(S)},an=D1(R,G,z),Cn=R1(R,G),Tt=0,ln=0,Xe=0,Pe=In(R,z),nt,qe,bn,it,rt,te,Te,ht,gt,P,vt,cn,wn,_e,un,Tn,Fn,je,En,Ee,Mt,Et,fn,Gi,De,Ir,dn,ui,fi,Sn,kn,Q,Vn,Bt,It,jt,Un,di,hn;if(S._startClamp=S._endClamp=!1,S._dir=z,_*=45,S.scroller=R,S.scroll=T?T.time.bind(T):Pe,it=Pe(),S.vars=i,r=r||i.animation,"refreshPriority"in i&&(nh=1,i.refreshPriority===-9999&&(wr=S)),ie.tweenScroll=ie.tweenScroll||{top:uu(R,Be),left:uu(R,ut)},S.tweenTo=nt=ie.tweenScroll[z.p],S.scrubDuration=function(N){Vn=lr(N)&&N,Vn?Q?Q.duration(N):Q=O.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Vn,paused:!0,onComplete:function(){return y&&y(S)}}):(Q&&Q.progress(1).kill(),Q=0)},r&&(r.vars.lazy=!1,r._initted&&!S.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),S.animation=r.pause(),r.scrollTrigger=S,S.scrubDuration(d),Sn=0,c||(c=r.vars.id)),x&&((!Zn(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in ae.style&&O.set(G?[ae,Ct]:R,{scrollBehavior:"auto"}),K.forEach(function(N){return tt(N)&&N.target===(G?le.scrollingElement||Ct:R)&&(N.smooth=!1)}),bn=tt(x.snapTo)?x.snapTo:x.snapTo==="labels"?L1(r):x.snapTo==="labelsDirectional"?N1(r):x.directional!==!1?function(N,U){return ul(x.snapTo)(N,et()-ln<500?0:U.direction)}:O.utils.snap(x.snapTo),Bt=x.duration||{min:.1,max:2},Bt=Zn(Bt)?vr(Bt.min,Bt.max):vr(Bt,Bt),It=O.delayedCall(x.delay||Vn/2||.1,function(){var N=Pe(),U=et()-ln<500,I=nt.tween;if((U||Math.abs(S.getVelocity())<10)&&!I&&!Zo&&Tt!==N){var H=(N-te)/_e,Fe=r&&!k?r.totalProgress():H,J=U?0:(Fe-kn)/(et()-or)*1e3||0,Se=O.utils.clamp(-H,1-H,Ci(J/2)*J/.185),Ze=H+(x.inertia===!1?0:Se),Ce,ve,ue=x,Ft=ue.onStart,xe=ue.onInterrupt,xt=ue.onComplete;if(Ce=bn(Ze,S),lr(Ce)||(Ce=Ze),ve=Math.max(0,Math.round(te+Ce*_e)),N<=Te&&N>=te&&ve!==N){if(I&&!I._initted&&I.data<=Ci(ve-N))return;x.inertia===!1&&(Se=Ce-H),nt(ve,{duration:Bt(Ci(Math.max(Ci(Ze-Fe),Ci(Ce-Fe))*.185/J/.05||0)),ease:x.ease||"power3",data:Ci(ve-N),onInterrupt:function(){return It.restart(!0)&&xe&&_i(S,xe)},onComplete:function(){S.update(),Tt=Pe(),r&&!k&&(Q?Q.resetTo("totalProgress",Ce,r._tTime/r._tDur):r.progress(Ce)),Sn=kn=r&&!k?r.totalProgress():S.progress,m&&m(S),xt&&_i(S,xt)}},N,Se*_e,ve-N-Se*_e),Ft&&_i(S,Ft,nt.tween)}}else S.isActive&&Tt!==N&&It.restart(!0)}).pause()),c&&(_a[c]=S),h=S.trigger=pt(h||p!==!0&&p),hn=h&&h._gsap&&h._gsap.stRevert,hn&&(hn=hn(S)),p=p===!0?h:pt(p),_t(a)&&(a={targets:h,className:a}),p&&(g===!1||g===Pt||(g=!g&&p.parentNode&&p.parentNode.style&&Dt(p.parentNode).display==="flex"?!1:ze),S.pin=p,qe=O.core.getCache(p),qe.spacer?un=qe.pinState:(w&&(w=pt(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),qe.spacerIsNative=!!w,w&&(qe.spacerState=so(w))),qe.spacer=je=w||le.createElement("div"),je.classList.add("pin-spacer"),c&&je.classList.add("pin-spacer-"+c),qe.pinState=un=so(p)),i.force3D!==!1&&O.set(p,{force3D:!0}),S.spacer=je=qe.spacer,fi=Dt(p),Gi=fi[g+z.os2],Ee=O.getProperty(p),Mt=O.quickSetter(p,z.a,Oe),Ns(p,je,fi),Fn=so(p)),W){cn=Zn(W)?iu(W,ru):ru,P=oo("scroller-start",c,R,z,cn,0),vt=oo("scroller-end",c,R,z,cn,0,P),En=P["offset"+z.op.d2];var Wi=pt(Mn(R,"content")||R);ht=this.markerStart=oo("start",c,Wi,z,cn,En,0,T),gt=this.markerEnd=oo("end",c,Wi,z,cn,En,0,T),T&&(di=O.quickSetter([ht,gt],z.a,Oe)),!V&&!(on.length&&Mn(R,"fixedMarkers")===!0)&&(z1(G?ae:R),O.set([P,vt],{force3D:!0}),Ir=O.quickSetter(P,z.a,Oe),ui=O.quickSetter(vt,z.a,Oe))}if(T){var Y=T.vars.onUpdate,j=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){S.update(0,0,1),Y&&Y.apply(T,j||[])})}if(S.previous=function(){return q[q.indexOf(S)-1]},S.next=function(){return q[q.indexOf(S)+1]},S.revert=function(N,U){if(!U)return S.kill(!0);var I=N!==!1||!S.enabled,H=Je;I!==S.isReverted&&(I&&(jt=Math.max(Pe(),S.scroll.rec||0),Xe=S.progress,Un=r&&r.progress()),ht&&[ht,gt,P,vt].forEach(function(Fe){return Fe.style.display=I?"none":"block"}),I&&(Je=S,S.update(I)),p&&(!b||!S.isActive)&&(I?B1(p,je,un):Ns(p,je,Dt(p),De)),I||S.update(I),Je=H,S.isReverted=I)},S.refresh=function(N,U,I,H){if(!((Je||!S.enabled)&&!U)){if(p&&N&&Ot){Ve(t,"scrollEnd",hh);return}!ct&&me&&me(S),Je=S,nt.tween&&!I&&(nt.tween.kill(),nt.tween=0),Q&&Q.pause(),C&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(An){return An.vars.immediateRender&&An.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),S.isReverted||S.revert(!0,!0),S._subPinOffset=!1;var Fe=an(),J=Cn(),Se=T?T.duration():nn(R,z),Ze=_e<=.01||!_e,Ce=0,ve=H||0,ue=Zn(I)?I.end:i.end,Ft=i.endTrigger||h,xe=Zn(I)?I.start:i.start||(i.start===0||!h?0:p?"0 0":"0 100%"),xt=S.pinnedContainer=i.pinnedContainer&&pt(i.pinnedContainer,S),Xt=h&&Math.max(0,q.indexOf(S))||0,Ue=Xt,He,Ke,Hn,jr,Qe,Ne,qt,Qo,dl,$i,Zt,Xi,Fr;for(W&&Zn(I)&&(Xi=O.getProperty(P,z.p),Fr=O.getProperty(vt,z.p));Ue-- >0;)Ne=q[Ue],Ne.end||Ne.refresh(0,1)||(Je=S),qt=Ne.pin,qt&&(qt===h||qt===p||qt===xt)&&!Ne.isReverted&&($i||($i=[]),$i.unshift(Ne),Ne.revert(!0,!0)),Ne!==q[Ue]&&(Xt--,Ue--);for(tt(xe)&&(xe=xe(S)),xe=Jc(xe,"start",S),te=lu(xe,h,Fe,z,Pe(),ht,P,S,J,ee,V,Se,T,S._startClamp&&"_startClamp")||(p?-.001:0),tt(ue)&&(ue=ue(S)),_t(ue)&&!ue.indexOf("+=")&&(~ue.indexOf(" ")?ue=(_t(xe)?xe.split(" ")[0]:"")+ue:(Ce=bo(ue.substr(2),Fe),ue=_t(xe)?xe:(T?O.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,te):te)+Ce,Ft=h)),ue=Jc(ue,"end",S),Te=Math.max(te,lu(ue||(Ft?"100% 0":Se),Ft,Fe,z,Pe()+Ce,gt,vt,S,J,ee,V,Se,T,S._endClamp&&"_endClamp"))||-.001,Ce=0,Ue=Xt;Ue--;)Ne=q[Ue]||{},qt=Ne.pin,qt&&Ne.start-Ne._pinPush<=te&&!T&&Ne.end>0&&(He=Ne.end-(S._startClamp?Math.max(0,Ne.start):Ne.start),(qt===h&&Ne.start-Ne._pinPush<te||qt===xt)&&isNaN(xe)&&(Ce+=He*(1-Ne.progress)),qt===p&&(ve+=He));if(te+=Ce,Te+=Ce,S._startClamp&&(S._startClamp+=Ce),S._endClamp&&!ct&&(S._endClamp=Te||-.001,Te=Math.min(Te,nn(R,z))),_e=Te-te||(te-=.01)&&.001,Ze&&(Xe=O.utils.clamp(0,1,O.utils.normalize(te,Te,jt))),S._pinPush=ve,ht&&Ce&&(He={},He[z.a]="+="+Ce,xt&&(He[z.p]="-="+Pe()),O.set([ht,gt],He)),p&&!(ya&&S.end>=nn(R,z)))He=Dt(p),jr=z===Be,Hn=Pe(),Et=parseFloat(Ee(z.a))+ve,!Se&&Te>1&&(Zt=(G?le.scrollingElement||Ct:R).style,Zt={style:Zt,value:Zt["overflow"+z.a.toUpperCase()]},G&&Dt(ae)["overflow"+z.a.toUpperCase()]!=="scroll"&&(Zt.style["overflow"+z.a.toUpperCase()]="scroll")),Ns(p,je,He),Fn=so(p),Ke=vn(p,!0),Qo=V&&In(R,jr?ut:Be)(),g?(De=[g+z.os2,_e+ve+Oe],De.t=je,Ue=g===ze?ko(p,z)+_e+ve:0,Ue&&(De.push(z.d,Ue+Oe),je.style.flexBasis!=="auto"&&(je.style.flexBasis=Ue+Oe)),Mi(De),xt&&q.forEach(function(An){An.pin===xt&&An.vars.pinSpacing!==!1&&(An._subPinOffset=!0)}),V&&Pe(jt)):(Ue=ko(p,z),Ue&&je.style.flexBasis!=="auto"&&(je.style.flexBasis=Ue+Oe)),V&&(Qe={top:Ke.top+(jr?Hn-te:Qo)+Oe,left:Ke.left+(jr?Qo:Hn-te)+Oe,boxSizing:"border-box",position:"fixed"},Qe[ni]=Qe["max"+ji]=Math.ceil(Ke.width)+Oe,Qe[ii]=Qe["max"+cl]=Math.ceil(Ke.height)+Oe,Qe[Pt]=Qe[Pt+Cr]=Qe[Pt+yr]=Qe[Pt+br]=Qe[Pt+_r]="0",Qe[ze]=He[ze],Qe[ze+Cr]=He[ze+Cr],Qe[ze+yr]=He[ze+yr],Qe[ze+br]=He[ze+br],Qe[ze+_r]=He[ze+_r],Tn=j1(un,Qe,b),ct&&Pe(0)),r?(dl=r._initted,Ds(1),r.render(r.duration(),!0,!0),fn=Ee(z.a)-Et+_e+ve,dn=Math.abs(_e-fn)>1,V&&dn&&Tn.splice(Tn.length-2,2),r.render(0,!0,!0),dl||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Ds(0)):fn=_e,Zt&&(Zt.value?Zt.style["overflow"+z.a.toUpperCase()]=Zt.value:Zt.style.removeProperty("overflow-"+z.a));else if(h&&Pe()&&!T)for(Ke=h.parentNode;Ke&&Ke!==ae;)Ke._pinOffset&&(te-=Ke._pinOffset,Te-=Ke._pinOffset),Ke=Ke.parentNode;$i&&$i.forEach(function(An){return An.revert(!1,!0)}),S.start=te,S.end=Te,it=rt=ct?jt:Pe(),!T&&!ct&&(it<jt&&Pe(jt),S.scroll.rec=0),S.revert(!1,!0),ln=et(),It&&(Tt=-1,It.restart(!0)),Je=0,r&&k&&(r._initted||Un)&&r.progress()!==Un&&r.progress(Un||0,!0).render(r.time(),!0,!0),(Ze||Xe!==S.progress||T||C||r&&!r._initted)&&(r&&!k&&(r._initted||Xe||r.vars.immediateRender!==!1)&&r.totalProgress(T&&te<-.001&&!Xe?O.utils.normalize(te,Te,0):Xe,!0),S.progress=Ze||(it-te)/_e===Xe?0:Xe),p&&g&&(je._pinOffset=Math.round(S.progress*fn)),Q&&Q.invalidate(),isNaN(Xi)||(Xi-=O.getProperty(P,z.p),Fr-=O.getProperty(vt,z.p),ao(P,z,Xi),ao(ht,z,Xi-(H||0)),ao(vt,z,Fr),ao(gt,z,Fr-(H||0))),Ze&&!ct&&S.update(),f&&!ct&&!wn&&(wn=!0,f(S),wn=!1)}},S.getVelocity=function(){return(Pe()-rt)/(et()-or)*1e3||0},S.endAnimation=function(){nr(S.callbackAnimation),r&&(Q?Q.progress(1):r.paused()?k||nr(r,S.direction<0,1):nr(r,r.reversed()))},S.labelToScroll=function(N){return r&&r.labels&&(te||S.refresh()||te)+r.labels[N]/r.duration()*_e||0},S.getTrailing=function(N){var U=q.indexOf(S),I=S.direction>0?q.slice(0,U).reverse():q.slice(U+1);return(_t(N)?I.filter(function(H){return H.vars.preventOverlaps===N}):I).filter(function(H){return S.direction>0?H.end<=te:H.start>=Te})},S.update=function(N,U,I){if(!(T&&!I&&!N)){var H=ct===!0?jt:S.scroll(),Fe=N?0:(H-te)/_e,J=Fe<0?0:Fe>1?1:Fe||0,Se=S.progress,Ze,Ce,ve,ue,Ft,xe,xt,Xt;if(U&&(rt=it,it=T?Pe():H,x&&(kn=Sn,Sn=r&&!k?r.totalProgress():J)),_&&p&&!Je&&!eo&&Ot&&(!J&&te<H+(H-rt)/(et()-or)*_?J=1e-4:J===1&&Te>H+(H-rt)/(et()-or)*_&&(J=.9999)),J!==Se&&S.enabled){if(Ze=S.isActive=!!J&&J<1,Ce=!!Se&&Se<1,xe=Ze!==Ce,Ft=xe||!!J!=!!Se,S.direction=J>Se?1:-1,S.progress=J,Ft&&!Je&&(ve=J&&!Se?0:J===1?1:Se===1?2:3,k&&(ue=!xe&&re[ve+1]!=="none"&&re[ve+1]||re[ve],Xt=r&&(ue==="complete"||ue==="reset"||ue in r))),L&&(xe||Xt)&&(Xt||d||!r)&&(tt(L)?L(S):S.getTrailing(L).forEach(function(Hn){return Hn.endAnimation()})),k||(Q&&!Je&&!eo?(Q._dp._time-Q._start!==Q._time&&Q.render(Q._dp._time-Q._start),Q.resetTo?Q.resetTo("totalProgress",J,r._tTime/r._tDur):(Q.vars.totalProgress=J,Q.invalidate().restart())):r&&r.totalProgress(J,!!(Je&&(ln||N)))),p){if(N&&g&&(je.style[g+z.os2]=Gi),!V)Mt(ar(Et+fn*J));else if(Ft){if(xt=!N&&J>Se&&Te+1>H&&H+1>=nn(R,z),b)if(!N&&(Ze||xt)){var Ue=vn(p,!0),He=H-te;cu(p,ae,Ue.top+(z===Be?He:0)+Oe,Ue.left+(z===Be?0:He)+Oe)}else cu(p,je);Mi(Ze||xt?Tn:Fn),dn&&J<1&&Ze||Mt(Et+(J===1&&!xt?fn:0))}}x&&!nt.tween&&!Je&&!eo&&It.restart(!0),a&&(xe||v&&J&&(J<1||!Rs))&&Dr(a.targets).forEach(function(Hn){return Hn.classList[Ze||v?"add":"remove"](a.className)}),s&&!k&&!N&&s(S),Ft&&!Je?(k&&(Xt&&(ue==="complete"?r.pause().totalProgress(1):ue==="reset"?r.restart(!0).pause():ue==="restart"?r.restart(!0):r[ue]()),s&&s(S)),(xe||!Rs)&&(u&&xe&&_i(S,u),ge[ve]&&_i(S,ge[ve]),v&&(J===1?S.kill(!1,1):ge[ve]=0),xe||(ve=J===1?1:3,ge[ve]&&_i(S,ge[ve]))),A&&!Ze&&Math.abs(S.getVelocity())>(lr(A)?A:2500)&&(nr(S.callbackAnimation),Q?Q.progress(1):nr(r,ue==="reverse"?1:!J,1))):k&&s&&!Je&&s(S)}if(ui){var Ke=T?H/T.duration()*(T._caScrollDist||0):H;Ir(Ke+(P._isFlipped?1:0)),ui(Ke)}di&&di(-H/T.duration()*(T._caScrollDist||0))}},S.enable=function(N,U){S.enabled||(S.enabled=!0,Ve(R,"resize",cr),G||Ve(R,"scroll",bi),me&&Ve(t,"refreshInit",me),N!==!1&&(S.progress=Xe=0,it=rt=Tt=Pe()),U!==!1&&S.refresh())},S.getTween=function(N){return N&&nt?nt.tween:Q},S.setPositions=function(N,U,I,H){if(T){var Fe=T.scrollTrigger,J=T.duration(),Se=Fe.end-Fe.start;N=Fe.start+Se*N/J,U=Fe.start+Se*U/J}S.refresh(!1,!1,{start:eu(N,I&&!!S._startClamp),end:eu(U,I&&!!S._endClamp)},H),S.update()},S.adjustPinSpacing=function(N){if(De&&N){var U=De.indexOf(z.d)+1;De[U]=parseFloat(De[U])+N+Oe,De[1]=parseFloat(De[1])+N+Oe,Mi(De)}},S.disable=function(N,U){if(N!==!1&&S.revert(!0,!0),S.enabled&&(S.enabled=S.isActive=!1,U||Q&&Q.pause(),jt=0,qe&&(qe.uncache=1),me&&ke(t,"refreshInit",me),It&&(It.pause(),nt.tween&&nt.tween.kill()&&(nt.tween=0)),!G)){for(var I=q.length;I--;)if(q[I].scroller===R&&q[I]!==S)return;ke(R,"resize",cr),G||ke(R,"scroll",bi)}},S.kill=function(N,U){S.disable(N,U),Q&&!U&&Q.kill(),c&&delete _a[c];var I=q.indexOf(S);I>=0&&q.splice(I,1),I===lt&&To>0&&lt--,I=0,q.forEach(function(H){return H.scroller===S.scroller&&(I=1)}),I||ct||(S.scroll.rec=0),r&&(r.scrollTrigger=null,N&&r.revert({kill:!1}),U||r.kill()),ht&&[ht,gt,P,vt].forEach(function(H){return H.parentNode&&H.parentNode.removeChild(H)}),wr===S&&(wr=0),p&&(qe&&(qe.uncache=1),I=0,q.forEach(function(H){return H.pin===p&&I++}),I||(qe.spacer=0)),i.onKill&&i.onKill(S)},q.push(S),S.enable(!1,!1),hn&&hn(S),r&&r.add&&!_e){var oe=S.update;S.update=function(){S.update=oe,K.cache++,te||Te||S.refresh()},O.delayedCall(.01,S.update),_e=.01,te=Te=0}else S.refresh();p&&M1()},t.register=function(i){return Ti||(O=i||ah(),sh()&&window.document&&t.enable(),Ti=sr),Ti},t.defaults=function(i){if(i)for(var r in i)ro[r]=i[r];return ro},t.disable=function(i,r){sr=0,q.forEach(function(s){return s[r?"kill":"disable"](i)}),ke(Z,"wheel",bi),ke(le,"scroll",bi),clearInterval(Jr),ke(le,"touchcancel",en),ke(ae,"touchstart",en),no(ke,le,"pointerdown,touchstart,mousedown",tu),no(ke,le,"pointerup,touchend,mouseup",nu),Fo.kill(),to(ke);for(var o=0;o<K.length;o+=3)io(ke,K[o],K[o+1]),io(ke,K[o],K[o+2])},t.enable=function(){if(Z=window,le=document,Ct=le.documentElement,ae=le.body,O){if(Dr=O.utils.toArray,vr=O.utils.clamp,xa=O.core.context||en,Ds=O.core.suppressOverwrites||en,ol=Z.history.scrollRestoration||"auto",Ca=Z.pageYOffset||0,O.core.globals("ScrollTrigger",t),ae){sr=1,Oi=document.createElement("div"),Oi.style.height="100vh",Oi.style.position="absolute",vh(),P1(),Ae.register(O),t.isTouch=Ae.isTouch,Rn=Ae.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),va=Ae.isTouch===1,Ve(Z,"wheel",bi),rl=[Z,le,Ct,ae],O.matchMedia?(t.matchMedia=function(f){var d=O.matchMedia(),h;for(h in f)d.add(h,f[h]);return d},O.addEventListener("matchMediaInit",function(){ph(),fl()}),O.addEventListener("matchMediaRevert",function(){return mh()}),O.addEventListener("matchMedia",function(){Jn(0,1),ci("matchMedia")}),O.matchMedia().add("(orientation: portrait)",function(){return Ls(),Ls})):console.warn("Requires GSAP 3.11.0 or later"),Ls(),Ve(le,"scroll",bi);var i=ae.hasAttribute("style"),r=ae.style,o=r.borderTopStyle,s=O.core.Animation.prototype,a,c;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=vn(ae),Be.m=Math.round(a.top+Be.sc())||0,ut.m=Math.round(a.left+ut.sc())||0,o?r.borderTopStyle=o:r.removeProperty("border-top-style"),i||(ae.setAttribute("style",""),ae.removeAttribute("style")),Jr=setInterval(ou,250),O.delayedCall(.5,function(){return eo=0}),Ve(le,"touchcancel",en),Ve(ae,"touchstart",en),no(Ve,le,"pointerdown,touchstart,mousedown",tu),no(Ve,le,"pointerup,touchend,mouseup",nu),ga=O.utils.checkPrefix("transform"),Eo.push(ga),Ti=et(),Fo=O.delayedCall(.2,Jn).pause(),Ei=[le,"visibilitychange",function(){var f=Z.innerWidth,d=Z.innerHeight;le.hidden?(Kc=f,Qc=d):(Kc!==f||Qc!==d)&&cr()},le,"DOMContentLoaded",Jn,Z,"load",Jn,Z,"resize",cr],to(Ve),q.forEach(function(f){return f.enable(0,1)}),c=0;c<K.length;c+=3)io(ke,K[c],K[c+1]),io(ke,K[c],K[c+2])}else if(le){var u=function f(){t.enable(),le.removeEventListener("DOMContentLoaded",f)};le.addEventListener("DOMContentLoaded",u)}}},t.config=function(i){"limitCallbacks"in i&&(Rs=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Jr)||(Jr=r)&&setInterval(ou,r),"ignoreMobileResize"in i&&(va=t.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(to(ke)||to(Ve,i.autoRefreshEvents||"none"),ih=(i.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(i,r){var o=pt(i),s=K.indexOf(o),a=ai(o);~s&&K.splice(s,a?6:2),r&&(a?on.unshift(Z,r,ae,r,Ct,r):on.unshift(o,r))},t.clearMatchMedia=function(i){q.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},t.isInViewport=function(i,r,o){var s=(_t(i)?pt(i):i).getBoundingClientRect(),a=s[o?ni:ii]*r||0;return o?s.right-a>0&&s.left+a<Z.innerWidth:s.bottom-a>0&&s.top+a<Z.innerHeight},t.positionInViewport=function(i,r,o){_t(i)&&(i=pt(i));var s=i.getBoundingClientRect(),a=s[o?ni:ii],c=r==null?a/2:r in Vo?Vo[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return o?(s.left+c)/Z.innerWidth:(s.top+c)/Z.innerHeight},t.killAll=function(i){if(q.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),i!==!0){var r=li.killAll||[];li={},r.forEach(function(o){return o()})}},t}();X.version="3.15.0";X.saveStyles=function(t){return t?Dr(t).forEach(function(e){if(e&&e.style){var n=yt.indexOf(e);n>=0&&yt.splice(n,5),yt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),O.core.getCache(e),xa())}}):yt};X.revert=function(t,e){return fl(!t,e)};X.create=function(t,e){return new X(t,e)};X.refresh=function(t){return t?cr(!0):(Ti||X.register())&&Jn(!0)};X.update=function(t){return++K.cache&&yn(t===!0?2:0)};X.clearScrollMemory=gh;X.maxScroll=function(t,e){return nn(t,e?ut:Be)};X.getScrollFunc=function(t,e){return In(pt(t),e?ut:Be)};X.getById=function(t){return _a[t]};X.getAll=function(){return q.filter(function(t){return t.vars.id!=="ScrollSmoother"})};X.isScrolling=function(){return!!Ot};X.snapDirectional=ul;X.addEventListener=function(t,e){var n=li[t]||(li[t]=[]);~n.indexOf(e)||n.push(e)};X.removeEventListener=function(t,e){var n=li[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)};X.batch=function(t,e){var n=[],i={},r=e.interval||.016,o=e.batchMax||1e9,s=function(u,f){var d=[],h=[],p=O.delayedCall(r,function(){f(d,h),d=[],h=[]}).pause();return function(g){d.length||p.restart(!0),d.push(g.trigger),h.push(g),o<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&tt(e[a])&&a!=="onRefreshInit"?s(a,e[a]):e[a];return tt(o)&&(o=o(),Ve(X,"refresh",function(){return o=e.batchMax()})),Dr(t).forEach(function(c){var u={};for(a in i)u[a]=i[a];u.trigger=c,n.push(X.create(u))}),n};var fu=function(e,n,i,r){return n>r?e(r):n<0&&e(0),i>r?(r-n)/(i-n):i<0?n/(n-i):1},Os=function t(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(Ae.isTouch?" pinch-zoom":""):"none",e===Ct&&t(ae,n)},lo={auto:1,scroll:1},k1=function(e){var n=e.event,i=e.target,r=e.axis,o=(n.changedTouches?n.changedTouches[0]:n).target,s=o._gsap||O.core.getCache(o),a=et(),c;if(!s._isScrollT||a-s._isScrollT>2e3){for(;o&&o!==ae&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(lo[(c=Dt(o)).overflowY]||lo[c.overflowX]));)o=o.parentNode;s._isScroll=o&&o!==i&&!ai(o)&&(lo[(c=Dt(o)).overflowY]||lo[c.overflowX]),s._isScrollT=a}(s._isScroll||r==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},yh=function(e,n,i,r){return Ae.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:r=r&&k1,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&Ve(le,Ae.eventTypes[0],hu,!1,!0)},onDisable:function(){return ke(le,Ae.eventTypes[0],hu,!0)}})},V1=/(input|label|select|textarea)/i,du,hu=function(e){var n=V1.test(e.target.tagName);(n||du)&&(e._gsapAllow=!0,du=n)},U1=function(e){Zn(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,i=n.normalizeScrollX,r=n.momentum,o=n.allowNestedScroll,s=n.onRelease,a,c,u=pt(e.target)||Ct,f=O.core.globals().ScrollSmoother,d=f&&f.get(),h=Rn&&(e.content&&pt(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=In(u,Be),g=In(u,ut),C=1,_=(Ae.isTouch&&Z.visualViewport?Z.visualViewport.scale*Z.visualViewport.width:Z.outerWidth)/Z.innerWidth,y=0,m=tt(r)?function(){return r(a)}:function(){return r||2.8},v,x,b=yh(u,e.type,!0,o),w=function(){return x=!1},T=en,A=en,L=function(){c=nn(u,Be),A=vr(Rn?1:0,c),i&&(T=vr(0,nn(u,ut))),v=ri},z=function(){h._gsap.y=ar(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},k=function(){if(x){requestAnimationFrame(w);var W=ar(a.deltaY/2),ee=A(p.v-W);if(h&&ee!==p.v+p.offset){p.offset=ee-p.v;var S=ar((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+S+", 0, 1)",h._gsap.y=S+"px",p.cacheID=K.cache,yn()}return!0}p.offset&&z(),x=!0},R,ie,G,V,ge=function(){L(),R.isActive()&&R.vars.scrollY>c&&(p()>c?R.progress(1)&&p(c):R.resetTo("scrollY",c))};return h&&O.set(h,{y:"+=0"}),e.ignoreCheck=function(re){return Rn&&re.type==="touchmove"&&k()||C>1.05&&re.type!=="touchstart"||a.isGesturing||re.touches&&re.touches.length>1},e.onPress=function(){x=!1;var re=C;C=ar((Z.visualViewport&&Z.visualViewport.scale||1)/_),R.pause(),re!==C&&Os(u,C>1.01?!0:i?!1:"x"),ie=g(),G=p(),L(),v=ri},e.onRelease=e.onGestureStart=function(re,W){if(p.offset&&z(),!W)V.restart(!0);else{K.cache++;var ee=m(),S,me;i&&(S=g(),me=S+ee*.05*-re.velocityX/.227,ee*=fu(g,S,me,nn(u,ut)),R.vars.scrollX=T(me)),S=p(),me=S+ee*.05*-re.velocityY/.227,ee*=fu(p,S,me,nn(u,Be)),R.vars.scrollY=A(me),R.invalidate().duration(ee).play(.01),(Rn&&R.vars.scrollY>=c||S>=c-1)&&O.to({},{onUpdate:ge,duration:ee})}s&&s(re)},e.onWheel=function(){R._ts&&R.pause(),et()-y>1e3&&(v=0,y=et())},e.onChange=function(re,W,ee,S,me){if(ri!==v&&L(),W&&i&&g(T(S[2]===W?ie+(re.startX-re.x):g()+W-S[1])),ee){p.offset&&z();var an=me[2]===ee,Cn=an?G+re.startY-re.y:p()+ee-me[1],Tt=A(Cn);an&&Cn!==Tt&&(G+=Tt-Cn),p(Tt)}(ee||W)&&yn()},e.onEnable=function(){Os(u,i?!1:"x"),X.addEventListener("refresh",ge),Ve(Z,"resize",ge),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){Os(u,!0),ke(Z,"resize",ge),X.removeEventListener("refresh",ge),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ae(e),a.iOS=Rn,Rn&&!p()&&p(1),Rn&&O.ticker.add(en),V=a._dc,R=O.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:xh(p,p(),function(){return R.pause()})},onUpdate:yn,onComplete:V.vars.onComplete}),a};X.sort=function(t){if(tt(t))return q.sort(t);var e=Z.pageYOffset||0;return X.getAll().forEach(function(n){return n._sortY=n.trigger?e+n.trigger.getBoundingClientRect().top:n.start+Z.innerHeight}),q.sort(t||function(n,i){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};X.observe=function(t){return new Ae(t)};X.normalizeScroll=function(t){if(typeof t>"u")return at;if(t===!0&&at)return at.enable();if(t===!1){at&&at.kill(),at=t;return}var e=t instanceof Ae?t:U1(t);return at&&at.target===e.target&&at.kill(),ai(e.target)&&(at=e),e};X.core={_getVelocityProp:pa,_inputObserver:yh,_scrollers:K,_proxies:on,bridge:{ss:function(){Ot||ci("scrollStart"),Ot=et()},ref:function(){return Je}}};ah()&&O.registerPlugin(X);function Fi({children:t,delay:e=0,duration:n=.8,as:i="div",className:r="",style:o={}}){const s=E.useRef(null),a=E.useRef(null);return E.useEffect(()=>{const c=new IntersectionObserver(([u])=>{u.isIntersecting&&(we.to(a.current,{y:0,duration:n,delay:e,ease:"power3.out"}),c.disconnect())},{threshold:.1});return s.current&&c.observe(s.current),()=>c.disconnect()},[e,n]),l.jsx(i,{ref:s,className:r,style:{overflow:"hidden",...o},children:l.jsx("div",{ref:a,style:{transform:"translateY(100%)"},children:t})})}function Ko({children:t,color:e="var(--color-technical)",className:n="",style:i={}}){return l.jsx("span",{className:`text-technical ${n}`,style:{color:e,...i},children:t})}function _h({children:t,className:e="",style:n={},spotlightColor:i="rgba(0, 255, 204, 0.12)",borderColor:r="rgba(0, 255, 204, 0.4)",radius:o=360,enableTilt:s=!0,onClick:a,onMouseEnter:c,onMouseLeave:u,...f}){const d=E.useRef(null),[h,p]=E.useState({x:0,y:0}),[g,C]=E.useState({x:0,y:0}),[_,y]=E.useState(0),m=B(L=>L.soundEnabled),v=L=>{if(!d.current)return;const z=d.current.getBoundingClientRect(),k=L.clientX-z.left,R=L.clientY-z.top;if(p({x:k,y:R}),s){const ie=(R/z.height-.5)*-8,G=(k/z.width-.5)*8;C({x:ie,y:G})}},x=()=>y(1),b=()=>{y(0),C({x:0,y:0})},w=L=>{y(1),m&&Rt.playHover(.025),c&&c(L)},T=L=>{y(0),C({x:0,y:0}),u&&u(L)},A=L=>{m&&Rt.playClick(.08),a&&a(L)};return l.jsxs("div",{ref:d,onMouseMove:v,onMouseEnter:w,onMouseLeave:T,onFocus:x,onBlur:b,onClick:A,className:`glass-panel card-perspective-wrap ${e}`,style:{position:"relative",overflow:"hidden",backgroundColor:"rgba(8, 8, 14, 0.75)",border:"1px solid rgba(255, 255, 255, 0.07)",borderRadius:"16px",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",transform:s&&_>0?`perspective(1000px) rotateX(${g.x.toFixed(2)}deg) rotateY(${g.y.toFixed(2)}deg) translateZ(6px)`:"perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",transition:_>0?"transform 0.12s ease-out, border-color 0.25s ease":"transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease",willChange:"transform",...n},...f,children:[l.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",opacity:_,transition:"opacity 0.35s ease",background:`radial-gradient(${o}px circle at ${h.x}px ${h.y}px, ${i}, transparent 75%)`,zIndex:0}}),l.jsx("div",{style:{position:"absolute",inset:-1,borderRadius:"inherit",pointerEvents:"none",opacity:_,transition:"opacity 0.35s ease",border:"1px solid transparent",background:`radial-gradient(${o*.7}px circle at ${h.x}px ${h.y}px, ${r}, transparent 80%) border-box`,WebkitMask:"linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",WebkitMaskComposite:"destination-out",maskComposite:"exclude",zIndex:1}}),l.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",opacity:_*.2,background:`radial-gradient(ellipse at ${h.x}px ${h.y}px, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`,zIndex:1,transition:"opacity 0.2s ease"}}),l.jsx("div",{style:{position:"relative",zIndex:2,height:"100%"},children:t})]})}function H1({children:t,className:e="",style:n={},glowColor:i="#00ffcc"}){return l.jsxs("div",{className:`lamp-container ${e}`,style:n,children:[l.jsx("div",{className:"lamp-glow",style:{background:`conic-gradient(from 180deg at 50% 0%, ${i} 0deg, #8a2be2 180deg, #00f2fe 360deg)`}}),l.jsx("div",{className:"lamp-line",style:{background:`linear-gradient(90deg, transparent 0%, ${i} 50%, transparent 100%)`,boxShadow:`0 0 24px ${i}, 0 0 48px ${i}`}}),l.jsx("div",{style:{position:"relative",zIndex:1,marginTop:"2.5rem",textAlign:"center"},children:t})]})}function Y1({value:t,direction:e="up",delay:n=0,decimalPlaces:i=0,prefix:r="",suffix:o="",className:s="",style:a={}}){const[c,u]=E.useState(e==="down"?t:0),f=E.useRef(null),d=E.useRef(!1);return E.useEffect(()=>{const h=new IntersectionObserver(p=>{p[0].isIntersecting&&!d.current&&(d.current=!0,setTimeout(()=>{const g=performance.now(),C=1600,_=y=>{const m=y-g,v=Math.min(m/C,1),x=1-Math.pow(1-v,3),b=e==="down"?t*(1-x):t*x;u(b),v<1?requestAnimationFrame(_):u(t)};requestAnimationFrame(_)},n))},{threshold:.2});return f.current&&h.observe(f.current),()=>h.disconnect()},[t,e,n]),l.jsxs("span",{ref:f,className:s,style:{display:"inline-block",fontVariantNumeric:"tabular-nums",...a},children:[r,c.toFixed(i),o]})}const mu="01#_<>[]*!~%&@$§+±=";function Ch({text:t,speed:e=40,maxIterations:n=12,revealDelay:i=0,sequential:r=!0,className:o="",style:s={},onHoverDecrypt:a=!0}){const[c,u]=E.useState(t),[f,d]=E.useState(!1),h=E.useRef(!1),p=()=>{if(h.current)return;h.current=!0;let g=0;const C=t.split(""),_=C.length,y=setInterval(()=>{u(()=>C.map((m,v)=>{if(m===" ")return" ";if(r){const b=g/n*_;if(v<b)return m}else if(g>=n)return m;return mu[Math.floor(Math.random()*mu.length)]}).join("")),g+=1,g>n&&(clearInterval(y),u(t),h.current=!1)},e)};return E.useEffect(()=>{const g=setTimeout(()=>{p()},i);return()=>clearTimeout(g)},[t,i]),l.jsx("span",{className:o,style:{display:"inline-block",fontVariantNumeric:"tabular-nums",...s},onMouseEnter:()=>{a&&(d(!0),p())},onMouseLeave:()=>d(!1),children:c})}we.registerPlugin(X);const G1=[{numeric:!0,prefix:"+",val:340,suffix:"%",label:"ENGAGEMENT DEPTH",desc:"Visitors inspect interactive 3D assets 3.4x longer than static 2D imagery."},{numeric:!0,prefix:"",val:60,suffix:" FPS",label:"ZERO-LATENCY BUFFER",desc:"Hardware-accelerated WebGL pipeline tailored for desktop and mobile."},{numeric:!1,display:"1:1",label:"PHYSICAL ACCURACY",desc:"Photometric PBR textures calibrated to physical real-world studio lights."}];function W1(){const t=E.useRef(null);return E.useEffect(()=>{t.current&&X.create({trigger:t.current,start:"top 30%",end:"bottom 20%",animation:we.to(t.current,{opacity:.98,ease:"power2.inOut"}),scrub:!0})},[]),l.jsxs("section",{id:"statement",ref:t,style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"8rem 6%",position:"relative",overflow:"hidden",backgroundColor:"#030305"},children:[l.jsx("div",{className:"ambient-glow-cyan",style:{top:"15%",left:"15%"}}),l.jsx("div",{className:"ambient-glow-violet",style:{bottom:"15%",right:"15%"}}),l.jsxs(H1,{glowColor:"#00ffcc",children:[l.jsxs("div",{className:"shimmer-badge",style:{marginBottom:"2.5rem"},children:[l.jsx("span",{className:"status-beacon"}),l.jsx(Ch,{text:"MANIFESTO // 01",speed:30})]}),l.jsxs("div",{style:{textAlign:"center",maxWidth:"1080px",marginBottom:"2rem"},children:[l.jsx(Fi,{duration:1.2,children:l.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.8rem, 6.5vw, 6.5rem)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.05,margin:0},className:"text-gradient-chrome",children:"WEBSITES SHOULD BE EXPLORED."})}),l.jsx(Fi,{duration:1.2,delay:.2,children:l.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.8rem, 6.5vw, 6.5rem)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.05,margin:"0.5rem 0 0 0"},className:"text-gradient-cyan",children:"NOT JUST SCROLLED."})}),l.jsx("div",{style:{marginTop:"2rem",maxWidth:"640px",margin:"2rem auto 0 auto"},children:l.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"clamp(1rem, 1.2vw, 1.25rem)",lineHeight:1.75,color:"var(--color-white-dim)"},children:"Flat grids and static PNGs conceal the craftsmanship of true design. INZU crafts spatial web experiences that invite touch, rotation, and micro-discovery."})})]})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.5rem",width:"100%",maxWidth:"1080px",position:"relative",zIndex:2,marginTop:"2rem"},children:G1.map((e,n)=>l.jsxs(_h,{spotlightColor:"rgba(0, 255, 204, 0.16)",borderColor:"rgba(0, 255, 204, 0.45)",enableTilt:!0,style:{padding:"2.25rem"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[l.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.2rem, 3.5vw, 3rem)",fontWeight:800,color:"#ffffff",lineHeight:1,textShadow:"0 0 20px rgba(0, 255, 204, 0.25)"},children:e.numeric?l.jsx(Y1,{value:e.val,prefix:e.prefix,suffix:e.suffix,delay:n*150}):e.display}),l.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"9px",color:"#00ffcc",padding:"2px 8px",borderRadius:"4px",background:"rgba(0, 255, 204, 0.1)",border:"1px solid rgba(0, 255, 204, 0.25)"},children:["0",n+1]})]}),l.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:"0.12em",color:"#e2e8f0",marginTop:"1.5rem",marginBottom:"0.5rem"},children:e.label}),l.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"13px",lineHeight:1.6,color:"var(--color-white-dim)",margin:0},children:e.desc})]},n))})]})}function $1({progress:t=0}){const e=E.useRef();wt((a,c)=>{e.current&&(e.current.rotation.y+=c*.3)});const n=de.lerp(.2,.8,t),i=de.lerp(.1,0,t),r=de.lerp(.8,0,t),o=de.lerp(1,.3,t),s=t>.5;return l.jsxs("group",{ref:e,children:[l.jsxs("mesh",{children:[l.jsx("icosahedronGeometry",{args:[1.5,4]}),l.jsx("meshPhysicalMaterial",{color:s?"#333333":"#e8e4e0",roughness:n,metalness:i,clearcoat:r,transparent:!0,opacity:o,wireframe:s})]}),s&&l.jsxs("mesh",{scale:[1.02,1.02,1.02],children:[l.jsx("icosahedronGeometry",{args:[1.5,4]}),l.jsx("meshBasicMaterial",{color:"#555555",wireframe:!0,transparent:!0,opacity:.5})]})]})}function bh({className:t="",size:e=200,duration:n=12,anchor:i=90,borderWidth:r=1.5,colorFrom:o="#00ffcc",colorTo:s="#3912ff",delay:a=0}){return l.jsx("div",{style:{"--size":e,"--duration":n,"--anchor":i,"--border-width":r,"--color-from":o,"--color-to":s,"--delay":`-${a}s`},className:`pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))] ${t}`})}function X1(){const[t,e]=E.useState(.2),n=B(o=>o.setCursor),i=B(o=>o.resetCursor);B(o=>o.soundEnabled);const r=[{label:"SURFACE PBR",value:.05,desc:"Full photorealistic physical material"},{label:"HYBRID DISSECTION",value:.5,desc:"Simultaneous texture and wireframe"},{label:"TOPOLOGY MESH",value:.95,desc:"Barycentric geometric polygon wireframe"}];return l.jsxs("section",{id:"surface-structure",style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"8rem 6%",position:"relative",zIndex:2,backgroundColor:"#030305",borderTop:"1px solid rgba(255, 255, 255, 0.05)"},children:[l.jsx("div",{className:"ambient-glow-cyan",style:{top:"30%",left:"50%",transform:"translateX(-50%)"}}),l.jsxs("div",{style:{textAlign:"center",marginBottom:"3.5rem",maxWidth:"780px"},children:[l.jsxs("div",{className:"shimmer-badge",style:{marginBottom:"1.25rem"},children:[l.jsx("span",{className:"status-beacon"}),l.jsx(Ch,{text:"CHAMBER 02 // VOLUMETRIC DISSECTION",speed:30})]}),l.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.2rem, 5vw, 4.5rem)",fontWeight:800,letterSpacing:"-0.03em",margin:"0 0 1rem 0"},className:"text-gradient-chrome",children:"FROM SURFACE TO STRUCTURE."}),l.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"clamp(0.95rem, 1.2vw, 1.15rem)",lineHeight:1.6,color:"var(--color-white-dim)",margin:0},children:"Interactive material deconstruction. Seamlessly morph between photorealistic physical surfaces and raw topological polygon topology."})]}),l.jsxs(_h,{style:{width:"100%",maxWidth:"680px",height:"clamp(320px, 45vh, 460px)",position:"relative",marginBottom:"2.5rem",backgroundColor:"rgba(6, 6, 10, 0.85)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"24px",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 255, 204, 0.1)"},children:[l.jsx(bh,{colorFrom:"#00ffcc",colorTo:"#7928ca",duration:14}),l.jsxs(wa,{camera:{position:[0,0,4.2],fov:45},gl:{antialias:!0,alpha:!0},style:{width:"100%",height:"100%",borderRadius:"inherit"},children:[l.jsx("ambientLight",{intensity:.6}),l.jsx("directionalLight",{position:[4,5,5],intensity:2.8,color:"#f0ece8"}),l.jsx("pointLight",{position:[-4,-3,-2],intensity:1.5,color:"#00ffcc"}),l.jsx($1,{progress:t})]}),l.jsx("div",{style:{position:"absolute",top:"16px",left:"20px",zIndex:3},children:l.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"10px",color:"var(--color-white-ghost)"},children:"INSP // 002 // TOPOLOGY"})}),l.jsx("div",{style:{position:"absolute",top:"16px",right:"20px",zIndex:3},children:l.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"10px",color:"#00ffcc",backgroundColor:"rgba(0, 255, 204, 0.1)",padding:"2px 8px",borderRadius:"4px",border:"1px solid rgba(0, 255, 204, 0.25)"},children:"REALTIME WEBGL"})}),l.jsx("div",{style:{position:"absolute",bottom:"16px",left:"20px",zIndex:3},children:l.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"10px",color:"#888"},children:["SURFACE: ",l.jsxs("strong",{style:{color:"#ffffff"},children:[100-Math.round(t*100),"%"]})]})}),l.jsx("div",{style:{position:"absolute",bottom:"16px",right:"20px",zIndex:3},children:l.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"10px",color:"#888"},children:["WIREFRAME: ",l.jsxs("strong",{style:{color:"#00ffcc"},children:[Math.round(t*100),"%"]})]})})]}),l.jsx("div",{style:{marginBottom:"2rem",display:"flex",justifyContent:"center"},children:l.jsx(Bd,{options:r.map(o=>({label:o.label,value:o.value})),value:r.reduce((o,s)=>Math.abs(s.value-t)<Math.abs(o.value-t)?s:o).value,onChange:o=>e(o),size:"md"})}),l.jsxs("div",{style:{width:"100%",maxWidth:"580px",display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[l.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",fontFamily:"var(--font-mono)",fontSize:"11px"},children:[l.jsx("span",{style:{color:t<.5?"#ffffff":"var(--color-white-ghost)"},children:"[ 0.0 // PBR SURFACE ]"}),l.jsx("span",{style:{color:t>=.5?"#00ffcc":"var(--color-white-ghost)"},children:"[ 1.0 // WIREFRAME MESH ]"})]}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t,onChange:o=>e(parseFloat(o.target.value)),onMouseEnter:()=>n("explore","SCRUB"),onMouseLeave:i,"aria-label":"Surface to structure material slider",style:{width:"100%",appearance:"none",WebkitAppearance:"none",background:"transparent",cursor:"none"}}),l.jsx("style",{children:`
          input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;
            border-radius: 2px;
            background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #00ffcc 100%);
          }
          input[type=range]::-webkit-slider-thumb {
            appearance: none;
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #ffffff;
            border: 2px solid #00ffcc;
            box-shadow: 0 0 15px #00ffcc;
            margin-top: -8px;
            cursor: none;
            transition: transform 0.15s ease;
          }
          input[type=range]::-webkit-slider-thumb:hover {
            transform: scale(1.2);
          }
          input[type=range]:focus {
            outline: none;
          }
        `}),l.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"11px",color:"#00ffcc",letterSpacing:"0.1em"},children:["CURRENT INTERPOLATION // ",Math.round(t*100),"%"]})]})]})}function Ri({children:t,className:e="",spotlightColor:n="rgba(57, 18, 255, 0.3)",borderColor:i="rgba(255, 255, 255, 0.1)",borderGlowColor:r="rgba(0, 255, 204, 0.35)",style:o={},onClick:s,...a}){const c=E.useRef(null),[u,f]=E.useState({x:-1e3,y:-1e3}),[d,h]=E.useState(!1),p=g=>{if(!c.current)return;const C=c.current.getBoundingClientRect();f({x:g.clientX-C.left,y:g.clientY-C.top})};return l.jsxs("div",{ref:c,onMouseMove:p,onMouseEnter:()=>h(!0),onMouseLeave:()=>{h(!1),f({x:-1e3,y:-1e3})},onClick:s,className:`group relative overflow-hidden rounded-2xl border bg-black/40 backdrop-blur-xl transition-all duration-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.01] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_30px_-10px_rgba(0,255,204,0.15)] ${e}`,style:{borderColor:d?r:i,...o},...a,children:[l.jsx("div",{className:"pointer-events-none absolute -inset-px transition-opacity duration-300",style:{opacity:d?1:0,background:`radial-gradient(450px circle at ${u.x}px ${u.y}px, ${n}, transparent 65%)`}}),l.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300",style:{opacity:d?1:0,border:"1px solid transparent",background:`radial-gradient(280px circle at ${u.x}px ${u.y}px, rgba(0, 255, 204, 0.4), transparent 60%) border-box`,WebkitMask:"linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",WebkitMaskComposite:"xor",maskComposite:"exclude"}}),l.jsx("div",{className:"relative z-10 h-full w-full",children:t})]})}const q1=[{id:"001",title:"HOROLOGY TIMEPIECE",category:"PRECISION WATCHMAKING",tech:"WEBGL 2.0 / PBR SHADERS",year:"2026",status:"ACTIVE ARTIFACT",desc:"Micro-mechanical tourbillon assembly with photorealistic anti-reflective sapphire crystal refraction and gear mechanics.",span:"md:col-span-8"},{id:"002",title:"AERODYNAMIC CONCEPT",category:"AUTOMOTIVE DIGITAL TWIN",tech:"RAYMARCHED OPTICS",year:"2026",status:"COMPLETED",desc:"Carbon composite surface curvature with dynamic environment reflections and grazing Fresnel iridescence.",span:"md:col-span-4"},{id:"003",title:"SYNTHETIC MONARCH",category:"HAUTE COUTURE 3D",tech:"PHYSICS CLOTH / DRAPE",year:"2026",status:"LIVE EXHIBIT",desc:"The celestial monarch figure merging 1890 Victorian shirt, pleated trousers, and diesel white runners.",span:"md:col-span-4"},{id:"004",title:"SPATIAL VOID ARCHITECTURE",category:"BRUTALIST SPATIAL",tech:"VOLUMETRIC FOG PARTICLES",year:"2026",status:"RESEARCH LAB",desc:"Unreal-scale monolithic architectural installation with real-time volumetric light scattering and acoustics.",span:"md:col-span-8"},{id:"005",title:"NEURAL HARDWARE INTERFACE",category:"CONSUMER TECHNOLOGY",tech:"EXPLODED CAD ASSEMBLY",year:"2026",status:"COMMISSIONED",desc:"Exploded internal chassis visualizing titanium heat-pipes, battery cells, and silicon substrate architecture.",span:"md:col-span-6"},{id:"006",title:"CRYSTALLINE COLLECTIBLE",category:"DIGITAL MUSEUM PIECE",tech:"REFRACTION DISPERSION",year:"2026",status:"VAULT 01",desc:"Limited-edition physical artifact scanned and preserved forever as an interactive 60fps holographic asset.",span:"md:col-span-6"}];function Z1(){const t=B(n=>n.setCursor),e=B(n=>n.resetCursor);return l.jsxs("section",{id:"portfolio",className:"relative z-10 min-h-screen px-6 md:px-12 lg:px-20 py-32 border-t border-white/10",style:{backgroundColor:"rgba(3, 3, 6, 0.75)",backdropFilter:"blur(20px)"},children:[l.jsxs("div",{className:"mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[l.jsx("span",{className:"h-2 w-2 rounded-full bg-scan animate-pulse"}),l.jsx(Ko,{color:"#00ffcc",children:"03 // COMMISSIONED DIGITAL OBJECTS"})]}),l.jsx(Fi,{children:l.jsx("h2",{className:"font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white",children:"CURATED ARTIFACTS"})})]}),l.jsx("div",{className:"font-mono text-xs text-white/50 tracking-wider uppercase",children:"06 FLAGSHIP EXPERIENCES // INTERACTIVE 3D"})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-6",children:q1.map(n=>l.jsxs(Ri,{className:`${n.span} p-8 md:p-10 flex flex-col justify-between group cursor-none min-h-[300px]`,glowColor:"rgba(57, 18, 255, 0.28)",onMouseEnter:()=>t("explore","INSPECT"),onMouseLeave:e,children:[l.jsxs("div",{className:"flex items-center justify-between mb-8",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"font-mono text-xs font-bold text-scan",children:n.id}),l.jsx("span",{className:"h-3 w-[1px] bg-white/20"}),l.jsx("span",{className:"font-mono text-[10px] text-white/50 uppercase tracking-wider",children:n.category})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[9px] text-white/60 border border-white/10",children:n.year}),l.jsx("div",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 group-hover:border-scan group-hover:bg-scan group-hover:text-black",children:l.jsx(p1,{size:13})})]})]}),l.jsxs("div",{className:"my-auto py-4",children:[l.jsx("h3",{className:"font-display text-2xl md:text-3xl font-bold text-white uppercase mb-3 transition-colors duration-200 group-hover:text-scan",children:n.title}),l.jsx("p",{className:"font-body text-xs md:text-sm text-white/60 leading-relaxed max-w-xl",children:n.desc})]}),l.jsxs("div",{className:"flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] text-white/40",children:[l.jsx("span",{children:n.tech}),l.jsx("span",{className:"text-scan",children:n.status})]})]},n.id))})]})}function K1({children:t,className:e="",containerClassName:n="",borderWidth:i=1.5,duration:r=8,gradient:o="conic-gradient(from 0deg at 50% 50%, #00ffcc 0deg, #3912ff 120deg, #2f0000 240deg, #00ffcc 360deg)",...s}){return l.jsxs("div",{className:`relative p-[1.5px] overflow-hidden rounded-2xl ${n}`,...s,children:[l.jsx("div",{className:"absolute inset-[-100%] animate-[spin_8s_linear_infinite]",style:{background:o,animationDuration:`${r}s`}}),l.jsx("div",{className:`relative rounded-2xl bg-black/85 backdrop-blur-2xl ${e}`,children:t})]})}function Q1(){return B(t=>t.setCursor),B(t=>t.resetCursor),l.jsxs("section",{id:"features",className:"relative z-10 min-h-screen px-6 md:px-12 lg:px-20 py-28",children:[l.jsxs("div",{className:"mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[l.jsx("span",{className:"h-2 w-2 rounded-full bg-scan animate-pulse"}),l.jsx(Ko,{color:"#00ffcc",children:"04 // THE CAPABILITY MATRIX"})]}),l.jsx(Fi,{children:l.jsx("h2",{className:"font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white",children:"BENTO LAB ARCHITECTURE"})})]}),l.jsx("p",{className:"max-w-md font-mono text-xs text-white/50 tracking-wider uppercase leading-relaxed",children:"Proprietary WebGL rendering engine with zero-runtime latency, physically accurate material optics, and cinematic shader choreography."})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-6",children:[l.jsxs(Ri,{className:"md:col-span-8 p-8 md:p-10 flex flex-col justify-between min-h-[380px]",glowColor:"rgba(0, 255, 204, 0.25)",borderColor:"rgba(0, 255, 204, 0.2)",children:[l.jsx(bh,{size:280,duration:12,colorFrom:"#00ffcc",colorTo:"#3912ff"}),l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"rounded-full bg-scan/10 border border-scan/30 px-2.5 py-0.5 font-mono text-[10px] text-scan",children:"CORE SYSTEM 01"}),l.jsx("span",{className:"font-mono text-[10px] text-white/40",children:"GLSL / THREE.JS"})]}),l.jsx(h1,{size:18,className:"text-scan"})]}),l.jsxs("div",{className:"my-6 max-w-xl",children:[l.jsx("h3",{className:"font-display text-2xl md:text-4xl font-semibold text-white uppercase mb-3",children:"SUBSURFACE OPTICAL SCATTERING"}),l.jsx("p",{className:"font-body text-sm text-white/70 leading-relaxed",children:"We reconstruct fabric weave, metallic clearcoat refractions, and micro-surface roughness using custom PBR shader pipelines, eliminating the boundary between physical artifact and digital twin."})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-4 border-t border-white/10 pt-4 font-mono text-[10px]",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-white/40 block",children:"DRAW CALLS"}),l.jsx("span",{className:"text-scan font-bold",children:"1 BATCH PASS"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-white/40 block",children:"SHADOW MAP"}),l.jsx("span",{className:"text-white font-bold",children:"2048 CASCADE"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-white/40 block",children:"FPS TARGET"}),l.jsx("span",{className:"text-[#3912ff] font-bold",children:"60–120 BUFFER"})]})]})]}),l.jsxs(K1,{containerClassName:"md:col-span-4",className:"p-8 flex flex-col justify-between h-full min-h-[380px]",duration:9,gradient:"conic-gradient(from 180deg at 50% 50%, #3912ff 0deg, #00ffcc 180deg, #3912ff 360deg)",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[10px] text-white/70 border border-white/20",children:"LENIS + GSAP"}),l.jsx(_1,{size:18,className:"text-white/60"})]}),l.jsxs("div",{className:"my-4",children:[l.jsx("h4",{className:"font-display text-xl md:text-2xl font-bold text-white uppercase mb-2",children:"INERTIA SCROLL CHOREOGRAPHY"}),l.jsx("p",{className:"font-body text-xs text-white/60 leading-relaxed",children:"Synchronized single-RAF rendering loop combining smooth exponential wheel inertia with GSAP ScrollTrigger scrubbing."})]}),l.jsxs("div",{className:"border-t border-white/10 pt-3 font-mono text-[10px] text-white/50 flex justify-between",children:[l.jsx("span",{children:"SMOOTH WHEEL: ON"}),l.jsx("span",{className:"text-scan",children:"ZERO JITTER"})]})]}),l.jsxs(Ri,{className:"md:col-span-4 p-8 flex flex-col justify-between min-h-[320px]",glowColor:"rgba(47, 0, 0, 0.4)",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"font-mono text-[10px] text-[#ff0055]",children:"EXPERIMENT 03"}),l.jsx(Ud,{size:18,className:"text-white/40"})]}),l.jsxs("div",{className:"my-4",children:[l.jsx("h4",{className:"font-display text-xl font-semibold text-white uppercase mb-2",children:"CRIMSON VOID GRADIENT"}),l.jsx("p",{className:"font-body text-xs text-white/60 leading-relaxed",children:"Simulated 3D sphere raymarch with film grain noise and harmonic frequency perturbation (#2f0000 / #3912ff / #000000)."})]}),l.jsxs("div",{className:"border-t border-white/10 pt-3 font-mono text-[10px] text-white/40 flex justify-between",children:[l.jsx("span",{children:"U_FREQUENCY: 5.5"}),l.jsx("span",{className:"text-white/80",children:"U_SPEED: 0.5"})]})]}),l.jsxs(Ri,{className:"md:col-span-4 p-8 flex flex-col justify-between min-h-[320px]",glowColor:"rgba(57, 18, 255, 0.3)",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"font-mono text-[10px] text-scan",children:"PHYSICS 04"}),l.jsx(b1,{size:18,className:"text-scan"})]}),l.jsxs("div",{className:"my-4",children:[l.jsx("h4",{className:"font-display text-xl font-semibold text-white uppercase mb-2",children:"COUTURE DRAPE DYNAMICS"}),l.jsx("p",{className:"font-body text-xs text-white/60 leading-relaxed",children:"Harmonic wave vertex displacement simulating weighted Victorian silk drape under low gravity parameters."})]}),l.jsxs("div",{className:"border-t border-white/10 pt-3 font-mono text-[10px] text-white/40 flex justify-between",children:[l.jsx("span",{children:"MASS // 0.82KG"}),l.jsx("span",{className:"text-scan",children:"DAMPING // 0.94"})]})]}),l.jsxs(Ri,{className:"md:col-span-4 p-8 flex flex-col justify-between min-h-[320px]",glowColor:"rgba(255, 255, 255, 0.15)",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"font-mono text-[10px] text-white/50",children:"CAD PIPELINE"}),l.jsx(x1,{size:18,className:"text-white/40"})]}),l.jsxs("div",{className:"my-4",children:[l.jsx("h4",{className:"font-display text-xl font-semibold text-white uppercase mb-2",children:"PRECISION RETOPOLOGY"}),l.jsx("p",{className:"font-body text-xs text-white/60 leading-relaxed",children:"Micro-geometry decimated into clean quad-dominant topological meshes ready for 120fps mobile WebGL rendering."})]}),l.jsxs("div",{className:"border-t border-white/10 pt-3 font-mono text-[10px] text-white/40 flex justify-between",children:[l.jsx("span",{children:"DRACO COMPRESSION"}),l.jsx("span",{className:"text-white/80",children:"OPTIMIZED"})]})]})]})]})}function J1(){B(e=>e.setCursor),B(e=>e.resetCursor);const t=[{num:"01",title:"OBSESSED WITH DETAIL",body:"Every micro-polygon, grazing Fresnel curve, and shadow falloff is calibrated to mirror physical materiality."},{num:"02",title:"TECHNICAL + CREATIVE",body:"Creative direction harmonized with hardcore GLSL shader optimization and single-batch rendering pipelines."},{num:"03",title:"PRODUCTS DESERVE INTERACTION",body:"Flat photography flattens desire. When visitors explore an object in spatial 3D, memorability increases tenfold."},{num:"04",title:"THE WEB IS A CANVAS",body:"We refuse cookie-cutter agency templates. We design custom virtual universes tailored to individual brand mythologies."}];return l.jsxs("section",{id:"about",className:"relative z-10 min-h-screen px-6 md:px-12 lg:px-20 py-28",children:[l.jsxs("div",{className:"mb-20 max-w-4xl",children:[l.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[l.jsx("span",{className:"h-2 w-2 rounded-full bg-scan animate-pulse"}),l.jsx(Ko,{color:"#00ffcc",children:"06 // STUDIO PHILOSOPHY & CRAFT"})]}),l.jsx(Fi,{children:l.jsx("h2",{className:"font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#f2f0ea]",children:"WHO BUILDS THIS?"})}),l.jsx("p",{className:"mt-6 font-body text-base md:text-xl text-white/70 leading-relaxed font-light max-w-2xl",children:"INZU is an independent creative development practice at the intersection of haute couture, computational geometry, and experimental WebGL storytelling."})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-16",children:t.map(e=>l.jsxs(Ri,{className:"p-8 md:p-10 flex flex-col justify-between min-h-[260px]",glowColor:"rgba(57, 18, 255, 0.25)",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("span",{className:"font-mono text-2xl md:text-3xl font-bold text-scan/80",children:e.num}),l.jsx("span",{className:"font-mono text-[10px] text-white/40 uppercase tracking-widest",children:"INZU PILLAR"})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-display text-xl md:text-2xl font-bold text-white uppercase mb-3",children:e.title}),l.jsx("p",{className:"font-body text-xs md:text-sm text-white/60 leading-relaxed",children:e.body})]}),l.jsxs("div",{className:"border-t border-white/10 pt-3 font-mono text-[9px] text-white/40 flex justify-between",children:[l.jsx("span",{children:"PRINCIPLE VERIFIED"}),l.jsx("span",{className:"text-scan",children:"ACTIVE DOCTRINE"})]})]},e.num))}),l.jsx("div",{className:"rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl p-8 md:p-12",children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx(g1,{size:16,className:"text-scan"}),l.jsx("span",{className:"font-mono text-xs text-white uppercase font-bold tracking-wider",children:"ENGINEERING"})]}),l.jsxs("ul",{className:"font-mono text-xs text-white/60 space-y-2",children:[l.jsx("li",{children:"• THREE.JS & REACT THREE FIBER"}),l.jsx("li",{children:"• CUSTOM GLSL / VERTEX SHADERS"}),l.jsx("li",{children:"• LENIS EXPONENTIAL INERTIA"}),l.jsx("li",{children:"• GSAP SCROLLTRIGGER ENGINE"}),l.jsx("li",{children:"• DRACO CAD RETOPOLOGY"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx(Ud,{size:16,className:"text-accent"}),l.jsx("span",{className:"font-mono text-xs text-white uppercase font-bold tracking-wider",children:"3D ART DIRECTION"})]}),l.jsxs("ul",{className:"font-mono text-xs text-white/60 space-y-2",children:[l.jsx("li",{children:"• HAUTE COUTURE CLOTH PHYSICS"}),l.jsx("li",{children:"• PBR MATERIAL TEXTURE CRAFT"}),l.jsx("li",{children:"• CINEMATIC 3-POINT RIGGING"}),l.jsx("li",{children:"• SPATIAL AUDIO SCULPTING"}),l.jsx("li",{children:"• EXPERIMENTAL TYPOGRAPHY"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx(v1,{size:16,className:"text-[#ff0055]"}),l.jsx("span",{className:"font-mono text-xs text-white uppercase font-bold tracking-wider",children:"DEPLOYMENT"})]}),l.jsxs("ul",{className:"font-mono text-xs text-white/60 space-y-2",children:[l.jsx("li",{children:"• 60–120 FPS GUARANTEE"}),l.jsx("li",{children:"• ADAPTIVE MOBILE DPR DETECTION"}),l.jsx("li",{children:"• ZERO DEPENDENCY BLOAT"}),l.jsx("li",{children:"• GLOBAL ASSET CDN STREAMING"}),l.jsx("li",{children:"• AWWWARDS SOTD READY"})]})]})]})})]})}function e_(){const t=B(n=>n.setCursor),e=B(n=>n.resetCursor);return l.jsxs("footer",{id:"contact",className:"relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 py-24 border-t border-white/10",style:{backgroundColor:"rgba(2, 2, 4, 0.95)"},children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-6 font-mono text-xs text-white/50",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"h-2 w-2 rounded-full bg-scan animate-pulse"}),l.jsx("span",{className:"text-scan",children:"TERMINAL ACTIVE"})]}),l.jsx("span",{children:"INZU SENSEI ARCHITECTURE"}),l.jsx("span",{children:"STATUS: OPEN FOR SELECT COMMISSIONS"})]}),l.jsxs("div",{className:"my-auto py-16 max-w-4xl",children:[l.jsx("div",{className:"mb-4",children:l.jsx(Ko,{color:"#00ffcc",children:"[ INITIATE SPATIAL PROJECT ]"})}),l.jsx(Fi,{children:l.jsx("h2",{className:"font-display text-4xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white mb-6",children:"HAVE SOMETHING WORTH EXPLORING?"})}),l.jsx("p",{className:"font-display text-2xl md:text-4xl text-white/50 font-medium uppercase mb-12",children:"LET’S BUILD IT IN 3D."}),l.jsxs("div",{className:"flex flex-wrap items-center gap-6",children:[l.jsxs(fa,{as:"a",href:"mailto:inzusensei2@gmail.com",cursorLabel:"EMAIL",className:"border-scan/40 bg-scan/10 text-scan hover:border-scan hover:bg-scan hover:text-black hover:shadow-[0_0_40px_rgba(0,255,204,0.5)] text-sm px-10 py-5",children:[l.jsx(y1,{size:16}),l.jsx("span",{children:"START A PROJECT"})]}),l.jsx("a",{href:"mailto:inzusensei2@gmail.com",onMouseEnter:()=>t("explore","COPY"),onMouseLeave:e,className:"font-mono text-sm text-white/70 hover:text-scan transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-scan",children:"inzusensei2@gmail.com"})]})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8 font-mono text-xs text-white/40",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"font-display text-lg font-bold tracking-widest text-white",children:"INZU"}),l.jsx("span",{children:"//"}),l.jsx("span",{children:"EXPERIENCE COMPLETE"})]}),l.jsxs("div",{className:"text-center sm:text-right space-y-1",children:[l.jsx("div",{children:"DESIGNED FOR SOTD // ZERO RUNTIME LATENCY"}),l.jsx("div",{className:"text-[10px] text-white/30",children:"SESSION CLOSED // ALL RIGHTS RESERVED © 2026"})]})]})]})}try{zn.preload("/models/head.glb"),zn.preload("/models/shirt.glb"),zn.preload("/models/pants.glb"),zn.preload("/models/shoes.glb")}catch(t){console.warn("Preload warning:",t)}function t_(t){const e=B(g=>g.characterMode),n=E.useRef(),i=E.useRef(),r=E.useRef(),o=zn("/models/head.glb"),s=zn("/models/shirt.glb"),a=zn("/models/pants.glb"),c=zn("/models/shoes.glb"),u=E.useMemo(()=>o.scene.clone(!0),[o]),f=E.useMemo(()=>s.scene.clone(!0),[s]),d=E.useMemo(()=>a.scene.clone(!0),[a]),h=E.useMemo(()=>c.scene.clone(!0),[c]),p=E.useMemo(()=>c.scene.clone(!0),[c]);return E.useEffect(()=>{const g=(C,_=!1)=>{C.traverse(y=>{y.isMesh&&(y.castShadow=!0,y.receiveShadow=!0,e==="mesh"?y.material=new es({color:"#38384f",wireframe:!0}):e==="void"?y.material=new es({color:"#000000"}):e==="scan"?y.material=new es({color:"#00ffcc",transparent:!0,opacity:.5,wireframe:!0}):e==="iridescence"||e==="material"?y.material=new Bs({color:"#f4f0ec",roughness:.12,metalness:.35,clearcoat:1,clearcoatRoughness:.08,iridescence:.6}):y.material=new Bs({color:"#eae6e1",roughness:.28,metalness:.08,clearcoat:.65,clearcoatRoughness:.15}))})};u&&g(u),f&&g(f),d&&g(d),h&&g(h),p&&g(p)},[e,u,f,d,h,p]),wt(g=>{const{pointer:C,clock:_}=g,y=_.getElapsedTime();if(i.current){const m=-C.y*Math.PI/7,v=C.x*Math.PI/5;i.current.rotation.x=de.lerp(i.current.rotation.x,m,.04),i.current.rotation.y=de.lerp(i.current.rotation.y,v,.04)}n.current&&(n.current.position.x=de.lerp(n.current.position.x,C.x*.15,.02),n.current.rotation.y=de.lerp(n.current.rotation.y,C.x*.06,.02),n.current.position.y=(t.position?.[1]||0)+Math.sin(y*1.5)*.015)}),l.jsxs("group",{ref:n,...t,children:[l.jsxs("group",{ref:i,position:[0,1.45,0],children:[l.jsx("primitive",{object:u,scale:[.0032,.0032,.0032],position:[0,-.6,.05]}),l.jsxs("group",{position:[0,.45,0],children:[l.jsxs("mesh",{rotation:[Math.PI/2,0,0],children:[l.jsx("torusGeometry",{args:[.22,.02,16,32]}),l.jsx("meshPhysicalMaterial",{color:"#c0c8d4",roughness:.08,metalness:.85,clearcoat:1})]}),Array.from({length:8}).map((g,C)=>{const _=C/8*Math.PI*2;return l.jsxs("mesh",{position:[Math.cos(_)*.22,.12,Math.sin(_)*.22],rotation:[0,-_,Math.PI/12],children:[l.jsx("coneGeometry",{args:[.025,.22+C%2*.1,4]}),l.jsx("meshPhysicalMaterial",{color:"#d8e0ea",roughness:.05,metalness:.95,clearcoat:1})]},`crown-spike-${C}`)})]})]}),l.jsx("group",{ref:r,position:[0,.38,0],children:l.jsx("primitive",{object:f,scale:[.0155,.0155,.0155],position:[0,-.85,0]})}),l.jsx("group",{position:[0,-.42,-.02],children:l.jsx("primitive",{object:d,scale:[.92,.92,.92],position:[0,-.15,0]})}),l.jsxs("group",{position:[0,-.98,0],children:[l.jsx("group",{position:[-.22,-.04,.04],rotation:[0,.08,0],children:l.jsx("primitive",{object:h,scale:[.42,.42,.42]})}),l.jsx("group",{position:[.22,-.04,.04],rotation:[0,-.08,0],children:l.jsx("primitive",{object:p,scale:[-.42,.42,.42]})})]})]})}const n_=.055,i_=.02,r_=.155,co=.022,o_=.014,s_=.008,uo=.008,a_=2.5,pu=.4,fo=.08,gu=.03,l_=.12,vu=2.5,c_=6;function xu({side:t,pointerRef:e}){const n=E.useRef(),i=E.useRef(),r=E.useRef(),o=E.useRef(),s=E.useRef(),a=E.useRef({nextBlink:Math.random()*3+1,isBlinking:!1,blinkStart:0}),c=t==="left"?-1:1;return wt(({clock:u})=>{const f=u.getElapsedTime(),d=e.current;if(r.current){const p=d.x*uo*.8,g=d.y*uo*.5;r.current.position.x=de.lerp(r.current.position.x,p,fo),r.current.position.y=de.lerp(r.current.position.y,g,fo)}if(i.current){const p=d.x*uo*.5,g=d.y*uo*.3;i.current.position.x=de.lerp(i.current.position.x,p,fo*.8),i.current.position.y=de.lerp(i.current.position.y,g,fo*.8)}o.current&&(o.current.intensity=pu+Math.sin(f*2.5+c)*.1);const h=a.current;if(!h.isBlinking&&f>h.nextBlink&&(h.isBlinking=!0,h.blinkStart=f),h.isBlinking){const p=(f-h.blinkStart)/l_;if(p>=1)h.isBlinking=!1,h.nextBlink=f+vu+Math.random()*(c_-vu),n.current&&(n.current.scale.y=1);else{const g=1-Math.sin(p*Math.PI)*.9;n.current&&(n.current.scale.y=g)}}}),l.jsxs("group",{ref:n,position:[c*n_,i_,r_],children:[l.jsxs("mesh",{ref:s,children:[l.jsx("sphereGeometry",{args:[co,24,24]}),l.jsx("meshStandardMaterial",{color:"#e8e4e0",emissive:"#c8c4c0",emissiveIntensity:.6,roughness:.2,metalness:.05})]}),l.jsxs("mesh",{ref:i,position:[0,0,co*.4],children:[l.jsx("sphereGeometry",{args:[o_,20,20]}),l.jsx("meshStandardMaterial",{color:"#8899bb",emissive:"#6688cc",emissiveIntensity:a_,roughness:.1,metalness:.3,transparent:!0,opacity:.95})]}),l.jsxs("mesh",{ref:r,position:[0,0,co*.6],children:[l.jsx("sphereGeometry",{args:[s_,16,16]}),l.jsx("meshStandardMaterial",{color:"#050505",emissive:"#000000",roughness:0,metalness:.8})]}),l.jsx("pointLight",{ref:o,position:[0,0,co*1.5],intensity:pu,color:"#8899cc",distance:.5,decay:2})]})}function u_(t){const e=B(c=>c.characterMode),n=E.useRef(),i=E.useRef(),r=E.useRef({x:0,y:0});wt(c=>{const{pointer:u,clock:f}=c,d=f.getElapsedTime();if(r.current=u,n.current){const h=u.y*Math.PI/6,p=u.x*Math.PI/6;n.current.rotation.x=de.lerp(n.current.rotation.x,-h,gu),n.current.rotation.y=de.lerp(n.current.rotation.y,p,gu)}i.current&&(i.current.position.x=de.lerp(i.current.position.x,u.x*.04,.02),i.current.rotation.y=de.lerp(i.current.rotation.y,u.x*.015,.02),i.current.position.y=Math.sin(d*1.2)*.002)});const o=E.useMemo(()=>{const c=[];for(let u=0;u<=20;u++){const f=u/20,d=de.lerp(.24,1.1,Math.pow(f,2)),h=de.lerp(2.5,0,f);c.push(new Ao(d,h))}return c},[]),s=()=>{switch(e){case"mesh":return l.jsx("meshBasicMaterial",{wireframe:!0,color:"#00ffcc"});case"iridescence":return l.jsx("meshPhysicalMaterial",{color:"#e2e8f0",roughness:.08,metalness:.25,clearcoat:1,clearcoatRoughness:.05,iridescence:1,iridescenceIOR:1.65,iridescenceThicknessRange:[150,750]});case"scan":return l.jsx("meshStandardMaterial",{color:"#021f18",emissive:"#00ffcc",emissiveIntensity:.65,roughness:.2,metalness:.7});case"void":return l.jsx("meshBasicMaterial",{color:"#020204"});case"beauty":case"data":default:return l.jsx("meshPhysicalMaterial",{color:"#f3eee9",roughness:.2,metalness:.08,clearcoat:.9,clearcoatRoughness:.08})}},a=l.jsx("meshPhysicalMaterial",{color:"#c0c8d4",roughness:.1,metalness:.6,clearcoat:1,transparent:!0,opacity:.85});return l.jsxs("group",{...t,ref:i,children:[l.jsxs("group",{ref:n,position:[0,2.95,0],children:[l.jsxs("mesh",{scale:[.85,1.1,.9],children:[l.jsx("sphereGeometry",{args:[.18,32,32]}),s()]}),l.jsx(xu,{side:"left",pointerRef:r}),l.jsx(xu,{side:"right",pointerRef:r}),Array.from({length:15}).map((c,u)=>l.jsxs("mesh",{position:[(Math.random()-.5)*.15,.15,(Math.random()-.5)*.15],rotation:[(Math.random()-.5)*.5,Math.random()*Math.PI,(Math.random()-.5)*.5],children:[l.jsx("coneGeometry",{args:[.02,.08+Math.random()*.12,8]}),s()]},`hair-${u}`)),l.jsxs("group",{position:[0,.2,0],children:[l.jsxs("mesh",{rotation:[Math.PI/2,0,0],children:[l.jsx("torusGeometry",{args:[.15,.02,16,32]}),a]}),Array.from({length:8}).map((c,u)=>{const f=u/8*Math.PI*2;return l.jsxs("mesh",{position:[Math.cos(f)*.15,.1,Math.sin(f)*.15],rotation:[0,-f,Math.PI/12],children:[l.jsx("coneGeometry",{args:[.02,.15+Math.random()*.2,4]}),a]},`crown-${u}`)})]})]}),l.jsxs("mesh",{position:[0,2.75,0],children:[l.jsx("cylinderGeometry",{args:[.06,.08,.2,16]}),s()]}),l.jsxs("mesh",{position:[0,2.58,0],scale:[1,.4,.6],children:[l.jsx("sphereGeometry",{args:[.3,32,32]}),s()]}),l.jsxs("mesh",{position:[0,2,0],children:[l.jsx("cylinderGeometry",{args:[.25,.18,1.1,32]}),s()]}),l.jsxs("mesh",{position:[0,2.5,.18],rotation:[.2,0,0],children:[l.jsx("boxGeometry",{args:[.4,.3,.05]}),s()]}),l.jsxs("mesh",{position:[0,0,0],rotation:[0,Math.PI/2,0],children:[l.jsx("latheGeometry",{args:[o,64,.3,Math.PI*2-.6]}),s()]}),l.jsxs("mesh",{position:[0,.05,-.6],rotation:[-Math.PI/2,0,0],children:[l.jsx("planeGeometry",{args:[1.2,1.8,16,16]}),s()]}),[-1,1].map(c=>l.jsxs("group",{position:[c*.35,2.5,0],rotation:[0,0,c*.4],children:[l.jsxs("mesh",{position:[0,-.3,0],children:[l.jsx("cylinderGeometry",{args:[.06,.05,.6,16]}),s()]}),l.jsxs("mesh",{position:[0,-.6,0],rotation:[.2,0,0],children:[l.jsx("cylinderGeometry",{args:[.05,.04,.6,16]}),s()]}),l.jsxs("mesh",{position:[0,-.9,.1],children:[l.jsx("sphereGeometry",{args:[.06,16,16]}),s()]})]},`arm-${c}`))]})}function f_(){const t=B(o=>o.characterMode),e=B(o=>o.inspectionActive),n=E.useRef(),i=E.useRef();if(wt(({clock:o})=>{if(n.current){const s=o.getElapsedTime();n.current.position.y=1.75+Math.sin(s*2)*1.75}i.current&&(i.current.opacity=.5+Math.sin(o.getElapsedTime()*10)*.3)}),t!=="scan")return null;const r={fontFamily:"var(--font-mono, monospace)",fontSize:"10px",color:"#00ffcc",letterSpacing:"0.15em",pointerEvents:"none"};return l.jsxs("group",{visible:e||t==="scan",children:[l.jsxs("mesh",{ref:n,position:[0,0,0],children:[l.jsx("planeGeometry",{args:[3,.02]}),l.jsx("meshBasicMaterial",{ref:i,color:"#00ffcc",transparent:!0,opacity:.8,depthWrite:!1})]}),[.5,1.2,1.9,2.6,3.3].map((o,s)=>l.jsxs("mesh",{position:[0,o,0],children:[l.jsx("planeGeometry",{args:[3,.005]}),l.jsx("meshBasicMaterial",{color:"#00ffcc",transparent:!0,opacity:.1})]},`grid-${s}`)),l.jsx(At,{position:[1.5,3.2,0],center:!0,style:r,children:"SILHOUETTE"}),l.jsx(At,{position:[-1.5,2.6,0],center:!0,style:r,children:"FORM"}),l.jsx(At,{position:[1.5,1.8,0],center:!0,style:r,children:"FABRIC"}),l.jsx(At,{position:[-1.5,1.2,0],center:!0,style:r,children:"MATERIAL"}),l.jsx(At,{position:[1.5,.5,0],center:!0,style:r,children:"GEOMETRY"})]})}function d_(){if(B(r=>r.characterMode)!=="data")return null;const e={fontFamily:"var(--font-mono, monospace)",fontSize:"10px",color:"#444",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"8px",pointerEvents:"none"},n={color:"#888"},i=r=>({width:"30px",height:"1px",backgroundColor:"#444",order:r?1:0});return l.jsxs("group",{children:[l.jsx(At,{position:[-1.5,3,0],center:!0,children:l.jsxs("div",{style:e,children:["OBJECT / ",l.jsx("span",{style:n,children:"INZU-001"}),l.jsx("div",{style:i(!0)})]})}),l.jsx(At,{position:[1.5,3,0],center:!0,children:l.jsxs("div",{style:e,children:[l.jsx("div",{style:i(!1)}),"HEIGHT / ",l.jsx("span",{style:n,children:"3.2M"})]})}),l.jsx(At,{position:[-1.5,1.8,0],center:!0,children:l.jsxs("div",{style:e,children:["MATERIAL / ",l.jsx("span",{style:n,children:"COUTURE WHITE"}),l.jsx("div",{style:i(!0)})]})}),l.jsx(At,{position:[1.5,1.8,0],center:!0,children:l.jsxs("div",{style:e,children:[l.jsx("div",{style:i(!1)}),"POLYGONS / ",l.jsx("span",{style:n,children:"12,847"})]})}),l.jsx(At,{position:[-1.5,.6,0],center:!0,children:l.jsxs("div",{style:e,children:["COORD / ",l.jsx("span",{style:n,children:"0.00, 0.00, 0.00"}),l.jsx("div",{style:i(!0)})]})}),l.jsx(At,{position:[1.5,.6,0],center:!0,children:l.jsxs("div",{style:e,children:[l.jsx("div",{style:i(!1)}),"STATUS / ",l.jsx("span",{style:n,children:"ACTIVE"})]})})]})}function h_(){const t=E.useRef(),e=E.useRef();return wt(n=>{const{pointer:i}=n;if(t.current){const r=i.x*1.5+3,o=i.y*.8+4.5;t.current.position.x=de.lerp(t.current.position.x,r,.025),t.current.position.y=de.lerp(t.current.position.y,o,.025)}if(e.current){const r=-i.x*1-2.5;e.current.position.x=de.lerp(e.current.position.x,r,.02)}}),l.jsxs(l.Fragment,{children:[l.jsx("ambientLight",{intensity:.25,color:"#f0ece8"}),l.jsx("hemisphereLight",{color:"#f5f0eb",groundColor:"#1a1a2e",intensity:.35}),l.jsx("spotLight",{ref:t,position:[3,4.5,4],intensity:2,angle:.6,penumbra:.9,color:"#f0ece8",castShadow:!1}),l.jsx("spotLight",{ref:e,position:[-3,3.5,3],intensity:1.2,angle:.7,penumbra:1,color:"#d8d4e8",castShadow:!1}),l.jsx("pointLight",{position:[0,3,-4],intensity:1.5,color:"#8888cc",distance:12,decay:2}),l.jsx("pointLight",{position:[0,-.3,2],intensity:.4,color:"#e8e4e0",distance:5,decay:2}),l.jsx("pointLight",{position:[4,2,-2],intensity:.6,color:"#ccbbdd",distance:8,decay:2}),l.jsx("pointLight",{position:[-4,2,-2],intensity:.6,color:"#bbccdd",distance:8,decay:2}),l.jsx(Ah,{preset:"night",environmentIntensity:.15}),l.jsx("fog",{attach:"fog",args:["#030303",10,30]})]})}const yu=5.5;new Wt(0,1.5,0);const _u=new Wt(0,1.6,0),m_=1.8,p_=.25,g_=.15,Ms=.06;function v_(){const{camera:t}=Ge(),e=B(r=>r.orbitProgress),n=B(r=>r.heroVisible),i=B(r=>r.inspectionActive);return wt(r=>{const{pointer:o}=r;if(i){t.position.x=de.lerp(t.position.x,o.x*.1,.05),t.position.y=de.lerp(t.position.y,1.5+o.y*.1,.05),t.position.z=de.lerp(t.position.z,4,.05),t.lookAt(_u);return}const s=e*Math.PI*2,a=Math.sin(s)*yu,c=Math.cos(s)*yu,u=n?0:3,f=n?0:2,d=a+o.x*p_,h=m_+o.y*g_+f,p=c+u;t.position.x=de.lerp(t.position.x,d,Ms),t.position.y=de.lerp(t.position.y,h,Ms),t.position.z=de.lerp(t.position.z,p,Ms),t.lookAt(_u)}),null}function x_(){const t=B(e=>e.qualityLevel||"high");return t==="low"?null:l.jsxs(Gh,{multisampling:0,children:[l.jsx(Wh,{intensity:.8,luminanceThreshold:.85,luminanceSmoothing:.2,mipmapBlur:!0}),t!=="medium"&&l.jsxs(l.Fragment,{children:[l.jsx($h,{offset:new Ao(.001,.001)}),l.jsx(Xh,{premultiply:!0,blendFunction:qh.OVERLAY,opacity:.035})]}),l.jsx(Zh,{eskil:!1,offset:.15,darkness:1.1})]})}function y_(){const t=B(r=>r.qualityLevel||"high"),e=E.useRef(),n=t==="low"?0:t==="medium"?200:500,i=E.useMemo(()=>{const r=new Float32Array(n*3);for(let o=0;o<n;o++)r[o*3]=(Math.random()-.5)*10,r[o*3+1]=(Math.random()-.5)*10,r[o*3+2]=(Math.random()-.5)*10;return r},[n]);return wt((r,o)=>{e.current&&(e.current.rotation.y+=o*.05,e.current.position.y=Math.sin(r.clock.elapsedTime*.5)*.2)}),n===0?null:l.jsxs("points",{ref:e,children:[l.jsx("bufferGeometry",{children:l.jsx("bufferAttribute",{attach:"attributes-position",count:n,array:i,itemSize:3})}),l.jsx("pointsMaterial",{color:"#ffffff",size:.01,transparent:!0,opacity:.3,sizeAttenuation:!0})]})}const __=[{id:"crown",position:[0,3.25,0],label:"TOPOLOGY CROWN",spec:"8-AXIS QUARTZ TORUS",detail:"Procedural radial lattice with anisotropic clearcoat optics."},{id:"chest",position:[0,2.48,.24],label:"CORE ACTUATOR",spec:"CAD CNC TITANIUM",detail:"Subsurface photonic chamber calibrated to 5500K daylight."},{id:"drape",position:[.48,1.1,.52],label:"COUTURE DRAPE",spec:"VERLET CLOTH 60FPS",detail:"Gravity-weighted continuous silk spline with micro-harmonics."}];function C_(){const t=B(o=>o.activeHotspot),e=B(o=>o.setActiveHotspot),n=B(o=>o.setCursor),i=B(o=>o.resetCursor),r=B(o=>o.soundEnabled);return l.jsx("group",{children:__.map(o=>{const s=t===o.id;return l.jsx("group",{position:o.position,children:l.jsx(At,{center:!0,distanceFactor:8,zIndexRange:[100,0],children:l.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",gap:"0.6rem",pointerEvents:"auto"},children:[l.jsx("button",{type:"button",onClick:()=>{e(s?null:o.id)},onMouseEnter:()=>{r&&Rt.playHover(.03),n("inspect",o.label)},onMouseLeave:i,className:"hotspot-beacon","aria-label":`Inspect ${o.label}`,style:{backgroundColor:s?"#00ffcc":"rgba(0, 255, 204, 0.25)",transform:s?"scale(1.3)":"scale(1)"}}),s&&l.jsxs("div",{style:{position:"absolute",left:"26px",top:"-14px",width:"210px",padding:"0.75rem 0.9rem",borderRadius:"10px",backgroundColor:"rgba(5, 5, 10, 0.88)",border:"1px solid rgba(0, 255, 204, 0.4)",backdropFilter:"blur(20px)",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 255, 204, 0.15)",animation:"fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)",whiteSpace:"normal",zIndex:10},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"},children:[l.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"9px",color:"#00ffcc",fontWeight:600},children:o.label}),l.jsx("span",{onClick:a=>{a.stopPropagation(),e(null)},style:{fontFamily:"var(--font-mono)",fontSize:"9px",color:"#888",cursor:"pointer",padding:"0 2px"},children:"✕"})]}),l.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"8px",color:"#94a3b8",marginBottom:"5px"},children:o.spec}),l.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"10px",lineHeight:1.4,color:"#f1f5f9",margin:0},children:o.detail})]})]})})},o.id)})})}function b_(){const t=B(n=>n.setCursor),e=B(n=>n.resetCursor);return l.jsxs(l.Fragment,{children:[l.jsx(v_,{}),l.jsx(h_,{}),l.jsx(E.Suspense,{fallback:l.jsx(u_,{position:[0,-.5,0],onPointerOver:()=>t("inspect","INSPECT"),onPointerOut:()=>e()}),children:l.jsx(t_,{position:[0,-.45,0],onPointerOver:()=>t("inspect","INSPECT"),onPointerOut:()=>e()})}),l.jsx(C_,{}),l.jsx(f_,{}),l.jsx(d_,{}),l.jsx(y_,{}),l.jsx(x_,{}),l.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-1.05,0],receiveShadow:!0,children:[l.jsx("circleGeometry",{args:[8,64]}),l.jsx("meshStandardMaterial",{color:"#060608",roughness:.85,metalness:.2,transparent:!0,opacity:.6})]})]})}we.registerPlugin(X);let gn=null;function w_(){if(typeof window>"u")return null;if(gn)return gn;gn=new Yh({duration:1.2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:1.5}),gn.on("scroll",X.update);const t=e=>{gn.raf(e*1e3)};return we.ticker.add(t),we.ticker.lagSmoothing(0),gn}function T_(){gn&&(gn.destroy(),gn=null)}function E_(){const t=B(n=>n.setQualityLevel),e=B(n=>n.qualityLevel);return E.useEffect(()=>{const n=document.createElement("canvas"),i=n.getContext("webgl2")||n.getContext("webgl");if(!i){t("low");return}const r=i.getExtension("WEBGL_debug_renderer_info"),o=r?i.getParameter(r.UNMASKED_RENDERER_WEBGL):"",s=/Mobi|Android/i.test(navigator.userAgent),a=/Intel|SwiftShader|llvmpipe/i.test(o),c=navigator.hardwareConcurrency||2;s||a&&c<=4?t("low"):a||c<=4?t("medium"):c>=8?t("ultra"):t("high"),n.remove()},[t]),e}function S_(){E_();const t=B(i=>i.heroRevealed),e=B(i=>i.heroVisible),n=B(i=>i.setOrbitProgress);return E.useEffect(()=>{const i=w_(),r=o=>{const s=window.innerHeight*2.5,a=Math.min(Math.max(window.scrollY/s,0),1);n(a)};return i&&i.on("scroll",r),()=>{T_()}},[n]),l.jsxs("div",{className:"relative min-h-screen w-full bg-[#030305] text-[#f2f0ea] selection:bg-scan selection:text-black overflow-x-hidden",children:[l.jsx(Jp,{}),l.jsx(e0,{}),l.jsx(n0,{}),l.jsx(i0,{}),l.jsx(r0,{}),l.jsx("div",{className:"fixed inset-0 pointer-events-none z-[4] transition-opacity duration-1000",style:{opacity:t&&e?1:0},children:l.jsx(wa,{gl:{antialias:!1,alpha:!0,powerPreference:"high-performance"},dpr:[1,2],camera:{position:[0,1.8,5.5],fov:45},style:{pointerEvents:"auto"},children:l.jsx(E.Suspense,{fallback:null,children:l.jsx(b_,{})})})}),l.jsxs("main",{className:"relative z-10 w-full",children:[l.jsx(w1,{}),l.jsx(W1,{}),l.jsx(X1,{}),l.jsx(Z1,{}),l.jsx(Q1,{}),l.jsx(J1,{}),l.jsx(e_,{})]})]})}Ph.createRoot(document.getElementById("root")).render(l.jsx(Cu.StrictMode,{children:l.jsx(S_,{})}));

window.libpannellum=function(z,d,r){function C(B,m,u,C){function fa(a,e){return 1==a.level&&1!=e.level?-1:1==e.level&&1!=a.level?1:e.timestamp-a.timestamp}function ma(a,e){return a.level!=e.level?a.level-e.level:a.diff-e.diff}function O(a,e,g,d,f,b){this.vertices=a;this.side=e;this.level=g;this.x=d;this.y=f;this.path=b.replace("%s",e).replace("%l",g).replace("%x",d).replace("%y",f)}function Z(a,e,d,h,f){var b;var v=e.vertices;b=U(a,v.slice(0,3));var n=U(a,v.slice(3,6)),s=U(a,v.slice(6,9)),v=U(a,v.slice(9,
12)),k=b[0]+n[0]+s[0]+v[0];-4==k||4==k?b=!1:(k=b[1]+n[1]+s[1]+v[1],b=-4==k||4==k?!1:4!=b[2]+n[2]+s[2]+v[2]);if(b){b=e.vertices;n=b[0]+b[3]+b[6]+b[9];s=b[1]+b[4]+b[7]+b[10];v=b[2]+b[5]+b[8]+b[11];k=Math.sqrt(n*n+s*s+v*v);v=Math.asin(v/k);n=Math.atan2(s,n)-h;n+=n>Math.PI?-2*Math.PI:n<-Math.PI?2*Math.PI:0;n=Math.abs(n);e.diff=Math.acos(Math.sin(d)*Math.sin(v)+Math.cos(d)*Math.cos(v)*Math.cos(n));n=!1;for(s=0;s<g.nodeCache.length;s++)if(g.nodeCache[s].path==e.path){n=!0;g.nodeCache[s].timestamp=g.nodeCacheTimestamp++;
g.nodeCache[s].diff=e.diff;g.currentNodes.push(g.nodeCache[s]);break}n||(e.timestamp=g.nodeCacheTimestamp++,g.currentNodes.push(e),g.nodeCache.push(e));if(e.level<g.level){var v=m.cubeResolution*Math.pow(2,e.level-m.maxLevel),n=Math.ceil(v*m.invTileResolution)-1,s=v%m.tileResolution*2,A=2*v%m.tileResolution;0===A&&(A=m.tileResolution);0===s&&(s=2*m.tileResolution);k=0.5;if(e.x==n||e.y==n)k=1-m.tileResolution/(m.tileResolution+A);var u=1-k,v=[],c=k,x=k,y=k,l=u,t=u,r=u;if(A<m.tileResolution)if(e.x==
n&&e.y!=n){if(t=x=0.5,"d"==e.side||"u"==e.side)r=y=0.5}else e.x!=n&&e.y==n&&(l=c=0.5,"l"==e.side||"r"==e.side)&&(r=y=0.5);s<m.tileResolution&&(e.x==n&&(c=0,l=1,"l"==e.side||"r"==e.side)&&(y=0,r=1),e.y==n&&(x=0,t=1,"d"==e.side||"u"==e.side)&&(y=0,r=1));A=[b[0],b[1],b[2],b[0]*c+b[3]*l,b[1]*k+b[4]*u,b[2]*y+b[5]*r,b[0]*c+b[6]*l,b[1]*x+b[7]*t,b[2]*y+b[8]*r,b[0]*k+b[9]*u,b[1]*x+b[10]*t,b[2]*y+b[11]*r];A=new O(A,e.side,e.level+1,2*e.x,2*e.y,m.fullpath);v.push(A);e.x==n&&s<m.tileResolution||(A=[b[0]*c+b[3]*
l,b[1]*k+b[4]*u,b[2]*y+b[5]*r,b[3],b[4],b[5],b[3]*k+b[6]*u,b[4]*x+b[7]*t,b[5]*y+b[8]*r,b[0]*c+b[6]*l,b[1]*x+b[7]*t,b[2]*y+b[8]*r],A=new O(A,e.side,e.level+1,2*e.x+1,2*e.y,m.fullpath),v.push(A));e.x==n&&s<m.tileResolution||e.y==n&&s<m.tileResolution||(A=[b[0]*c+b[6]*l,b[1]*x+b[7]*t,b[2]*y+b[8]*r,b[3]*k+b[6]*u,b[4]*x+b[7]*t,b[5]*y+b[8]*r,b[6],b[7],b[8],b[9]*c+b[6]*l,b[10]*k+b[7]*u,b[11]*y+b[8]*r],A=new O(A,e.side,e.level+1,2*e.x+1,2*e.y+1,m.fullpath),v.push(A));e.y==n&&s<m.tileResolution||(A=[b[0]*
k+b[9]*u,b[1]*x+b[10]*t,b[2]*y+b[11]*r,b[0]*c+b[6]*l,b[1]*x+b[7]*t,b[2]*y+b[8]*r,b[9]*c+b[6]*l,b[10]*k+b[7]*u,b[11]*y+b[8]*r,b[9],b[10],b[11]],A=new O(A,e.side,e.level+1,2*e.x,2*e.y+1,m.fullpath),v.push(A));for(e=0;e<v.length;e++)Z(a,v[e],d,h,f)}}}function $(){return[-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,1,1,-1,1,1,-1,-1]}function aa(a,e,g){var d=Math.sin(e);e=Math.cos(e);if("x"==
g)return[a[0],e*a[1]+d*a[2],e*a[2]-d*a[1],a[3],e*a[4]+d*a[5],e*a[5]-d*a[4],a[6],e*a[7]+d*a[8],e*a[8]-d*a[7]];if("y"==g)return[e*a[0]-d*a[2],a[1],e*a[2]+d*a[0],e*a[3]-d*a[5],a[4],e*a[5]+d*a[3],e*a[6]-d*a[8],a[7],e*a[8]+d*a[6]]}function ha(a){return[a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15]]}function na(g){g.texture||(g.texture=a.createTexture(),g.image=new Image,g.image.crossOrigin="anonymous",g.image.onload=function(){var e=g.image;a.bindTexture(a.TEXTURE_2D,
g.texture);a.texImage2D(a.TEXTURE_2D,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,e);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.bindTexture(a.TEXTURE_2D,null);g.textureLoaded=!0;delete g.image},g.image.src=encodeURI(g.path+"."+m.extension))}function U(a,g){var d=[a[0]*g[0]+a[1]*g[1]+a[2]*g[2],a[4]*g[0]+a[5]*g[1]+
a[6]*g[2],a[11]+a[8]*g[0]+a[9]*g[1]+a[10]*g[2],1/(a[12]*g[0]+a[13]*g[1]+a[14]*g[2])],m=d[0]*d[3],f=d[1]*d[3],d=d[2]*d[3],b=[0,0,0];-1>m&&(b[0]=-1);1<m&&(b[0]=1);-1>f&&(b[1]=-1);1<f&&(b[1]=1);if(-1>d||1<d)b[2]=1;return b}var t=d.createElement("canvas");t.style.width=t.style.height="100%";B.appendChild(t);typeof u===r&&(u="equirectangular");var g,a,ia,I,ba,K;this.init=function(M,e,P,z){var f;"cubemap"==u&&0!==(m[0].width&m[0].width-1)&&(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)||
navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/)||navigator.userAgent.match(/Trident.*rv[ :]*11\./))||(a=t.getContext("experimental-webgl",{alpha:!1,depth:!1}));if(!a&&("multires"==u&&m.hasOwnProperty("fallbackPath")||"cubemap"==u)&&("WebkitAppearance"in d.documentElement.style||navigator.userAgent.match(/Trident.*rv[ :]*11\./)||-1!==navigator.appVersion.indexOf("MSIE 10"))){I&&B.removeChild(I);I=d.createElement("div");I.className="pnlm-world";M=m.basePath?m.basePath+m.fallbackPath:
m.fallbackPath;var b="frblud".split(""),v=0;e=function(){var a=d.createElement("canvas");a.className="pnlm-face pnlm-"+b[this.side]+"face";I.appendChild(a);var g=a.getContext("2d");a.style.width=this.width+4+"px";a.style.height=this.height+4+"px";a.width=this.width+4;a.height=this.height+4;g.drawImage(this,2,2);var c=g.getImageData(0,0,a.width,a.height),f=c.data,e,l;for(e=2;e<a.width-2;e++)for(l=0;4>l;l++)f[4*(e+a.width)+l]=f[4*(e+2*a.width)+l],f[4*(e+a.width*(a.height-2))+l]=f[4*(e+a.width*(a.height-
3))+l];for(e=2;e<a.height-2;e++)for(l=0;4>l;l++)f[4*(e*a.width+1)+l]=f[4*(e*a.width+2)+l],f[4*((e+1)*a.width-2)+l]=f[4*((e+1)*a.width-3)+l];for(l=0;4>l;l++)f[4*(a.width+1)+l]=f[4*(2*a.width+2)+l],f[4*(2*a.width-2)+l]=f[4*(3*a.width-3)+l],f[4*(a.width*(a.height-2)+1)+l]=f[4*(a.width*(a.height-3)+2)+l],f[4*(a.width*(a.height-1)-2)+l]=f[4*(a.width*(a.height-2)-3)+l];for(e=1;e<a.width-1;e++)for(l=0;4>l;l++)f[4*e+l]=f[4*(e+a.width)+l],f[4*(e+a.width*(a.height-1))+l]=f[4*(e+a.width*(a.height-2))+l];for(e=
1;e<a.height-1;e++)for(l=0;4>l;l++)f[e*a.width*4+l]=f[4*(e*a.width+1)+l],f[4*((e+1)*a.width-1)+l]=f[4*((e+1)*a.width-2)+l];for(l=0;4>l;l++)f[l]=f[4*(a.width+1)+l],f[4*(a.width-1)+l]=f[4*(2*a.width-2)+l],f[a.width*(a.height-1)*4+l]=f[4*(a.width*(a.height-2)+1)+l],f[4*(a.width*a.height-1)+l]=f[4*(a.width*(a.height-1)-2)+l];g.putImageData(c,0,0);v++;6==v&&(ia=this.width,B.appendChild(I),z())};for(f=0;6>f;f++)P=new Image,P.crossOrigin="anonymous",P.side=f,P.onload=e,P.src="multires"==u?encodeURI(M.replace("%s",
b[f])+"."+m.extension):encodeURI(m[f].src)}else{if(!a)throw console.log("Error: no WebGL support detected!"),{type:"no webgl"};m.fullpath=m.basePath?m.basePath+m.path:m.path;m.invTileResolution=1/m.tileResolution;var n=$();ba=[];for(f=0;6>f;f++)ba[f]=n.slice(12*f,12*f+12),n=$();if("equirectangular"==u){if(f=Math.max(m.width,m.height),n=a.getParameter(a.MAX_TEXTURE_SIZE),f>n)throw console.log("Error: The image is too big; it's "+f+"px wide, but this device's maximum supported width is "+n+"px."),{type:"webgl size error",
width:f,maxWidth:n};}else if("cubemap"==u&&(f=m[0].width,n=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),f>n))throw console.log("Error: The cube face image is too big; it's "+f+"px wide, but this device's maximum supported width is "+n+"px."),{type:"webgl size error",width:f,maxWidth:n};m.horizonPitch!==r&&m.horizonRoll!==r&&(K=[m.horizonPitch,m.horizonRoll]);f=a.TEXTURE_2D;a.viewport(0,0,t.width,t.height);var n=a.createShader(a.VERTEX_SHADER),s=h;"multires"==u&&(s=k);a.shaderSource(n,s);a.compileShader(n);
var s=a.createShader(a.FRAGMENT_SHADER),C=V;"cubemap"==u?(f=a.TEXTURE_CUBE_MAP,C=S):"multires"==u&&(C=oa);a.shaderSource(s,C);a.compileShader(s);g=a.createProgram();a.attachShader(g,n);a.attachShader(g,s);a.linkProgram(g);a.getShaderParameter(n,a.COMPILE_STATUS)||console.log(a.getShaderInfoLog(n));a.getShaderParameter(s,a.COMPILE_STATUS)||console.log(a.getShaderInfoLog(s));a.getProgramParameter(g,a.LINK_STATUS)||console.log(a.getProgramInfoLog(g));a.useProgram(g);g.drawInProgress=!1;g.texCoordLocation=
a.getAttribLocation(g,"a_texCoord");a.enableVertexAttribArray(g.texCoordLocation);"multires"!=u?(g.texCoordBuffer=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,g.texCoordBuffer),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,1,1,1,1,-1,-1,1,1,-1,-1,-1]),a.STATIC_DRAW),a.vertexAttribPointer(g.texCoordLocation,2,a.FLOAT,!1,0,0),g.aspectRatio=a.getUniformLocation(g,"u_aspectRatio"),a.uniform1f(g.aspectRatio,t.width/t.height),g.psi=a.getUniformLocation(g,"u_psi"),g.theta=a.getUniformLocation(g,"u_theta"),
g.f=a.getUniformLocation(g,"u_f"),g.h=a.getUniformLocation(g,"u_h"),g.v=a.getUniformLocation(g,"u_v"),g.vo=a.getUniformLocation(g,"u_vo"),g.rot=a.getUniformLocation(g,"u_rot"),a.uniform1f(g.h,M/(2*Math.PI)),a.uniform1f(g.v,e/Math.PI),a.uniform1f(g.vo,P/Math.PI*2),g.texture=a.createTexture(),a.bindTexture(f,g.texture),"cubemap"==u?(a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m[1]),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m[3]),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Y,
0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m[4]),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m[5]),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m[0]),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m[2])):a.texImage2D(f,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m),a.texParameteri(f,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(f,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texParameteri(f,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(f,a.TEXTURE_MAG_FILTER,
a.LINEAR)):(g.vertPosLocation=a.getAttribLocation(g,"a_vertCoord"),a.enableVertexAttribArray(g.vertPosLocation),g.cubeVertBuf=a.createBuffer(),g.cubeVertTexCoordBuf=a.createBuffer(),g.cubeVertIndBuf=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,g.cubeVertTexCoordBuf),a.bufferData(a.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,0,1]),a.STATIC_DRAW),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.cubeVertIndBuf),a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),a.STATIC_DRAW),g.perspUniform=a.getUniformLocation(g,
"u_perspMatrix"),g.cubeUniform=a.getUniformLocation(g,"u_cubeMatrix"),g.level=-1,g.currentNodes=[],g.nodeCache=[],g.nodeCacheTimestamp=0);if(0!==a.getError())throw console.log("Error: Something went wrong with WebGL!"),{type:"webgl error"};z()}};this.destroy=function(){B!==r&&(t!==r&&B.removeChild(t),I!==r&&B.removeChild(I))};this.resize=function(){var d=z.devicePixelRatio||1;t.width=t.clientWidth*d;t.height=t.clientHeight*d;a&&(a.viewport(0,0,t.width,t.height),"multires"!=u&&a.uniform1f(g.aspectRatio,
t.width/t.height))};this.resize();this.render=function(d,e,h,k){var f;if(a||"multires"!=u&&"cubemap"!=u){if("multires"!=u){h=2*Math.atan(Math.tan(0.5*h)/(t.width/t.height));h=1/Math.tan(0.5*h);if("equirectangular"==u&&K!==r){f=K[0];var b=K[1],v=d,n=e,s=Math.cos(b)*Math.sin(d)*Math.sin(f)+Math.cos(d)*(Math.cos(f)*Math.cos(e)+Math.sin(b)*Math.sin(f)*Math.sin(e)),B=-Math.sin(d)*Math.sin(b)+Math.cos(d)*Math.cos(b)*Math.sin(e);d=Math.cos(b)*Math.cos(f)*Math.sin(d)+Math.cos(d)*(-Math.cos(e)*Math.sin(f)+
Math.cos(f)*Math.sin(b)*Math.sin(e));d=Math.asin(d);e=Math.atan2(B,s);f=[Math.cos(v)*(Math.sin(b)*Math.sin(f)*Math.cos(n)-Math.cos(f)*Math.sin(n)),Math.cos(v)*Math.cos(b)*Math.cos(n),Math.cos(v)*(Math.cos(f)*Math.sin(b)*Math.cos(n)+Math.sin(n)*Math.sin(f))];b=[-Math.cos(d)*Math.sin(e),Math.cos(d)*Math.cos(e)];b=Math.acos((f[0]*b[0]+f[1]*b[1])/(Math.sqrt(f[0]*f[0]+f[1]*f[1]+f[2]*f[2])*Math.sqrt(b[0]*b[0]+b[1]*b[1])));0>f[2]&&(b=2*Math.PI-b);a.uniform1f(g.rot,b)}a.uniform1f(g.psi,e);a.uniform1f(g.theta,
d);a.uniform1f(g.f,h);!0===C&&"equirectangular"==u&&(a.bindTexture(a.TEXTURE_2D,g.texture),a.texImage2D(a.TEXTURE_2D,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,m));a.drawArrays(a.TRIANGLES,0,6)}else{f=t.width/t.height;b=2*Math.atan(Math.tan(h/2)*t.height/t.width);b=1/Math.tan(b/2);f=[b/f,0,0,0,0,b,0,0,0,0,100.1/-99.9,20/-99.9,0,0,-1,0];for(b=1;b<m.maxLevel&&t.width>m.tileResolution*Math.pow(2,b-1)*Math.tan(h/2)*0.707;)b++;g.level=b;b=[1,0,0,0,1,0,0,0,1];b=aa(b,-d,"x");b=aa(b,e,"y");b=[b[0],b[1],b[2],0,b[3],b[4],
b[5],0,b[6],b[7],b[8],0,0,0,0,1];a.uniformMatrix4fv(g.perspUniform,!1,new Float32Array(ha(f)));a.uniformMatrix4fv(g.cubeUniform,!1,new Float32Array(ha(b)));b=[f[0]*b[0],f[0]*b[1],f[0]*b[2],0,f[5]*b[4],f[5]*b[5],f[5]*b[6],0,f[10]*b[8],f[10]*b[9],f[10]*b[10],f[11],-b[8],-b[9],-b[10],0];g.nodeCache.sort(fa);200<g.nodeCache.length&&g.nodeCache.length>g.currentNodes.length+50&&g.nodeCache.splice(200,g.nodeCache.length-200);g.currentNodes=[];v="fbudlr".split("");for(f=0;6>f;f++)n=new O(ba[f],v[f],1,0,0,
m.fullpath),Z(b,n,d,e,h);g.currentNodes.sort(ma);for(d=0;d<g.currentNodes.length;d++)if(!g.currentNodes[d].texture){setTimeout(na(g.currentNodes[d]),0);break}if(!g.drawInProgress){g.drawInProgress=!0;for(d=0;d<g.currentNodes.length;d++)g.currentNodes[d].textureLoaded&&(a.bindBuffer(a.ARRAY_BUFFER,g.cubeVertBuf),a.bufferData(a.ARRAY_BUFFER,new Float32Array(g.currentNodes[d].vertices),a.STATIC_DRAW),a.vertexAttribPointer(g.vertPosLocation,3,a.FLOAT,!1,0,0),a.bindBuffer(a.ARRAY_BUFFER,g.cubeVertTexCoordBuf),
a.vertexAttribPointer(g.texCoordLocation,2,a.FLOAT,!1,0,0),a.bindTexture(a.TEXTURE_2D,g.currentNodes[d].texture),a.drawElements(a.TRIANGLES,6,a.UNSIGNED_SHORT,0));g.drawInProgress=!1}}if(k!==r)return t.toDataURL("image/png")}else for(f=ia/2,k={f:"translate3d(-"+(f+2)+"px, -"+(f+2)+"px, -"+f+"px)",b:"translate3d("+(f+2)+"px, -"+(f+2)+"px, "+f+"px) rotateX(180deg) rotateZ(180deg)",u:"translate3d(-"+(f+2)+"px, -"+f+"px, "+(f+2)+"px) rotateX(270deg)",d:"translate3d(-"+(f+2)+"px, "+f+"px, -"+(f+2)+"px) rotateX(90deg)",
l:"translate3d(-"+f+"px, -"+(f+2)+"px, "+(f+2)+"px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)",r:"translate3d("+f+"px, -"+(f+2)+"px, -"+(f+2)+"px) rotateY(270deg)"},h=1/Math.tan(h/2),h=h*t.width/(z.devicePixelRatio||1)/2+"px",e="perspective("+h+") translateZ("+h+") rotateX("+d+"rad) rotateY("+e+"rad) ",h=Object.keys(k),d=0;6>d;d++)f=I.querySelector(".pnlm-"+h[d]+"face").style,f.webkitTransform=e+k[h[d]],f.transform=e+k[h[d]]};this.isLoading=function(){if(a&&"multires"==u)for(var d=0;d<g.currentNodes.length;d++)if(!g.currentNodes[d].textureLoaded)return!0;
return!1};this.getCanvas=function(){return t}}var h="attribute vec2 a_texCoord;varying vec2 v_texCoord;void main() {gl_Position = vec4(a_texCoord, 0.0, 1.0);v_texCoord = a_texCoord;}",k="attribute vec3 a_vertCoord;attribute vec2 a_texCoord;uniform mat4 u_cubeMatrix;uniform mat4 u_perspMatrix;varying mediump vec2 v_texCoord;void main(void) {gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);v_texCoord = a_texCoord;}",S="precision mediump float;\nuniform float u_aspectRatio;\nuniform float u_psi;\nuniform float u_theta;\nuniform float u_f;\nuniform float u_h;\nuniform float u_v;\nuniform float u_vo;\nconst float PI = 3.14159265358979323846264;\nuniform samplerCube u_image;\nvarying vec2 v_texCoord;\nvoid main() {\nvec3 planePos = vec3(v_texCoord.xy, 0.0);\nplanePos.x *= u_aspectRatio;\nvec3 viewVector = planePos - vec3(0.0,0.0,-u_f);\nfloat sinpsi = sin(-u_psi);\nfloat cospsi = cos(-u_psi);\nfloat sintheta = sin(u_theta);\nfloat costheta = cos(u_theta);\nvec3 viewVectorTheta = viewVector;\nviewVectorTheta.z = viewVector.z * costheta - viewVector.y * sintheta;\nviewVectorTheta.y = viewVector.z * sintheta + viewVector.y * costheta;\nvec3 viewVectorPsi = viewVectorTheta;\nviewVectorPsi.x = viewVectorTheta.x * cospsi - viewVectorTheta.z * sinpsi;\nviewVectorPsi.z = viewVectorTheta.x * sinpsi + viewVectorTheta.z * cospsi;\ngl_FragColor = textureCube(u_image, viewVectorPsi);\n}",
V="precision mediump float;\nuniform float u_aspectRatio;\nuniform float u_psi;\nuniform float u_theta;\nuniform float u_f;\nuniform float u_h;\nuniform float u_v;\nuniform float u_vo;\nuniform float u_rot;\nconst float PI = 3.14159265358979323846264;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvoid main() {\nfloat x = v_texCoord.x * u_aspectRatio;\nfloat y = v_texCoord.y;\nfloat sinrot = sin(u_rot);\nfloat cosrot = cos(u_rot);\nfloat rot_x = x * cosrot - y * sinrot;\nfloat rot_y = x * sinrot + y * cosrot;\nfloat sintheta = sin(u_theta);\nfloat costheta = cos(u_theta);\nfloat a = u_f * costheta - rot_y * sintheta;\nfloat root = sqrt(rot_x * rot_x + a * a);\nfloat lambda = atan(rot_x / root, a / root) + u_psi;\nfloat phi = atan((rot_y * costheta + u_f * sintheta) / root);\nif(lambda > PI)\nlambda = lambda - PI * 2.0;\nif(lambda < -PI)\nlambda = lambda + PI * 2.0;\nvec2 coord = vec2(lambda / PI, phi / (PI / 2.0));\nif(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)\ngl_FragColor = vec4(0, 0, 0, 1.0);\nelse\ngl_FragColor = texture2D(u_image, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));\n}",
oa="varying mediump vec2 v_texCoord;uniform sampler2D u_sampler;void main(void) {gl_FragColor = texture2D(u_sampler, v_texCoord);}";return{renderer:function(d,h,k,r){return new C(d,h,k,r)}}}(window,document);window.requestAnimationFrame||(window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(z,d){window.setTimeout(z,1E3/60)}}());
window.pannellum=function(z,d,r){function C(h,k){function C(){var a=d.createElement("div");a.innerHTML="\x3c!--[if lte IE 9]><i></i><![endif]--\x3e";if(1==a.getElementsByTagName("i").length)B();else{var b;if("cubemap"==c.type){D=[];for(a=0;6>a;a++)D.push(new Image),D[a].crossOrigin="anonymous";q.load.lbox.style.display="block";q.load.lbar.style.display="none"}else if("multires"==c.type)a=JSON.parse(JSON.stringify(c.multiRes)),c.basePath&&c.multiRes.basePath?a.basePath=c.basePath+c.multiRes.basePath:
c.basePath&&(a.basePath=c.basePath),D=a;else if(!0===c.dynamic)D=c.panorama;else{if(c.panorama===r){B("No panorama image was specified.");return}D=new Image}var f=function(a){return/^(?:[a-z]+:)?\/\//i.test(a)|"/"==a[0]};if("cubemap"==c.type)for(var g=6,e=function(){g--;0===g&&V()},l=function(a){var c=d.createElement("a");c.href=a.target.src;c.innerHTML=c.href;B("The file "+c.outerHTML+" could not be accessed.")},a=0;a<D.length;a++)D[a].onload=e,D[a].onerror=l,b=c.cubeMap[a],c.basePath&&!f(b)&&(b=
c.basePath+b),D[a].src=encodeURI(b);else if("multires"==c.type)V();else if(b="",c.basePath&&(b=c.basePath),!0!==c.dynamic){b=f(c.panorama)?c.panorama:b+c.panorama;D.onload=function(){z.URL.revokeObjectURL(this.src);V()};var k=new XMLHttpRequest;k.onloadend=function(){if(200!=k.status){var a=d.createElement("a");a.href=encodeURI(b);a.innerHTML=a.href;B("The file "+a.outerHTML+" could not be accessed.")}oa(this.response);q.load.msg.innerHTML=""};k.onprogress=function(a){if(a.lengthComputable){q.load.lbarFill.style.width=
a.loaded/a.total*100+"%";var c,L;1E6<a.total?(c="MB",L=(a.loaded/1E6).toFixed(2),a=(a.total/1E6).toFixed(2)):1E3<a.total?(c="kB",L=(a.loaded/1E3).toFixed(1),a=(a.total/1E3).toFixed(1)):(c="B",L=a.loaded,a=a.total);q.load.msg.innerHTML=L+" / "+a+" "+c}else q.load.lbox.style.display="block",q.load.lbar.style.display="none"};try{k.open("GET",b,!0)}catch(m){B("There is something wrong with the panorama URL.")}k.responseType="blob";k.send()}h.classList.add("pnlm-grab");h.classList.remove("pnlm-grabbing")}}
function V(){x=new libpannellum.renderer(E,D,c.type,c.dynamic);!0!==c.dynamic&&(D=r);va||(va=!0,h.addEventListener("mousedown",ya,!1),d.addEventListener("mousemove",ma,!1),d.addEventListener("mouseup",O,!1),h.addEventListener("mousewheel",t,!1),h.addEventListener("DOMMouseScroll",t,!1),h.addEventListener("mozfullscreenchange",n,!1),h.addEventListener("webkitfullscreenchange",n,!1),h.addEventListener("msfullscreenchange",n,!1),h.addEventListener("fullscreenchange",n,!1),z.addEventListener("resize",
ba,!1),h.addEventListener("keydown",g,!1),h.addEventListener("keyup",ia,!1),h.addEventListener("blur",a,!1),d.addEventListener("mouseleave",O,!1),h.addEventListener("touchstart",Z,!1),h.addEventListener("touchmove",$,!1),h.addEventListener("touchend",aa,!1),h.addEventListener("pointerdown",ha,!1),h.addEventListener("pointermove",na,!1),h.addEventListener("pointerup",U,!1),h.addEventListener("pointerleave",U,!1),z.navigator.pointerEnabled&&(h.style.touchAction="none"));try{x.init(c.haov*Math.PI/180,
c.vaov*Math.PI/180,c.vOffset*Math.PI/180,e)}catch(L){"webgl error"==L.type||"no webgl"==L.type?B():"webgl size error"==L.type&&B("This panorama is too big for your device! It's "+L.width+"px wide, but your device only supports images up to "+L.maxWidth+"px wide. Try another device. (If you're the author, try scaling down the image.)")}setTimeout(function(){},500)}function oa(a){var b=new FileReader;b.addEventListener("loadend",function(){var d=b.result;if(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)){var f=
d.indexOf("\u00ff\u00c2");(0>f||65536<f)&&B("Due to iOS 8's broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).")}f=d.indexOf("<x:xmpmeta");if(-1<f&&!0!==c.ignoreGPanoXMP){var g=d.substring(f,d.indexOf("</x:xmpmeta>")+12),e=function(a){var c;0<=g.indexOf(a+'="')?(c=g.substring(g.indexOf(a+'="')+a.length+2),c=c.substring(0,c.indexOf('"'))):0<=g.indexOf(a+">")&&(c=g.substring(g.indexOf(a+">")+a.length+1),c=c.substring(0,c.indexOf("<")));
return c!==r?Number(c):null},d=e("GPano:FullPanoWidthPixels"),f=e("GPano:CroppedAreaImageWidthPixels"),h=e("GPano:FullPanoHeightPixels"),k=e("GPano:CroppedAreaImageHeightPixels"),l=e("GPano:CroppedAreaTopPixels"),m=e("GPano:PoseHeadingDegrees"),n=e("GPano:PosePitchDegrees"),e=e("GPano:PoseRollDegrees");null!==d&&null!==f&&null!==h&&null!==k&&null!==l&&(c.haov=f/d*360,c.vaov=k/h*180,c.vOffset=-180*((l+k/2)/h-0.5),null!==m&&(c.northOffset=m,!1!==c.compass&&(c.compass=!0)),null!==n&&null!==e&&(D.horizonPitch=
n/180*Math.PI,D.horizonRoll=e/180*Math.PI))}D.src=z.URL.createObjectURL(a)});b.readAsBinaryString!==r?b.readAsBinaryString(a):b.readAsText(a)}function B(a){q.errorMsg.innerHTML=a!==r?"<p>"+a+"</p>":"<p>Your browser does not have the necessary WebGL support to display this panorama.</p>";w.load.style.display="none";q.load.box.style.display="none";q.errorMsg.style.display="table";E.style.display="none"}function m(a){var c=u(a);N.style.left=c.x+"px";N.style.top=c.y+"px";clearTimeout(m.t1);clearTimeout(m.t2);
N.style.display="block";N.style.opacity=1;m.t1=setTimeout(function(){N.style.opacity=0},2E3);m.t2=setTimeout(function(){N.style.display="none"},2500);a.preventDefault()}function u(a){var c=h.getBoundingClientRect(),b={};b.x=a.clientX-c.left;b.y=a.clientY-c.top;return b}function ya(a){a.preventDefault();h.focus();if(F){var b=u(a);c.hotSpotDebug&&(a=fa(a),console.log("Pitch: "+a[0]+", Yaw: "+a[1]+", Center Pitch: "+c.pitch+", Center Yaw: "+c.yaw+", HFOV: "+c.hfov));c.autoRotate=!1;Q=!0;R=Date.now();
W=b.x;X=b.y;ja=c.yaw;ka=c.pitch;h.classList.add("pnlm-grabbing");h.classList.remove("pnlm-grab");K()}}function fa(a){var b=u(a),d=x.getCanvas();a=b.x/d.width*2-1;var f=(1-b.y/d.height*2)*d.height/d.width,e=1/Math.tan(c.hfov*Math.PI/360),g=Math.sin(c.pitch*Math.PI/180),h=Math.cos(c.pitch*Math.PI/180),b=e*h-f*g,d=Math.sqrt(a*a+b*b),f=180*Math.atan((f*h+e*g)/d)/Math.PI;a=180*Math.atan2(a/d,b/d)/Math.PI+c.yaw;return[f,a]}function ma(a){if(Q&&F){R=Date.now();var b=x.getCanvas();a=u(a);var d=180*(Math.atan(W/
b.width*2-1)-Math.atan(a.x/b.width*2-1))/Math.PI*c.hfov/90+ja;G=(d-c.yaw)%360*0.2;c.yaw=d;d=360*Math.atan(Math.tan(c.hfov/360*Math.PI)*b.height/b.width)/Math.PI;b=180*(Math.atan(a.y/b.height*2-1)-Math.atan(X/b.height*2-1))/Math.PI*d/90+ka;H=0.2*(b-c.pitch);c.pitch=b}}function O(){Q&&(Q=!1,15<Date.now()-R&&(H=G=0),h.classList.add("pnlm-grab"),h.classList.remove("pnlm-grabbing"))}function Z(a){if(F){var b=u(a.targetTouches[0]);W=b.x;X=b.y;2==a.targetTouches.length&&(a=u(a.targetTouches[1]),W+=0.5*(a.x-
b.x),X+=0.5*(a.y-b.y),ca=Math.sqrt((b.x-a.x)*(b.x-a.x)+(b.y-a.y)*(b.y-a.y)));Q=!0;R=Date.now();ja=c.yaw;ka=c.pitch;K()}}function $(a){a.preventDefault();F&&(R=Date.now());if(Q&&F){var b=u(a.targetTouches[0]),d=b.x,f=b.y;2==a.targetTouches.length&&-1!=ca&&(a=u(a.targetTouches[1]),d+=0.5*(a.x-b.x),f+=0.5*(a.y-b.y),b=Math.sqrt((b.x-a.x)*(b.x-a.x)+(b.y-a.y)*(b.y-a.y)),s(c.hfov+0.1*(ca-b)),ca=b);d=0.1*(W-d)+ja;G=(d-c.yaw)%360*0.2;c.yaw=d;f=0.1*(f-X)+ka;H=0.2*(f-c.pitch);c.pitch=f}}function aa(){Q=!1;150<
Date.now()-R&&(H=G=0);ca=-1}function ha(a){"touch"==a.pointerType&&(T.push(a.pointerId),da.push({clientX:a.clientX,clientY:a.clientY}),a.targetTouches=da,Z(a),a.preventDefault())}function na(a){if("touch"==a.pointerType)for(var c=0;c<T.length;c++)if(a.pointerId==T[c]){da[c]={clientX:a.clientX,clientY:a.clientY};a.targetTouches=da;$(a);break}}function U(a){if("touch"==a.pointerType){for(var c=!1,b=0;b<T.length;b++)a.pointerId==T[b]&&(T[b]=r),T[b]&&(c=!0);c||(T=[],da=[],aa());a.preventDefault()}}function t(a){a.preventDefault();
F&&(R=Date.now(),a.wheelDeltaY?(s(c.hfov-0.05*a.wheelDeltaY),J=0>a.wheelDelta?1:-1):a.wheelDelta?(s(c.hfov-0.05*a.wheelDelta),J=0>a.wheelDelta?1:-1):a.detail&&(s(c.hfov+1.5*a.detail),J=0<a.detail?1:-1),K())}function g(a){a.preventDefault();c.autoRotate=!1;var b=a.keycode;a.which&&(b=a.which);27==b?la&&v():I(b,!0)}function a(){for(var a=0;10>a;a++)p[a]=!1}function ia(a){a.preventDefault();var c=a.keycode;a.which&&(c=a.which);I(c,!1)}function I(a,c){var b=!1;switch(a){case 109:case 189:case 17:p[0]!=
c&&(b=!0);p[0]=c;break;case 107:case 187:case 16:p[1]!=c&&(b=!0);p[1]=c;break;case 38:p[2]!=c&&(b=!0);p[2]=c;break;case 87:p[6]!=c&&(b=!0);p[6]=c;break;case 40:p[3]!=c&&(b=!0);p[3]=c;break;case 83:p[7]!=c&&(b=!0);p[7]=c;break;case 37:p[4]!=c&&(b=!0);p[4]=c;break;case 65:p[8]!=c&&(b=!0);p[8]=c;break;case 39:p[5]!=c&&(b=!0);p[5]=c;break;case 68:p[9]!=c&&(b=!0),p[9]=c}b&&c&&(Y="undefined"!==typeof performance&&performance.now()?performance.now():Date.now(),K())}function ba(){x.resize();K();n()}function K(){pa||
(pa=!0,M())}function M(){var a;F&&(180<c.yaw?c.yaw-=360:-180>c.yaw&&(c.yaw+=360),a=c.yaw,c.yaw=Math.max(c.minYaw,Math.min(c.maxYaw,c.yaw)),!1!==c.autoRotate&&a!=c.yaw&&(c.autoRotate*=-1),c.pitch=Math.max(c.minPitch,Math.min(c.maxPitch,c.pitch)),x.render(c.pitch*Math.PI/180,c.yaw*Math.PI/180,c.hfov*Math.PI/180),ta(),c.compass&&(ea.style.transform="rotate("+(-c.yaw-c.northOffset)+"deg)",ea.style.webkitTransform="rotate("+(-c.yaw-c.northOffset)+"deg)"));if(Q)requestAnimationFrame(M);else if(p[0]||p[1]||
p[2]||p[3]||p[4]||p[5]||p[6]||p[7]||p[8]||p[9]||c.autoRotate||0.01<Math.abs(G)||0.01<Math.abs(H)||0.01<Math.abs(J)){if(F){a=c.pitch;var b=c.yaw,d=c.hfov,f;f="undefined"!==typeof performance&&performance.now()?performance.now():Date.now();Y===r&&(Y=f);var e=(f-Y)*c.hfov/1700,e=Math.min(e,1);p[0]&&!0===c.keyboardZoom&&s(c.hfov+(0.8*J+0.5)*e);p[1]&&!0===c.keyboardZoom&&s(c.hfov+(0.8*J-0.2)*e);if(p[2]||p[6])c.pitch+=(0.8*H+0.2)*e;if(p[3]||p[7])c.pitch+=(0.8*H-0.2)*e;if(p[4]||p[8])c.yaw+=(0.8*G-0.2)*e;
if(p[5]||p[9])c.yaw+=(0.8*G+0.2)*e;var g=Date.now()-R;c.autoRotate&&g>c.autoRotateInactivityDelay&&!1!==c.autoRotateStopDelay&&(1E-6<e&&(c.yaw-=c.autoRotate/60*e),c.autoRotateStopDelay&&(c.autoRotateStopDelay-=f-Y,0>=c.autoRotateStopDelay&&(c.autoRotateStopDelay=!1)));0<e&&(p[4]||p[5]||p[8]||p[9]||(c.yaw+=G*e*0.85),p[2]||p[3]||p[6]||p[7]||(c.pitch+=H*e*0.85),p[0]||p[1]||s(c.hfov+J*e*0.85));Y=f;0<e&&(G=0.8*G+(c.yaw-b)/e*0.2,H=0.8*H+(c.pitch-a)/e*0.2,J=0.8*J+(c.hfov-d)/e*0.2,G=Math.min(5,Math.max(G,
-5)),H=Math.min(5,Math.max(H,-5)),J=Math.min(5,Math.max(J,-5)));p[0]&&p[0]&&(J=0);(p[2]||p[6])&&(p[3]||p[7])&&(H=0);(p[4]||p[8])&&(p[5]||p[9])&&(G=0)}requestAnimationFrame(M)}else x&&(x.isLoading()||!0===c.dynamic&&wa)?requestAnimationFrame(M):pa=!1}function e(){if(y!==r&&(y.destroy(),c.sceneFadeDuration&&y.fadeImg!==r)){y.fadeImg.style.opacity=0;var a=y.fadeImg;y=r;setTimeout(function(){E.removeChild(a)},c.sceneFadeDuration)}ea.style.display=c.compass?"inline":"none";P();q.load.box.style.display=
"none";l!==r&&(E.removeChild(l),l=r);F=!0;K()}function P(){qa||(c.hotSpots?(c.hotSpots=c.hotSpots.sort(function(a,c){return a.pitch<c.pitch}),c.hotSpots.forEach(function(a){var c=d.createElement("div");c.className="pnlm-hotspot pnlm-tooltip pnlm-sprite pnlm-"+ga(a.type);var b=d.createElement("span");a.text&&(b.innerHTML=ga(a.text));var e;if(a.URL)e=d.createElement("a"),e.href=encodeURI(a.URL),e.target="_blank",E.appendChild(e),c.style.cursor="pointer",b.style.cursor="pointer",e.appendChild(c);else if(a.video)e=
d.createElement("video"),e.src=encodeURI(a.video),e.controls=!0,e.style.width=a.width+"px",E.appendChild(c),b.appendChild(e);else if(a.image){e=d.createElement("a");e.href=encodeURI(a.image);e.target="_blank";b.appendChild(e);var f=d.createElement("img");f.src=encodeURI(a.image);f.style.width=a.width+"px";f.style.paddingTop="5px";E.appendChild(c);e.appendChild(f);b.style.maxWidth="initial"}else a.sceneId&&(c.onclick=function(){A(a.sceneId,a.targetPitch,a.targetYaw);return!1},c.ontouchend=function(){A(a.sceneId,
a.targetPitch,a.targetYaw);return!1},c.style.cursor="pointer",b.style.cursor="pointer"),E.appendChild(c);c.appendChild(b);b.style.width=b.scrollWidth-20+"px";b.style.marginLeft=-(b.scrollWidth-26)/2+"px";b.style.marginTop=-b.scrollHeight-12+"px";a.div=c})):c.hotSpots=[],qa=!0,ta())}function ta(){c.hotSpots.forEach(function(a){var b=Math.sin(a.pitch*Math.PI/180),e=Math.cos(a.pitch*Math.PI/180),d=Math.sin(c.pitch*Math.PI/180),f=Math.cos(c.pitch*Math.PI/180),g=Math.cos((-a.yaw+c.yaw)*Math.PI/180),h=
Math.tan(c.hfov*Math.PI/360),k=b*d+e*g*f;if(90>=a.yaw&&-90<a.yaw&&0>=k||(90<a.yaw||-90>=a.yaw)&&0>=k)a.div.style.visibility="hidden";else{a.div.style.visibility="visible";var l=x.getCanvas(),m=l.width/(z.devicePixelRatio||1),l=l.height/(z.devicePixelRatio||1),b="translate("+(-m/h*Math.sin((-a.yaw+c.yaw)*Math.PI/180)*e/k/2+m/2-13)+"px, "+(-m/h*(b*f-e*g*d)/k/2+l/2-13)+"px) translateZ(9999px)";a.div.style.webkitTransform=b;a.div.style.MozTransform=b;a.div.style.transform=b}})}function f(a){c={};var b,
e=["haov","vaov","vOffset","northOffset"];for(b in ra)ra.hasOwnProperty(b)&&(c[b]=ra[b]);for(b in k.default)k.default.hasOwnProperty(b)&&(c[b]=k.default[b],0<=e.indexOf(b)&&(c.ignoreGPanoXMP=!0));if(null!==a&&""!==a&&k.scenes&&k.scenes[a]){var d=k.scenes[a];for(b in d)d.hasOwnProperty(b)&&(c[b]=d[b],0<=e.indexOf(b)&&(c.ignoreGPanoXMP=!0));c.activeScene=a}for(b in k)k.hasOwnProperty(b)&&(c[b]=k[b],0<=e.indexOf(b)&&(c.ignoreGPanoXMP=!0))}function b(){if("preview"in c){var a=c.preview;c.basePath&&(a=
c.basePath+a);l=d.createElement("div");l.className="pnlm-preview-img";l.style.backgroundImage="url('"+encodeURI(a)+"')";E.appendChild(l)}for(var b in c)if(c.hasOwnProperty(b))switch(b){case "title":q.title.innerHTML=ga(c[b]);q.container.style.display="inline";break;case "author":q.author.innerHTML="by "+ga(c[b]);q.container.style.display="inline";break;case "fallback":q.errorMsg.innerHTML='<p>Your browser does not support WebGL.<br><a href="'+encodeURI(c[b])+'" target="_blank">Click here to view this panorama in an alternative viewer.</a></p>';
break;case "hfov":s(c[b]);break;case "pitch":c.pitch=Math.max(c.minPitch,Math.min(c.maxPitch,c.pitch));break;case "autoLoad":!0===c[b]&&y===r&&(q.load.box.style.display="inline",w.load.style.display="none",C());break;case "autoRotate":c.autoRotate=c[b];break;case "autoRotateInactivityDelay":c.autoRotateInactivityDelay=c[b];break;case "autoRotateStopDelay":c.autoRotateStopDelay=c[b];break;case "showZoomCtrl":w.zoom.style.display=c[b]?"block":"none";break;case "showFullscreenCtrl":w.fullscreen.style.display=
c[b]&&("fullscreen"in d||"mozFullScreen"in d||"webkitIsFullScreen"in d||"msFullscreenElement"in d)?"block":"none"}}function v(){if(F&&!xa)if(la)d.exitFullscreen?d.exitFullscreen():d.mozCancelFullScreen?d.mozCancelFullScreen():d.webkitCancelFullScreen?d.webkitCancelFullScreen():d.msExitFullscreen&&d.msExitFullscreen();else try{h.requestFullscreen?h.requestFullscreen():h.mozRequestFullScreen?h.mozRequestFullScreen():h.msRequestFullscreen?h.msRequestFullscreen():h.webkitRequestFullScreen()}catch(a){}}
function n(){d.fullscreen||d.mozFullScreen||d.webkitIsFullScreen||d.msFullscreenElement?(w.fullscreen.classList.add("pnlm-fullscreen-toggle-button-active"),la=!0):(w.fullscreen.classList.remove("pnlm-fullscreen-toggle-button-active"),la=!1)}function s(a){var b=c.minHfov;"multires"==c.type&&x&&(b=Math.min(b,x.getCanvas().width/(c.multiRes.cubeResolution/90*0.9)));b>=c.maxHfov?console.log("HFOV bounds do not make sense (minHfov >= maxHfov)."):c.hfov=a<b?b:a>c.maxHfov?c.maxHfov:a}function ua(){q.load.box.style.display=
"none";q.errorMsg.style.display="none";xa=!1;w.load.style.display="none";q.load.box.style.display="inline";C();} 


function A(a,e,d){F=!1;y=x;var g;if(c.sceneFadeDuration){g=new Image;g.className="pnlm-fade-img";g.style.transition="opacity "+c.sceneFadeDuration/1E3+"s";g.style.width="100%";g.style.height="100%";var h=x.render(c.pitch*Math.PI/180,c.yaw*Math.PI/180,c.hfov*Math.PI/180,!0);h!==r&&(g.src=h);E.appendChild(g);y.fadeImg=g}e="same"===e?c.pitch:e;d="same"===d?c.yaw:"sameAzimuth"===d?c.yaw+c.northOffset-
k.scenes[a].northOffset:d;if(c.hotSpots)for(g=0;g<c.hotSpots.length;g++){for(h=c.hotSpots[g].div;h.parentNode!=E;)h=h.parentNode;E.removeChild(h);delete c.hotSpots[g].div}qa=!1;delete c.hotSpots;f(a);b();e&&(c.pitch=e);d&&(c.yaw=d);ua()}function ga(a){return String(a).replace(/&/g,"&amp;").replace('"',"&quot;").replace("'","&#39;").replace("<","&lt;").replace(">","&gt;").replace("/","&#x2f;")}var c,x,y,l,Q=!1,R=Date.now(),W=0,X=0,ca=-1,ja=0,ka=0,p=Array(10),la=!1,F=!1,xa=!1,va=!1,D,Y,G=0,H=0,J=0,
pa=!1,wa=!1,qa=!1,ra={hfov:100,minHfov:50,maxHfov:120,pitch:0,minPitch:-85,maxPitch:85,yaw:0,minYaw:-360,maxYaw:360,haov:360,vaov:180,vOffset:0,autoRotate:!1,autoRotateInactivityDelay:-1,type:"equirectangular",northOffset:0,showFullscreenCtrl:!0,dynamic:!1,keyboardZoom:!0};h="string"===typeof h?d.getElementById(h):h;h.className+=" pnlm-container";h.tabIndex=0;var E=d.createElement("div");E.className="pnlm-render-container";h.appendChild(E);var sa=d.createElement("div");sa.className="pnlm-dragfix";
h.appendChild(sa);var N=d.createElement("span");N.className="pnlm-about-msg";N.innerHTML='<a href="https://pannellum.org/" target="_blank">Pannellum</a> 2.2.0';h.appendChild(N);sa.addEventListener("contextmenu",m);var q={};q.container=d.createElement("div");q.container.className="pnlm-panorama-info";q.title=d.createElement("div");q.title.className="pnlm-title-box";q.container.appendChild(q.title);q.author=d.createElement("div");q.author.className="pnlm-author-box";q.container.appendChild(q.author);
h.appendChild(q.container);q.load={};q.load.box=d.createElement("div");q.load.box.className="pnlm-load-box";q.load.box.innerHTML="<p>Loading...</p>";q.load.lbox=d.createElement("div");q.load.lbox.className="pnlm-lbox";q.load.lbox.innerHTML='<div class="pnlm-loading"></div>';q.load.box.appendChild(q.load.lbox);q.load.lbar=d.createElement("div");q.load.lbar.className="pnlm-lbar";q.load.lbarFill=d.createElement("div");q.load.lbarFill.className="pnlm-lbar-fill";q.load.lbar.appendChild(q.load.lbarFill);
q.load.box.appendChild(q.load.lbar);q.load.msg=d.createElement("p");q.load.msg.className="pnlm-lmsg";q.load.box.appendChild(q.load.msg);h.appendChild(q.load.box);q.errorMsg=d.createElement("div");q.errorMsg.className="pnlm-error-msg pnlm-info-box";h.appendChild(q.errorMsg);var w={};w.load=d.createElement("div");w.load.className="pnlm-load-button";w.load.innerHTML="<p>Click to<br>Load<br>Panorama<p>";w.load.addEventListener("click",ua);h.appendChild(w.load);w.zoom=d.createElement("div");w.zoom.className=
"pnlm-zoom-controls pnlm-controls";w.zoomIn=d.createElement("div");w.zoomIn.className="pnlm-zoom-in pnlm-sprite pnlm-control";w.zoomIn.addEventListener("click",function(){F&&s(c.hfov-5)});w.zoom.appendChild(w.zoomIn);w.zoomOut=d.createElement("div");w.zoomOut.className="pnlm-zoom-out pnlm-sprite pnlm-control";w.zoomOut.addEventListener("click",function(){F&&s(c.hfov+5)});w.zoom.appendChild(w.zoomOut);h.appendChild(w.zoom);w.fullscreen=d.createElement("div");w.fullscreen.addEventListener("click",v);
w.fullscreen.className="pnlm-fullscreen-toggle-button pnlm-sprite pnlm-fullscreen-toggle-button-inactive pnlm-controls pnlm-control";(d.fullscreenEnabled||d.mozFullScreenEnabled||d.webkitFullscreenEnabled)&&h.appendChild(w.fullscreen);var ea=d.createElement("div");ea.className="pnlm-compass pnlm-controls pnlm-control";h.appendChild(ea);k.firstScene?f(k.firstScene):k.default&&k.default.firstScene?f(k.default.firstScene):f(null);b();var T=[],da=[];this.getPitch=function(){return c.pitch};this.setPitch=
function(a){c.pitch=Math.max(c.minPitch,Math.min(c.maxPitch,a));return this};this.getPitchBounds=function(){return[c.minPitch,c.maxPitch]};this.setPitchBounds=function(a){c.minPitch=Math.max(-90,Math.min(a[0],90));c.maxPitch=Math.max(-90,Math.min(a[1],90));return this};this.getYaw=function(){return c.yaw};this.setYaw=function(a){for(;180<a;)a-=360;for(;-180>a;)a+=360;c.yaw=Math.max(c.minYaw,Math.min(c.maxYaw,a));return this};this.getYawBounds=function(){return[c.minYaw,c.maxYaw]};this.setYawBounds=
function(a){c.minYaw=Math.max(-360,Math.min(a[0],360));c.maxYaw=Math.max(-360,Math.min(a[1],360));return this};this.getHfov=function(){return c.hfov};this.setHfov=function(a){s(a);return this};this.getHfovBounds=function(){return[c.minHfov,c.maxHfov]};this.setHfovBounds=function(a){c.minHfov=Math.max(0,a[0]);c.maxHfov=Math.max(0,a[1]);return this};this.getRenderer=function(){return x};this.setUpdate=function(a){wa=!0===a;x===r?V():requestAnimationFrame(M);return this};this.mouseEventToCoords=function(a){return fa(a)}}
return{viewer:function(d,k){return new C(d,k)}}}(window,document);function anError(z){var d=document.createElement("div");d.className="pnlm-info-box";d.innerHTML="<p>"+z+"</p>";document.getElementById("container").appendChild(d)}

/*function parseURLParameters(){var z=decodeURI(window.location.href).split("?");*/
function parseURLParameters(){var z=["https://cdn.pannellum.org/2.2/pannellum.htm", ("panorama=" + imgPath + "&autoLoad=true")];

z.shift();if(1>z.length)anError("No configuration options were specified.");else{for(var z=z[0].split("&"),d="{",r=0;r<z.length;r++){var C=z[r].split("=")[0],h=z[r].split("=")[1],d=d+('"'+C+'":');switch(C){case "hfov":case "pitch":case "yaw":case "haov":case "vaov":case "vOffset":case "autoRotate":d+=h;break;case "autoLoad":case "ignoreGPanoXMP":d+=JSON.parse(h);break;case "tour":console.log("The `tour` parameter is deprecated and will be removed. Use the `config` parameter instead.");
case "author":case "title":case "firstScene":case "fallback":case "preview":case "panorama":case "config":d+='"'+decodeURIComponent(h)+'"';break;default:anError("An invalid configuration parameter was specified: "+C)}r<z.length-1&&(d+=",")}var k=JSON.parse(d+"}"),S;k.tour&&(k.config=k.tour);k.config?(S=new XMLHttpRequest,S.onload=function(){if(200!=S.status){var d=document.createElement("a");d.href=k.config;d.innerHTML=d.href;anError("The file "+d.outerHTML+" could not be accessed.")}else{d=JSON.parse(S.responseText);
d.basePath=k.config.substring(0,k.config.lastIndexOf("/")+1);for(var h in d)k.hasOwnProperty(h)||(k[h]=d[h]);"title"in k&&(document.title=k.title);pannellum.viewer("container",k)}},S.open("GET",k.config),S.send()):("title"in k&&(document.title=k.title),pannellum.viewer("container",k))}}"file:"==window.location.protocol?anError("Due to browser security restrictions, Pannellum can't be run from the local filesystem; some sort of web server must be used."):parseURLParameters();

if (lumScale) {drawScale();} 
window.onerror=new Function("return true")
var G, Om, PE, iHTML, Nstr, enableSelect=false, ClkT=IE=IE6=IE10=0, noComm=1
var sAgent = navigator.userAgent.toLowerCase()
if (sAgent.indexOf("msie")!=-1) IE=1
if (sAgent.indexOf("msie 6")!=-1) IE6=1
if (sAgent.indexOf("msie 10")!=-1) IE10=1

BF="<body bgcolor=ffcc66></body>"
DA=[ "未稅","含稅"]
NBtmp=new Array()
nOut=new Array()
nStr=new Array()
m=new Array
clr=new Array('eef','efe','fee','ffe','fef','eff')

function Ajax(prog, url, B, C){
var Http_Req = false
if (window.XMLHttpRequest) Http_Req = new XMLHttpRequest();
else if (window.ActiveXObject) Http_Req = new ActiveXObject("Microsoft.XMLHTTP");
if (Http_Req){
  var M=(url || B) ? "POST" : "HEAD"
  Http_Req.open(M, prog, false)
  if (B){
    Http_Req.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    Http_Req.onreadystatechange=function(){
      if (Http_Req.readyState==4 && Http_Req.status==200){
        if (B==1) eval(Http_Req.responseText)
        else
          if (C) C.innerHTML=Http_Req.responseText
          else document.getElementById(B).innerHTML=Http_Req.responseText}
        }
    }
  Http_Req.send((url)?url:null)
  }
}
function ReComm(a){
if (a.title=="關閉熱賣商品推薦"){
 noComm=1
 a.src="/img/recommend.gif"
 a.title="啟動熱賣商品推薦"
}else{
 noComm=0
 a.src="/img/norecommend.gif"
 a.title="關閉熱賣商品推薦"
}
}
function getData(parm, i, j, Txt){
var Http_Req = false
if (window.XMLHttpRequest) Http_Req = new XMLHttpRequest();
else if (window.ActiveXObject) Http_Req = new ActiveXObject("Microsoft.XMLHTTP");
m[i][j]=Om="<br>　請稍後 ..."
if(Http_Req){
 Http_Req.open("POST", "eva-img.php")
 Http_Req.onreadystatechange = function(){
  if (Http_Req.readyState == 4 && Http_Req.status == 200){
    m[i][j]=Http_Req.responseText
    if (i==1||i==2||i==3){
	NBtmp[Txt]=document.getElementById("nb"+i).innerHTML=m[i][j]
	}
//    else
//	if (Om!=m[i][j]&&document.getElementById("doc").firstChild) document.getElementById("doc").firstChild.document.body.innerHTML=m[i][j]
  }
 }
 Http_Req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
 Http_Req.send("G="+parm+DD+((IE&&!IE10)?"&IE=1":""))}
}
function MM(e){
if (e){tip.style.left=(e.pageX-250)+"px";tip.style.top=(e.pageY+24)+"px"}
else {tip.style.pixelLeft=event.clientX-250;tip.style.pixelTop=event.clientY+document.body.scrollTop+22}
}
function Tip(E,e){
E.onmouseout=new Function('this.parentNode.parentNode.style.backgroundColor=tip.innerHTML=""')
PE=E.parentNode.parentNode
PE.style.backgroundColor="#bcd"
if (noComm) return false
var A = new Array()
var O=PE.cells[0].firstChild.nodeValue+". "+PE.cells[1].firstChild.nodeValue+" - 近期熱賣的商品", l=E.options.length, t=0, s=""
var h, i, j, w=O.length
for (i=1; i<l; i++)
 if (E.options[i].text.indexOf(" 熱賣")>-1){
   A[t]=E.options[i].text.replace(" 熱賣","")
   if (A[t].length>w) w=A[t].length
   t++}
for(i=A.length; i; j=parseInt(Math.random()*i), h=A[--i], A[i]=A[j], A[j]=h);
h = (t > 6) ? 6 : t
for (i=0; i<h; i++) s+=((i%2)==0) ? "<tt>"+A[i]+"</tt>" : "<tt class=t>"+A[i]+"</tt>"
if (s){ s = (h < 7)
 ? "<table id=iTable cellspacing=0 bgcolor=ddeeee style='border:1px solid #357'><tr><th>"+O+"共有 "+t+" 樣"+((h!=t)?"，推薦 6 樣":"")+"</th></tr><tr><td>"+s+"</table>"
 : "<table id=iTable cellspacing=0 bgcolor=ddeeee style='border:1px solid #357'><tr><th>"+O+"共有 "+t+" 樣</th></tr><tr style='position:absolute;visibility:hidden'><td>"+s+"</td></tr><tr><td><div><marquee width=100% height=160 direction=up scrollamount=1 scrolldelay=60>"+s+"</marquee></div></td></tr></table>"}
else
  s="<table id=iTable cellspacing=0 bgcolor=ddeeee style='border:1px solid;border-color:eee 222 222 eee'><tr><th nowrap>"+PE.cells[0].innerHTML+". "+PE.cells[1].firstChild.nodeValue+" "+E.options[0].text+"</table>"
iHTML = '<html><head><meta http-equiv=content-type content="text/html; charset=big5"><style>th{background-color:#357;color:white;padding:3 4 1 4;font-weight:normal}.t{background-color:#abc;color:#012}tt{font-size:11pt;padding-left:5;padding-right:5;padding-top:2;white-space:nowrap;display:block}</style></head><body bgcolor=transparent text=445566 style="overflow:hidden;margin:0" onload="F=top.document.getElementsByTagName(\'iframe\');F[0].style.width=iTable.offsetWidth;F[0].style.height=iTable.offsetHeight">'+s
E.onmousemove=MM
if (!IE) MM(e)
document.getElementById("tip").innerHTML="<iframe frameborder=0 height="+(22*h+60)+" width="+(w*11+30)+" src='javascript:parent.iHTML'></iframe>"
}
function popW(i,j,e){
iHTML = '<html><head></head><meta http-equiv=content-type content="text/html; charset=big5"><body style="margin:0;overflow:hidden;border:5px ridge orange;filter:Alpha(Opacity=20);-moz-opacity:0.2;opacity:0.2">'+m[i][j]
if (e.pageX){
var E=e.target
PE=E
if (E.parentNode.previousSibling){
 var k, Px=E.parentNode.parentNode, l=Px.childNodes.length
 for (k=1; k<l; k++) if (Px.children[k].firstChild==E) PE=Itag[(i-1)*2].children[k-1]
 }
PE.style.backgroundColor=E.style.backgroundColor="#fc6"
E.onmouseout=new Function('PE.style.backgroundColor=this.style.backgroundColor=doc.innerHTML=""')

document.getElementById("doc").style.left=(e.pageX-524)+"px"
document.getElementById("doc").style.top=((e.pageY-document.body.scrollTop)/20+document.body.scrollTop+document.body.clientHeight/50)+"px"
document.getElementById("doc").innerHTML="<iframe frameborder=0 height=466 width=470 src='javascript:parent.iHTML'></iframe>"
} else {
var E=e.srcElement
PE=E
if (E.parentNode.previousSibling){
 var k, Px=E.parentNode.parentNode, l=Px.childNodes.length
 for (k=1; k<l; k++) if (Px.children[k].firstChild==E) PE=Itag[(i-1)*2].children[k-1]
 }
PE.style.backgroundColor=E.style.backgroundColor="#fc6"
E.onmouseout=new Function('PE.style.backgroundColor=this.style.backgroundColor=doc.innerHTML=""')
doc.style.pixelLeft=e.clientX-524
doc.style.pixelTop=e.clientY*document.body.clientHeight/4000+document.body.scrollTop
doc.innerHTML="<iframe frameborder=0 height=466 width=470 src='javascript:parent.iHTML'></iframe>"
}
}
function ReadImg(a){
ShowPic.G.value=a
ShowPic.submit()
}
function Count(a){
if (a){
var sum3=Math.round(a/.97)
var sum6=Math.round(a/.94)
var sum12=Math.round(a/.92)
var sum24=Math.round(a/.88)
document.title="原價屋估價 $"+a
document.getElementById("ins0").firstChild.nodeValue=Math.round(a*1.02)
document.getElementById("ins3").firstChild.nodeValue=Math.round(sum3/3)
document.getElementById("ins6").firstChild.nodeValue=Math.round(sum6/6)
document.getElementById("ins12").firstChild.nodeValue=Math.round(sum12/12)
document.getElementById("ins24").firstChild.nodeValue=Math.round(sum24/24)
}else{
  document.title="原價屋線上估價-含稅"
  document.getElementById("wat").firstChild.nodeValue=document.getElementById("ins3").firstChild.nodeValue=document.getElementById("ins6").firstChild.nodeValue=document.getElementById("ins12").firstChild.nodeValue=document.getElementById("ins24").firstChild.nodeValue=0}
}
function cnt(i){
var E=document.getElementsByName("n"+i)[0], O=E.options[E.selectedIndex].parentNode, a=d=g=r=w=two=0
var j,k,p=E.value
document.getElementsByName("u"+i)[0].nextSibling.className = (E.selectedIndex==0) ? "v" : "h"
W=eval('w'+i+'[p]')
D=eval('d'+i+'[p]')
G=eval('g'+i+'[p]')
p=eval('c'+i+'[p]')    
j=eval("S.u"+i+".value")
var t=p*j, O1=eval('p'+i), O2=eval('t'+i), O3=eval('k'+i+'.children[0]')
O1.children[0].innerHTML = (p!=0) ? p : ""
O2.children[0].innerHTML = (t) ? t : ""
Ktag[i-1].children[0].innerHTML = W*j
Vtag[i-1].children[0].innerHTML = D*j
if (E.name.substring(0,1)=="n")
 O1.parentNode.cells[7].children[0].innerHTML=(O.tagName=="OPTGROUP") ? O.label : ""
for (j=1; j<=J; j++){
 p=eval('t'+j)
 var l=p.childNodes.length
 for (k=0; k<l; k++){
  t=p.children[k].innerHTML
  if (t){
   a+=parseInt(t)
   w+=parseInt(Ktag[j-1].children[k].innerHTML)
   d+=parseInt(Vtag[j-1].children[k].innerHTML)
// if (j==4||j==6||j==7||j==15) r=1    紅
// if (j==5||j==12||j==13||j==14) g=1    綠
   if (j==5||j==12) g=1
   two++
//alert(j)
   }
 }
}
S.tot.value=(a) ? a : ""
document.getElementById("wat").innerHTML=w
//if ((g&&r)||two>1){ 有任搭
//if ((g&&r)||two>0){ 酷幣
if ((!g&&(two>0))||two>1){
  S.discount.value=(d) ? d : ""
  S.disprice.value=a-d
  S.tot.style.textDecoration="line-through"
  Count(S.disprice.value)
  S.bingo.src="/img/any3.gif"
}else{
// if (r) S.bingo.src="/img/rg2.gif"
// else
   if (two) S.bingo.src="/img/any2.gif"
   else S.bingo.src="/img/any1.gif"
 S.tot.style.textDecoration= S.discount.value=S.disprice.value=""
 Count(S.tot.value)
}
if (G){
 j=E.options[E.selectedIndex].value
 getData(G, i, j, E.options[E.selectedIndex].text)
 var lnk = (G > 0) ? Math.floor(G) : Math.ceil(G)
 if (i==1||i==2||i==3){
	O3.innerHTML = (lnk&&G==lnk) ? "" : "<div class=h onClick='Ajax(\"eva-link.php\",\"G="+G+"\",1)' title='Click 開箱討論'>◆ &nbsp;</div>"
//	NBtmp[E.options[E.selectedIndex].text]=m[i][j]
//	alert(E.options[E.selectedIndex].text+"\n"+document.getElementById("nb"+i).innerHTML)
//        alert(m[i][j])
} else {
	if (!lnk)
	  O3.innerHTML = "<div class=h onClick='Ajax(\"eva-link.php\",\"G="+G+"\",1)' title='Click 開箱討論'>◆ &nbsp;</div>"
	 else
	  if (G == lnk)
	   O3.innerHTML = "<div style='cursor:help' onMouseOver='popW("+i+","+j+",event)' title='產品實圖與規格'>　★</div>"
	  else
	   O3.innerHTML = "<div class=h onClick='Ajax(\"eva-link.php\",\"G="+lnk+"\",1)' onMouseOver='popW("+i+","+j+",event)' title='Click 開箱討論'>◆★</div>"
 }
} else {
// if (i==1||i==2) document.getElementById("nb"+i).innerHTML=""
 if (i==1||i==2||i==3) document.getElementById("nb"+i).innerHTML=""
 O3.innerHTML = ""
}
if (S.n1.value==0){ document.getElementById("nb1").innerHTML=""} // for FF & chrome
if (S.n2.value==0){ document.getElementById("nb2").innerHTML=""} // for FF & chrome
if (S.n3.value==0){ document.getElementById("nb3").innerHTML=""} // for FF & chrome
document.body.focus()
}
function Clear(){
for (j=1;j<=J;j++){
 var O1=eval('p'+j), O2=eval('t'+j), Nx=document.getElementsByName("n"+j)[0], Px=Nx.parentNode
 if (IE){
  if (Nx.outerHTML!=nOut[j]){
    Nx.outerHTML=nOut[j]
    Px.children[1].src=(Px.children[1].title) ? "f.gif" : "s.gif"}
 }else
  if (Nx.innerHTML!=nOut[j]){
    Nx.innerHTML=nOut[j]
    Px.children[1].src=(Px.children[1].title) ? "f.gif" : "s.gif"}
 Ktag[j-1].innerHTML=Vtag[j-1].innerHTML=O1.innerHTML=O2.innerHTML=O1.parentNode.cells[6].innerHTML=O1.parentNode.cells[7].innerHTML="<div></div>"
 Itag[(j-1)*2].innerHTML=Itag[(j-1)*2+1].innerHTML=""
 Stag[(j-1)*2+1].nextSibling.className="v"
}
if (document.getElementById("ftr1")) document.getElementById("ftr1").outerHTML=""
if (document.getElementById("ftr2")) document.getElementById("ftr2").outerHTML=""
if (document.getElementById("ftr3")) document.getElementById("ftr3").outerHTML=""
S.bingo.src="/img/any1.gif"
Count(0)
}
function BuyDo(a,b){
var Ins=a.parentNode.parentNode, Tr=Ins.parentNode.parentNode //TR
var i, k, l=Ins.childNodes.length
for (k=0; k<l; k++) if (Ins.children[k].children[0]==a) i=k
if (b){
a.onmouseout=new Function('Z2.style.backgroundColor=""')
Z2=Tr.cells[2].children[2].children[i]
Z2.style.backgroundColor="#fc6"
a.title="取消購買 "+Z2.firstChild.nodeValue
}else{
Tr.cells[2].children[2].removeChild(Tr.cells[2].children[2].children[i])
Ins.removeChild(Ins.children[i])
Tr.cells[4].removeChild(Tr.cells[4].children[i+1])
Tr.cells[5].removeChild(Tr.cells[5].children[i+1])
Tr.cells[6].removeChild(Tr.cells[6].children[i+1])
Tr.cells[7].removeChild(Tr.cells[7].children[i+1])
k=Tr.cells[0].firstChild.nodeValue
Ktag[k-1].removeChild(Ktag[k-1].children[i+1])
Vtag[k-1].removeChild(Vtag[k-1].children[i+1])
cnt(k)}
}
function Buy(e,a){
if (a) e=a
else e = (e.target) ? e.target : event.srcElement
var P=e.parentNode.parentNode
if (P.cells[5].children[0].innerHTML){
 var E2=P.cells[2], i=(P.cells[0].firstChild.nodeValue-1)*2
 Itag[i].innerHTML="<div>"+Stag[i].options[Stag[i].selectedIndex].text+"</div>"+Itag[i].innerHTML
 Itag[i].children[0].className=Stag[i].options[Stag[i].selectedIndex].className
 Itag[i+1].innerHTML="<div>"+Stag[i+1].options[Stag[i+1].selectedIndex].text+"<em onmouseover=BuyDo(this,1) onclick=BuyDo(this)>〤</em></div>"+Itag[i+1].innerHTML
 Stag[i].selectedIndex=Stag[i+1].selectedIndex=0
 e.className="v"
 P.cells[4].innerHTML="<div></div>"+P.cells[4].innerHTML
 P.cells[5].innerHTML="<div></div>"+P.cells[5].innerHTML
 P.cells[6].innerHTML="<div></div>"+P.cells[6].innerHTML
 P.cells[7].innerHTML="<div></div>"+P.cells[7].innerHTML
 Ktag[i/2].innerHTML="<div></div>"+Ktag[i/2].innerHTML
 Vtag[i/2].innerHTML="<div></div>"+Vtag[i/2].innerHTML
}
else
 alert('請先選擇商品後再加購!')
}
function fixDIV(a,b){
if (b){
  if (b==2) a.className=a.firstChild.className=""
  else{
    a.className="fixDiv"
    a.firstChild.className="ftb"}
}else
  if (a.className) a.className=a.firstChild.className=""
  else{
    a.className="fixDiv"
    a.firstChild.className="ftb"}
}
function init(){
S.reset()
/*
//Gauze(6)
//setTimeout("SkipMsg()",120000)
tbdy.rows[3].cells[0].style.color=tbdy.rows[5].cells[0].style.color=tbdy.rows[6].cells[0].style.color=tbdy.rows[14].cells[0].style.color="white"
tbdy.rows[4].cells[0].style.color=tbdy.rows[11].cells[0].style.color=tbdy.rows[12].cells[0].style.color=tbdy.rows[13].cells[0].style.color="white"
tbdy.rows[3].cells[0].style.backgroundColor=tbdy.rows[5].cells[0].style.backgroundColor=tbdy.rows[6].cells[0].style.backgroundColor=tbdy.rows[14].cells[0].style.backgroundColor="red"
tbdy.rows[4].cells[0].style.backgroundColor=tbdy.rows[11].cells[0].style.backgroundColor=tbdy.rows[12].cells[0].style.backgroundColor=tbdy.rows[13].cells[0].style.backgroundColor="green"
*/
var E=document.getElementsByTagName("OPTGROUP"), L=E.length
var addE = (typeof(window.addEventListener)!="undefined") ? 1 : 0
for (i=0;i<L;i++) E[i].style.backgroundColor=clr[i%6]
Itag=tbdy.getElementsByTagName("INS")
Stag=tbdy.getElementsByTagName("SELECT")
Ktag=document.body.getElementsByTagName("KBD")
Vtag=document.body.getElementsByTagName("VAR")
for (i=0;i<7;i++) thy.cells[i].width=thy.cells[i].clientWidth
Tfix.style.tableLayout="fixed"
//Tfix.style.tableLayout=TDes.style.tableLayout="fixed"
for (i=1;i<=J;i++){
 m[i] = new Array
 if (IE) nOut[i]=document.getElementsByName("n"+i)[0].outerHTML
 else nOut[i]=document.getElementsByName("n"+i)[0].innerHTML
 E=Stag[i*2-1].nextSibling
 E.title="再加購 "+E.parentNode.parentNode.cells[1].firstChild.nodeValue
 if (addE) E.addEventListener("click",Buy,false)
 else E.attachEvent("onclick",Buy)
}
Clear()
E=document.S.getElementsByTagName("INPUT")
L=E.length
for (i=0;i<L;i++) if (E[i].type=="checkbox"){
 E[i].hideFocus=true
 if (E[i].checked) E[i].checked=false
 if (addE) E[i].addEventListener("click",Fs,false)
 else E[i].attachEvent("onclick",Fs)
}
E=document.getElementsByTagName("BUTTON")
L=E.length
for (i=0;i<L;i++) E[i].hideFocus=true
setInterval("Ajax('mailOK.php',0,'mailOK')",300000)
ChkPost()
}
var vw, vp, ImgC
function ViewPro(a, b){
if (a){
 var vwifm=document.getElementById("vwpro"), vws=document.getElementById("vwstr"), Dhid=document.getElementById("donehid")
 if (b){
   if (vwifm) vwifm.src="eva-tmpdel.php"
   Dhid.style.display="none"
 }else{
//   ImgC="<html><body bgcolor=transparent><center><table height=90%><tr><td><img src='"+a+"'></table></body></html>"
   if (vws) vws.value=a
   if (vwifm)
//   vwifm.src=(a.indexOf("png")<0) ? a : "javascript:top.ImgC"  chrome 無法使用
    if (a.indexOf("png")<0) vwifm.src=a
    else{
	VWP.document.body.background=""
	VWP.document.body.bgColor="transparent"
	VWP.document.body.innerHTML="<center><table height=90%><tr><td><img src='"+a+"'></table>"
    }
   }
}else
  alert("請先【產生擷取檔】")
}
function Gauze(a){
var i, j, O, F=document.body
vw=vp=""
if (a==3||a==4||a==5||a==6){
// if (IE6) for (i=0;i<J;i++) Stag[i*2].disabled=Stag[i*2+1].disabled=true
 if (IE6) for (i=0;i<J;i++) Stag[i*2].style.visibility=Stag[i*2+1].style.visibility="hidden"
 hid.style.visibility=F.style.overflow="hidden"
 doc.style.top=doc.style.left=0
 Psu.style.height=(F.scrollHeight>F.clientHeight)?F.scrollHeight:F.clientHeight
 Psu.style.width="130%" // Apple pad 需大於 120%
 var sTop='<div style="height:'+F.scrollTop+'"></div>'
 if (a==3) doc.innerHTML = sTop+'<table height='+F.clientHeight+' width='+F.clientWidth+'><tr><td align=center><iframe frameborder=0 allowTransparency id=vwpro name=VWP width=88% height='+parseInt(F.clientHeight*.8)+' src="eval-save.php"></iframe><br><span id=donehid><button onclick="ViewPro(vw,1)" style="font-size:12pt;height:30;position:relative;top:6"><img src="x1.gif" align=absmiddle> 放棄刪除</button>　<input size=48 id=vwstr onfocus="Cpy=true;this.select()" onblur="Cpy=false" readonly style="font-size:14pt;height:30;position:relative;top:8">　<button onclick="ViewPro(vw)" style="font-size:12pt;height:30;position:relative;top:5">點我瀏覽！</button>　<button onclick="ViewPro(vp)" style="font-size:12pt;height:30;position:relative;top:5">點我看圖！</button>　</span><button onclick="Gauze(2)" style="font-size:12pt;height:30;position:relative;top:5"><img src="/img/return.gif" align=absmiddle> 還原離開</button></tr></table>';
 if (a==4) doc.innerHTML = sTop+'<table height='+F.clientHeight+' width='+F.clientWidth+'><tr><td align=center><table cellspacing=0 cellpadding=0 class=cner><tr height=15><td background="/img/1.png" width=15><td background="/img/2.png"><td background="/img/3.png" width=15></tr><tr><td background="/img/4.png" width=15><td bgcolor=dddddd><iframe frameborder=0 allowTransparency width=360 height=400 src="eva-mail.php"></iframe><td background="/img/5.png" width=15></tr><tr height=15><td background="/img/6.png" width=15><td background="/img/7.png"><td background="/img/8.png" width=15></tr></table></tr></table>'
 if (a==5) doc.innerHTML = sTop+'<table height='+F.clientHeight+' width='+F.clientWidth+'><tr><td align=center><table cellspacing=0 cellpadding=0 class=cner><tr height=15><td background="/img/1.png" width=15><td background="/img/2.png"><td background="/img/3.png" width=15></tr><tr><td background="/img/4.png" width=15><td bgcolor=dddddd><iframe frameborder=0 allowTransparency width=540 height=360 src="/book/eva-call.php"></iframe><td background="/img/5.png" width=15></tr><tr height=15><td background="/img/6.png" width=15><td background="/img/7.png"><td background="/img/8.png" width=15></tr></table></tr></table>'
 if (a==6) doc.innerHTML = sTop+'<table height='+F.clientHeight+' width='+F.clientWidth+'><tr><td align=center><iframe frameborder=0 allowTransparency id=mycookie width=99% height='+parseInt(F.clientHeight*.98)+' src="eval-mesg.php"></iframe></tr></table>';
// if (a==6) doc.innerHTML = sTop+'<table height='+F.clientHeight+' width='+F.clientWidth+'><tr><td align=center><iframe frameborder=0 allowTransparency id=mycookie width=98% height='+parseInt(F.clientHeight*.96)+' src="eval-mesg.php"></iframe></tr></table>';
}
else if (a==2){
  if (IE6) for (i=0;i<J;i++) Stag[i*2].style.visibility=Stag[i*2+1].style.visibility=""
  doc.innerHTML=hid.style.visibility=""
  Psu.style.width=Psu.style.height=0
  document.body.style.overflow="auto"
}
else if (a==1){
 logo.style.display=hid.style.display="none"
 pBtm.style.display=""
 for (i=0;i<J;i++){
  O=eval('t'+(i+1))
  if (!O.children[0].innerHTML&&O.childNodes.length<2){
	if (IE6) Stag[i*2].style.visibility=Stag[i*2+1].style.visibility="hidden"
	O.parentNode.style.display="none"}
  }
  self.focus()
  fixDIV(document.getElementById("fDiv"),2)
  setTimeout("window.print()",300)
}else{
 fixDIV(document.getElementById("fDiv"),1)
 for (i=0;i<J;i++){
  O=eval('t'+(i+1))
  if (!O.children[0].innerHTML&&O.childNodes.length<2){
    if (IE6) Stag[i*2].style.visibility=Stag[i*2+1].style.visibility=""
    O.parentNode.style.display=""}
  }
  pBtm.style.display="none"
  logo.style.display=hid.style.display=""
}
}
function SkipMsg(){
if (document.getElementById("mycookie")) Gauze(2)
}
function insert(main_string, ins_string, pos) {
  if(typeof(pos) == "undefined") pos = 0;
  if(typeof(ins_string) == "undefined") ins_string = '';
  return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}
function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}
function Want(a, b){
var j, k, r, M=false, S1, S2, S3, S4, S11, S31, nbTip, nbTipStr=""
var Msg= (a)?"<table border=1><tr><td>產 品 名 稱<td>數量<td>單價<td>小計</tr>":"<table cellspacing=1 bgcolor=black><tr bgcolor="+((Mobile)?"orange":"#cceeee")+"><td>品 名<td>產 品 名 稱<td>備 註<td>數量<td>小 計</tr>"
for (j=1;j<=J;j++){
var I99998=1, O1=document.getElementsByName("n"+j)[0], O2=document.getElementsByName("u"+j)[0], O3=eval('t'+j), O4=eval('p'+j), Ins=O1.parentNode.children[2], l=Ins.childNodes.length, Q3=O3.innerHTML.replace(/<div><\/div>/ig,''), Q4=O4.innerHTML.replace(/<div><\/div>/ig,''), Q3c7=O3.parentNode.cells[7].innerHTML.replace(/<div><\/div>/ig,''), opts=O1.length
// O3 單價， O4 小計
if (O1.selectedIndex!=0||l){
  M=true
  S11=""
  if (O1.selectedIndex!=0){
	S1=O1.options[O1.selectedIndex].innerHTML
	S2=O2.options[O2.selectedIndex].innerHTML
	r=1
	if (O1.options[O1.selectedIndex+r] && O1.options[O1.selectedIndex+r].disabled)
	  while (O1.options[O1.selectedIndex+r].firstChild.nodeValue.substr(0,2)=='　　'){
	    S11+="<dt>"+O1.options[O1.selectedIndex+r].firstChild.nodeValue+"</dt>"
	    if (j>3){
		S2+="<dt>&nbsp;</dt>"
		Q3=insert(Q3, "<dt>&nbsp;</dt>", 6+Q3.indexOf('</div>'))
		Q4=insert(Q4, "<dt>&nbsp;</dt>", 6+Q4.indexOf('</div>'))
		Q3c7=insert(Q3c7, "<dt>&nbsp;</dt>", 6+Q3c7.indexOf('</div>'))
	    }
	    r++
	  }
	I99998++
  }else S1=S2=""

  if (a||j>3){ 

    if (l) {
//    S3=Ins.innerHTML;
      S3=S4=""
      for (var i=0;i<l;i++){
	S3+="<div>"+O1.parentNode.children[2].children[i].firstChild.nodeValue+"</div>"
	S4+="<div>"+O2.parentNode.children[2].children[i].firstChild.nodeValue+"</div>"

	for (k=0; k<opts; k++)
	  if (O1.parentNode.children[2].children[i].firstChild.nodeValue==O1.options[k].text){
	    r=1
	    if (O1.options[k+r] && O1.options[k+r].disabled)
              while (O1.options[k+r].firstChild.nodeValue.substr(0,2)=='　　'){
		S3+="<dt>"+O1.options[k+r].firstChild.nodeValue+"</dt>"
		S4+="<dt>&nbsp;</dt>"
		Q3=insert(Q3, "<dt>&nbsp;</dt>", 6+getPosition(Q3, '</div>', I99998))
		Q4=insert(Q4, "<dt>&nbsp;</dt>", 6+getPosition(Q4, '</div>', I99998))
		Q3c7=insert(Q3c7, "<dt>&nbsp;</dt>", 6+getPosition(Q3c7, '</div>', I99998))
		r++
	      }
	    I99998++
	    break;
	  }
      }
    } else S3=S4=""
    Msg += (a) ? "<tr><td>"+S1+S11+S3+"<td>"+S2+S4+"<td>"+Q4+"<td>"+Q3
    : "\n<tr bgcolor=#eeeecc><td>"+O3.parentNode.cells[1].innerHTML+"<td>"+S1+S11+S3+"<td>"+Q3c7+"<td>"+S2+S4+"<td>"+Q3
  }else{
    nbTip = (NBtmp[S1]) ? NBtmp[S1].replace(/ id=ftr1| id=ftr2| id=ftr3| style='width:100%'|<\/span>/gi, "") : ""
    nbTip = nbTip.replace(/<span>/gi, ((S11) ? "" : "<br>"))
//  nbTip = nbTip.replace(/<span>/gi, "<br>")
//  if (S11) nbTip=nbTip.replace("<br>",'') //刪除第一個 <br> 
    nbTipStr += "<|>"+nbTip
    if (S1) Msg += (b) ? "\n<tr bgcolor=#eeeecc><td>"+O3.parentNode.cells[1].innerHTML+"<td>"+S1+S11+"<td><div>"+O3.parentNode.cells[7].children[0].innerHTML+"</div><td>"+S2+"<td><div>"+O3.children[0].innerHTML+"</div>" :  "\n<tr bgcolor=#eeeecc><td>"+O3.parentNode.cells[1].innerHTML+"<td>"+S1+S11+nbTip+"<td><div>"+O3.parentNode.cells[7].children[0].innerHTML+"</div><td>"+S2+"<td><div>"+O3.children[0].innerHTML+"</div>"

    if (l) 
      for (var i=0;i<l;i++){
	var InsText=Ins.children[i].innerHTML
	S31=""
        for (k=0; k<opts; k++)
          if (InsText==O1.options[k].text){
            r=1
            if (O1.options[k+r] && O1.options[k+r].disabled)
              while (O1.options[k+r].firstChild.nodeValue.substr(0,2)=='　　'){
                S31+="<dt>"+O1.options[k+r].firstChild.nodeValue+"</dt>"
                r++
              }
            break;
          }
	nbTip = (NBtmp[InsText]) ? NBtmp[InsText].replace(/ id=ftr1| id=ftr2| id=ftr3| style='width:100%'|<\/span>/gi, "") : ""
        nbTip = nbTip.replace(/<span>/gi, ((S31) ? "" : "<br>"))
	nbTipStr += "<|>"+nbTip
	Msg += (b) ? "\n<tr bgcolor=#eeeecc><td>"+O3.parentNode.cells[1].innerHTML+"<td>"+InsText+S31+"<td><div>"+O3.parentNode.cells[7].children[i+1].innerHTML+"</div><td>"+O2.parentNode.children[2].children[i].firstChild.nodeValue+"<td><div>"+O3.children[i+1].innerHTML+"</div>" : "\n<tr bgcolor=#eeeecc><td>"+O3.parentNode.cells[1].innerHTML+"<td>"+InsText+S31+nbTip+"<td><div>"+O3.parentNode.cells[7].children[i+1].innerHTML+"</div><td>"+O2.parentNode.children[2].children[i].firstChild.nodeValue+"<td><div>"+O3.children[i+1].innerHTML+"</div>"
    }
  }
} //if O1
  }

var Wmsg = (document.getElementById("wat").firstChild.nodeValue!="0") ? "TDP耗電"+document.getElementById("wat").firstChild.nodeValue+"瓦 　" : ""
var Dmsg = (S.discount.value) ? "　優惠省 "+S.discount.value+"　現金優惠價：<font color=blue>"+S.disprice.value : ""
Msg += (a) ? "<tr><td colspan=4 align=right>"+Wmsg+DA[S.Duty.value]+" 現金價："+S.tot.value+Dmsg+"</table>"
: "\n<tr bgcolor="+((DD)?"gold":"orange")+"><td colspan=5 align=right>"+Wmsg+DA[S.Duty.value]+" 現金價："+S.tot.value+Dmsg+"</table>"
if (b) Msg += "<@>"+nbTipStr
return (M) ? Msg : 1;
}
function Mail(){
if (Want()==1) alert("請先選擇產品與數量後再點選")
else Gauze(4)
}
function Save(){
var Svalue=Want()
if (Svalue==1) alert("請先選擇產品與數量後再點選")
else{
  var t=0, l=Svalue.length
  for (i=0;i<l;i++) if (Svalue.charAt(i)=="\n") t++;
  Gauze(3)    
  }
}
function Excel(a){
S.UL.value=Want()
if (S.UL.value==1) alert("請先選擇產品與數量後再點選")
else{
 S.action=(a) ? "eva-html.php" : "eva-excel.php"
 if (a){
    S.submit()
 }else{
  var M=false, Msg="", S3, S4
  for (j=1;j<=J;j++){
  var O1=document.getElementsByName("n"+j)[0], O2=document.getElementsByName("u"+j)[0], O3=eval('t'+j), Ins=O1.parentNode.children[2], l=Ins.childNodes.length
  if (O1.selectedIndex!=0||l){
//    M=true
    if (O1.selectedIndex!=0) Msg+=O3.parentNode.cells[1].firstChild.nodeValue+"<>"+O1.options[O1.selectedIndex].text+"<>"+O2.options[O2.selectedIndex].text+"<>"+O3.children[0].innerHTML+"<>"+O3.parentNode.cells[7].children[0].innerHTML+"[]"
    if (l) {
      for (var i=0;i<l;i++)
      Msg+=O3.parentNode.cells[1].firstChild.nodeValue+"<>"+Ins.children[i].firstChild.nodeValue+"<>"+O2.parentNode.children[2].children[i].firstChild.nodeValue+"<>"+O3.children[i+1].innerHTML+"<>"+O3.parentNode.cells[7].children[i+1].innerHTML+"[]"}
    }
  }
  S.UL.value=Msg+"<><>總計"
  S.submit()
// if (M) {S.UL.value=Msg+"<><>總計";S.submit()}
// else alert("請先選擇產品與數量後再點選")
 }
}

}
function QPrint(e){
var KC = (e.keyCode) ? e.keyCode : e.charCode
if (KC==80){
  QP.QS.value=Want(1)
  if (QP.QS.value==1) alert("請先選擇產品與數量後才可列印")
  else QP.submit()
}
}
function Recount(a){
var p,t,s=0
for (j=1;j<=J;j++){
 p=eval("S.n"+j+".value")
 p=eval('c'+j+'[p]')
 if (p){
  t=p*eval("S.u"+j+".value")
  eval('p'+j).innerHTML = p
  eval('t'+j).innerHTML = t
  s+=parseInt(t)}
 }
S.tot.value=(s) ? s : ""
Count(S.tot.value)
BTax.innerHTML=Tax.innerHTML=DA[a]
document.title='【原價屋】COOLPC.TW 線上估價系統-'+DA[a]
S.Duty.value=a
if (a){
 document.body.background='/image/eva_bg02.jpg'
 S.TaxSW.innerHTML="改為未稅"
 S.TaxSW.style.color="blue"
 DD='&D=1'
 DT='?D=1'
}else{
 document.body.background='eva_bg.jpg'
 S.TaxSW.innerHTML="改為含稅"
 S.TaxSW.style.color="green"
 DD=DT=''
}
S.TaxSW.disabled=false
}
function TaxFree(a){
a.disabled=true
if (a.innerHTML=="改為含稅") Ajax('eval-ajax.php','Duty=1&ftime='+ftime,1)
else Ajax('eval-ajax.php','Duty=0&ftime='+ftime,1)
}
function Q(a,b,c,d){
var O=eval('S.n'+a)
O.options[b].className=c
O.options[b].text=O.options[b].text.substring(0, O.options[b].text.lastIndexOf(", ")+3)+d
}
function RI(a){
a.style.cursor="pointer"
a.style.backgroundColor="gold"
a.onclick=new Function('if (!ClkT) this.children[0].click();ClkT=0')
a.onmouseout=new Function('this.style.backgroundColor=this.style.cursor="";')
}
function Ftr(i){
var P=document.getElementsByName("n"+i)[0].parentNode
iNum=i
if (P.children[3].style.display==""){
 P.children[3].style.display="none"
 P.children[1].src=(P.children[0].options[0].text.indexOf("篩")<0)?"f.gif":"g.gif"
 }
else
 for (var j=1; j<=J; j++){
  P=document.getElementsByName("n"+j)[0].parentNode
  if (i!=j&&P.children[3].style.display!="none"){
    P.children[3].style.display="none"
    P.children[1].src=(P.children[0].options[0].text.indexOf("篩")<0)?"f.gif":"g.gif"
   }
  if (i==j) P.children[3].style.display="";
 }
}
function ChkFilter(){
var Nx=document.getElementsByName("n"+iNum)[0], Px=Nx.parentNode
if (sTitle){
 Nx.options[0].className="bb"
 Nx.options[0].text=sTitle
 Nx.selectedIndex=0
 Px.children[1].src="g.gif"
 cnt(iNum)}
else
 Px.children[1].src="f.gif"
}
function OptChange(){
var Dc = new Array()
var i, Nx=document.getElementsByName("n"+iNum)[0], OptG=Nx.getElementsByTagName("optgroup"), l=OptG.length
if (Rstr){
 Rstr=Rstr.substring(1)
 for (i=0;i<l;i++) Dc[i] = (OptG[i].label.search(new RegExp(Rstr, "i"))<0) ? 1 : 0
}
for (i=l-1;i>=0;i--) if (Dc[i]) Nx.removeChild(OptG[i])
OptShow(Nx)
}
function OptFilter(){
var Dc = new Array()
var i, Nx=document.getElementsByName("n"+iNum)[0], l=Nx.options.length
if (Rstr){
 Rstr=Rstr.substring(1)
 for (i=1;i<l;i++) Dc[i] = (Nx.options[i].text.search(new RegExp(Rstr, "i"))<0) ? 1 : 0
}
if (Nstr){
 Nstr=Nstr.substring(1)
 for (i=0;i<l;i++) if (Dc[i]||(Dc[i]!=0)) Dc[i] = (Nx.options[i].text.search(new RegExp(Nstr, "i"))<0) ? 0 : 1
}
for (i=l-1;i>0;i--) if (Dc[i]) Nx.options[i]=null
OptG=Nx.getElementsByTagName("optgroup")
l=OptG.length
for (i=l-1;i>=0;i--) if (!OptG[i].children[0]) Nx.removeChild(OptG[i])
OptShow(Nx)
}
function OptPrice(n){
var Dc = new Array()
var i, Nx=document.getElementsByName("n"+iNum)[0], l=Nx.options.length, Lprice, Uprice, eP=eval("c"+iNum)
Lprice=(document.getElementsByName(n+"B")[0].value != "")?parseInt(document.getElementsByName(n+"B")[0].value):null
Uprice=(document.getElementsByName(n+"E")[0].value != "")?parseInt(document.getElementsByName(n+"E")[0].value):null
if (Lprice!=null||Uprice!=null){
 if (Lprice!=null) for (i=1;i<l;i++) Dc[i] = (eP[ Nx.options[i].value ] < Lprice) ? 1 : 0
 if (Uprice!=null) for (i=1;i<l;i++) if (!Dc[i]) Dc[i] = (eP[ Nx.options[i].value ] > Uprice) ? 1 : 0
 for (i=l-1;i>0;i--) if (Dc[i]) Nx.options[i]=null
 OptG=Nx.getElementsByTagName("optgroup")
 l=OptG.length
 for (i=l-1;i>=0;i--) if (!OptG[i].children[0]) Nx.removeChild(OptG[i])
 OptShow(Nx)
 }
}
function OptShow(Nx){
var i,r=g=o=p=d=tdis=0,l=Nx.options.length
for (i=1;i<l;i++){
  if (Nx.options[i].className=="r") r++
  else
    if (Nx.options[i].className=="g") g++
    else
      if (Nx.options[i].className=="b"){r++; g++}
  if (Nx.options[i].text.indexOf("◆")>=0) o++;
  if (Nx.options[i].text.indexOf("★")>=0) p++;
  if (Nx.options[i].text.indexOf("▼下殺")>=0) tdis++;
  if (Nx.options[i].disabled) d++;
}
sTitle="經篩選後 "+(l-d-1)+" ["+Header[iNum][0]+"]"+((r)?"，熱賣 "+r+" ["+Header[iNum][1]+"]":"")
if (p) sTitle+="，圖片 "+p+" ["+Header[iNum][2]+"]"
if (o) sTitle+="，討論 "+o+" ["+Header[iNum][3]+"]"
if (g) sTitle+="，價格異動 "+g+" ["+Header[iNum][4]+"]"
if (tdis) sTitle+="，限時下殺▼"+tdis+" ["+Header[iNum][5]+"]"
Rstr=Nstr=""
}
function FPrice(n){
if (event.keyCode==8||event.keyCode==46||(event.keyCode>47&&event.keyCode<58)||(event.keyCode>95&&event.keyCode<106)){
 var i, a=document.getElementsByName(n), l=a.length, Nx=document.getElementsByName("n"+iNum)[0]
 if (IE&&(Nx.outerHTML!=nOut[iNum])) Nx.outerHTML=nOut[iNum]
 else
  if (!IE&&(Nx.innerHTML!=nOut[iNum])) Nx.innerHTML=nOut[iNum]
 sTitle=Rstr=Nstr=""
 for (i=0;i<l;i++){
  if (a[i].checked)
    if (IE)
      if (a[i].title) Nstr+="|"+((a[i].value=="on"||!a[i].value) ? a[i].parentNode.innerText : a[i].value)
      else Rstr+="|"+((a[i].value=="on"||!a[i].value) ? a[i].parentNode.innerText : a[i].value)
    else
      if (a[i].title) Nstr+="|"+((a[i].value=="on"||!a[i].value) ? a[i].parentNode.textContent : a[i].value)
      else Rstr+="|"+((a[i].value=="on"||!a[i].value) ? a[i].parentNode.textContent : a[i].value)
  if ((Rstr||Nstr)&&a[i].alt)
    if (a[i].alt=="1") OptChange(); else OptFilter()
  }
 OptPrice(n)
 ChkFilter()
 }
}
function Fs(e){
if (!ClkT){
ClkT=1
var evt = (e.target) ? e.target : event.srcElement
var i, a=document.getElementsByName(evt.name), l=a.length, Nx=document.getElementsByName("n"+iNum)[0]

if (IE&&(Nx.outerHTML!=nOut[iNum])) Nx.outerHTML=nOut[iNum]
else
  if (!IE&&(Nx.innerHTML!=nOut[iNum])) Nx.innerHTML=nOut[iNum]
sTitle=Rstr=Nstr=""
for (i=0;i<l;i++){
  if (a[i].checked)
    if (IE)
      if (a[i].title) Nstr+="|"+((a[i].value=="on"||!a[i].value) ? a[i].parentNode.innerText : a[i].value)
      else Rstr+="|"+((a[i].value=="on"||!a[i].value) ? a[i].parentNode.innerText : a[i].value)
    else
      if (a[i].title) Nstr+="|"+((a[i].value=="on"||!a[i].value) ? a[i].parentNode.textContent : a[i].value)
      else Rstr+="|"+((a[i].value=="on"||!a[i].value) ? a[i].parentNode.textContent : a[i].value)
  if ((Rstr||Nstr)&&a[i].alt)
    if (a[i].alt=="1") OptChange(); else OptFilter()
  }
if (typeof(document.getElementsByName(evt.name+"B")[0]) != "undefined") OptPrice(evt.name)
ChkFilter()
}
}
function FReset(a){
var i, E=document.getElementsByName(a), l=E.length, Nx=document.getElementsByName("n"+iNum)[0], Px=Nx.parentNode, t=1
if (typeof(document.getElementsByName(a+"B")[0]) != "undefined") document.getElementsByName(a+"B")[0].value=document.getElementsByName(a+"E")[0].value=""
for (i=0;i<l;i++) if (E[i].checked) E[i].checked=t=false
//if (!t){
 if (IE) Nx.outerHTML=nOut[iNum]
 else Nx.innerHTML=nOut[iNum]
 Px.children[1].src="f.gif"
 cnt(iNum)
 //}
}
function OnlyNum(e){
return (event.keyCode==8||event.keyCode==45||event.keyCode==46||event.keyCode==229||(event.keyCode>34&&event.keyCode<40)||(event.keyCode>47&&event.keyCode<58)||(event.keyCode>95&&event.keyCode<106)) ? true : false
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-25039038-1']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

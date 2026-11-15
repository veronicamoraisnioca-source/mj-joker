const $=id=>document.getElementById(id);
$("form").addEventListener("submit",async e=>{e.preventDefault();$("result").textContent="A criar inscrição...";try{const r=await fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$("name").value,phone:$("phone").value})});const d=await r.json();if(!r.ok)throw Error(d.error);$("result").innerHTML=`Inscrição criada. Guarda este código: <b>${d.id}</b><br><a class="link" target="_blank" rel="noopener" href="${d.whatsapp}">Enviar confirmação pelo WhatsApp</a><p>Após enviar, aguarde a aprovação do administrador.</p>`;}catch(err){$("result").textContent=err.message;}});
$("checkBtn").addEventListener("click",async()=>{const id=$("check").value.trim();if(!id){$("status").textContent="Introduza o código de inscrição.";return;}try{const r=await fetch("/api/status/"+encodeURIComponent(id));const d=await r.json();if(!r.ok)throw Error(d.error);$("status").textContent=d.status==="approved"?"Pagamento aprovado! Código de acesso: "+d.accessCode:"Inscrição pendente. Aguarde a confirmação do pagamento pelo administrador.";}catch(e){$("status").textContent=e.message;}});
$("playBtn").addEventListener("click",async()=>{
 const code=$("gameCode").value.trim(); const box=$("game"); box.textContent="A verificar acesso...";
 try{
  const r=await fetch("/api/play/"+encodeURIComponent(code)); const d=await r.json();
  if(!r.ok) throw Error(d.error);
  let index=0,score=0;
  function show(){
   if(index>=d.questions.length){box.innerHTML=`<h3>Fim do jogo, ${d.player}!</h3><p>Acertaste ${score} de ${d.questions.length} perguntas.</p>`;return;}
   const q=d.questions[index];
   box.innerHTML=`<h3>Pergunta ${index+1}/${d.questions.length}</h3><p>${q.q}</p>`+q.a.map((a,i)=>`<button class="secondary answer" data-i="${i}">${a}</button>`).join("");
   box.querySelectorAll(".answer").forEach(b=>b.addEventListener("click",()=>{if(Number(b.dataset.i)===q.correct)score++;index++;show();}));
  }
  show();
 }catch(e){box.textContent=e.message;}
});

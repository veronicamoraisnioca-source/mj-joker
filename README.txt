MJ JOGOS — INSTRUÇÕES DE PUBLICAÇÃO

Este pacote é um site funcional com:
- Inscrição de jogadores;
- Informação de pagamento de 185 MT para M-Pesa: DIQUISSON Manuel, 852487728;
- Confirmação por WhatsApp 258852487728;
- Aprovação manual pelo administrador;
- Código de acesso após aprovação.

IMPORTANTE:
1. O site NÃO recebe pagamentos automaticamente. O administrador verifica o pagamento no canal oficial e aprova manualmente.
2. O jogador confirma o PIN apenas no menu oficial do M-Pesa no próprio telefone. Nunca introduza nem envie PIN no site ou WhatsApp.
3. Não foi integrada uma API oficial M-Pesa. Para pagamentos automáticos é necessário contrato/acesso oficial da operadora.
4. Antes de publicar, configure uma senha forte em ADMIN_PASSWORD. Não use a senha de exemplo.
5. A lista de inscrições fica em data.json. Em Render, configure um disco persistente para /opt/render/project/src/data.json ou adapte o caminho; sem disco persistente os dados podem perder-se em reinícios.

ADMINISTRAÇÃO:
- Consultar jogadores: GET /api/admin/players
- Aprovar jogador: POST /api/admin/approve com JSON {"id":"CODIGO"}.
- Enviar cabeçalho Authorization: Bearer SUA_SENHA_ADMIN.

PUBLICAR NO RENDER:
1. Carregue os ficheiros deste ZIP para a raiz do repositório GitHub.
2. No Render, crie um Web Service ligado ao repositório.
3. Build Command: npm install
4. Start Command: npm start
5. Adicione variável de ambiente ADMIN_PASSWORD com uma senha forte.
6. Depois de publicar, teste uma inscrição e a mensagem WhatsApp.

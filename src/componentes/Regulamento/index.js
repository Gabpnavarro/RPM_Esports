import styles from "./regulamento.module.scss";

function Regulamento(imagem) {
  return (
    <div className={styles.regulamento}>
      <div className={styles.sumario}>
        <h2>SUMÁRIO</h2>
        <ol>
          <li>
            <a href="#introducao">
              1. INTRODUÇÃO - SEJA BEM VINDO A RPM ESPORTS
            </a>
          </li>
          <li>
            <a href="#links">2. TODOS OS LINKS RPM ESPORTS</a>
          </li>
          <li>
            <a href="#respeito">
              3. RESPEITO ENTRE OS MEMBROS DO GRUPO E DIREITOS DE IMAGEM
            </a>
          </li>
          <li>
            <a href="#inscricao">
              4. INSCRIÇÃO, FORMA DE PAGAMENTO PARA AS CATEGORIAS E PREMIAÇÃO
            </a>
          </li>
          <li>
            <a href="#briefing">
              5. BRIEFING, DIVULGAÇÃO DE INCIDENTES E PEDIDOS DE ANÁLISE
            </a>
          </li>
          <li>
            <a href="#alteracao">
              6. POSSÍVEIS ALTERAÇÕES NO REGULAMENTO/PREMIAÇÃO/CRITÉRIOS DE
              DESEMPATE
            </a>
          </li>
          <li>
            <a href="#regulamento">7. REGULAMENTO IN-GAME (DENTRO DO JOGO)</a>
          </li>
          <li>
            <a href="#participacoes">
              8. PARTICIPAÇÕES/TEMPO DA CORRIDA OU CANCELAMENTO POR AUSENCIAS
            </a>
          </li>
          <li>
            <a href="#punicao">9. TABELA DE PUNIÇÕES</a>
          </li>
          <li>
            <a href="#configuracoes">
              10. CONFIGURAÇÕES DE LOBBY E FORMATO DE CORRIDA
            </a>
          </li>
          <li>
            <a href="#pontuacao">
              11. PONTUAÇÃO DAS CORRIDAS PARA OS CAMPEONATOS
            </a>
          </li>
          <li>
            <a href="#pontuacaoequipe">
              12. PONTUAÇÃO DE EQUIPES/PILOTO RESERVA/SUBSTITUTO/PINTURAS
            </a>
          </li>
          <li>
            <a href="#resultado">
              13. DIVULGAÇÃO DE LIGA/EVENTO/E OUTRAS MÍDIAS NAS REDES SOCIAIS
            </a>
          </li>
          <li>
            <a href="#skins">14. ENVIO DE PINTURAS (SKINS)</a>
          </li>
          <li>
            <a href="#trofeu">
              15. ENTREGA DE TROFÉU (PREMIAÇÃO DO CAMPEONATO)
            </a>
          </li>
          <li>
            <a href="#redessociais">
              16. DIVULGAÇÃO DE LIGA/EVENTO/OUTRAS MÍDIAS NAS REDES SOCIAIS
            </a>
          </li>
          <li>
            <a href="#idade">
              17. RESTRIÇÃO DE IDADE PARA MÍDIAS SOCIAIS/ENTREVISTAS
            </a>
          </li>
        </ol>
      </div>

      <div id="introducao" className={styles.oficial}>
        <h2>1. INTRODUÇÃO - SEJA BEM VINDO A RPM ESPORTS</h2>

        <h3>1.1 O que é a RPM?</h3>

        <p>
          RPM Esports é um clube de pilotos e também Liga E-Sports focada
          atualmente no automobilismo virtual, ou seja, eventos virtuais nos
          jogos pré-definidos, visando temporadas divertidas, competitivas,
          emocionantes e memoráveis, dando valor a cada uma delas e seus pilotos
          através do Hall da Fama no site. Todos os links necessários e
          informações sobre as etapas/datas/regras e outros detalhes estão aqui:
          <a href="https://linktr.ee/RPMEsports" target="_blank">
            https://linktr.ee/RPMEsports
          </a>
        </p>
        <h3>1.2 Qual a proposta? Onde queremos chegar?</h3>
        <p>          
          RPM Esports tem como principal objetivo presenciar corridas de nível
          iniciante, intermediário e competitivo, visando a evolução na pista,
          acessibilidade ao Automobilismo Virtual e claro, muita diversão. Temos
          como grande objetivo promover o Automobilismo Virtual, trazendo mais
          pessoas para este universo e tirando esta categoria dos jogos de
          nicho, ou seja, transformar o AV em uma categoria mais jogada e
          respeitada do que é atualmente, com muito mais variedade.
        </p>
      </div>

      <div id="links" className={styles.oficial}>
        <h2>2. TODOS OS LINKS RPM ESPORTS:</h2>
        <ul>
          <li>Grupo WhatsApp 1 ou Grupo WhatsApp 2 (Comunidade)</li>
          <li>Site Oficial (Todas as informações, Hall da Fama, etc.)</li>
          <li>GRIDLIGHT (Segundas 21:00)</li>
          <li>GRIDF3 (Terças 21:00)</li>
          <li>GRIDPRO-AM (Sextas 21:00)</li>
          <li>WORLDSERIES (Evento mensal gratuito)</li>
          <li>Canal YouTube (Onde são feitas as transmissões)</li>
          <li>Instagram (Vídeos curtos, apresentações, pódios e mais.)</li>
          <li>Discord RPM (Canal de comunicação)</li>
          <li>
            Pedidos de Análise (Foi prejudicado? Aqui é o lugar certo para
            reclamar.)
          </li>
        </ul>
      </div>

      <div id="respeito" className={styles.oficial}>
        <h2>3. RESPEITO ENTRE OS MEMBROS DO GRUPO E DIREITOS DE IMAGEM</h2>
        <p>
          3.1 Respeito com os demais pilotos e pessoas do grupo em qualquer meio
          de comunicação da RPM Esports, qualquer tipo de preconceito, desrespeito, postagem de conteúdo
          indevido como conteúdos de política, pornografia, discursos de ódio,
          violência, intolerância religiosa ou racial não será tolerado, podendo
          ser aplicado o banimento do mesmo, e dependendo da gravidade, podendo
          ser permanente.
        </p>
        <p>
          3.2 Desrespeito a jogadores que utilizam assistências de pilotagem não
          será tolerado esta atitude poderá resultar na remoção do grupo por tempo
          indeterminado.
        </p>
        <p>
          3.3 Os pilotos inscritos ou participantes de algum evento oficial na
          RPM Esports autorizam a utilização da imagem e voz nas transmissões ao
          vivo e atividades promovidas pela organização.
        </p>
      </div>

      <div id="inscricao" className={styles.oficial}>
        <h2>4. INSCRIÇÃO, FORMA DE PAGAMENTO PARA AS CATEGORIAS E PREMIAÇÃO</h2>
        <p>
          4.1 Como um meio de colaboração com o trabalho feito na RPMEsports
          temos uma pequena taxa de inscrição em cada grid que funcionará da
          seguinte forma:
        </p>
        <p>
          A forma de pagamento/recebimento da premiação é feita unicamente
          através da plataforma PIX via chave ou <a href="https://nubank.com.br/pagar/1atiol/ZBb2rN7rwC">QR CODE</a> que será comunicada
          através dos sistemas de inscrição ou redes sociais e também no site.
        </p>
        <p>
          Método de participação e valores: Para jogar em um dos grids o valor
          da inscrição fica em R$20,00 (por piloto), um valor mais baixo pode
          ser informado também no site. Treinos, Forfun e eventos especiais têm
          seus valores gratuitos, não necessitando de taxa de inscrição (podem
          haver exceções).
        </p>

        <p>
          4.2 Para participação parcial da temporada, temos um desconto nos
          valores da inscrição:
        </p>
        <p>Participação a partir da 1ª até a 3ª etapa = valor padrão.</p>
        <p>Participação a partir da 4ª etapa = 50% de desconto do valor.</p>

        <p className={styles.espaco}>
          Reembolso do valor pago: O reembolso da inscrição pode ser feito
          previamente ao início da temporada ou primeira participação. Após a
          primeira participação de um evento oficial pelo piloto, não será
          permitida a devolução do valor pago.
        </p>
        <h3>
          4.3 Inscrições gratuitas distribuídas nos campeonatos e eventos:
        </h3>
        <h3>
          <strong>O que é inscrição grátis completa?</strong>
        </h3>
        <p>
          R: Com ela você tem acesso a uma das categorias pagas de forma
          gratuita para a próxima temporada.
        </p>
        <h3>
          Recebi a inscrição grátis completa, por enquanto tempo posso usá-la?
        </h3>
        <p>
          R: Ela tem validade de uso para até no máximo 3 temporadas futuras que
          vão acontecer após a qual recebeu a mesma.
        </p>
        <h3>
          Posso vender ou doar minha inscrição grátis completa para outro
          piloto?
        </h3>
        <p>
          R: É permitido a doação da inscrição grátis completa para outro
          jogador, porém a venda é proibida.
        </p>

        <h3>4.4 NOVA REGRA DE NICKNAMES:</h3>
        <p>
          O Nickname para temporada (nome utilizado dentro do jogo) deve ser
          unicamente no formato a seguir: "PalavraPalavra" (apenas 2 palavras),
          seja nome verdadeiro ou fictício. Basta seguir este formato, veja
          exemplos:
        </p>
        <h3>
          ✅ CORRETO: "ABC João", "Andre KRBR", "Luiz Gomes", "Javier Fuentes".
        </h3>
        <h3>
          ❌ INCORRETO: "ABC Team João", "Andre KRBR AV", "Javier_Fuentes".
        </h3>
      </div>

      <div id="briefing" className={styles.oficial}>
        <h2>5. BRIEFING, DIVULGAÇÃO DE INCIDENTES E PEDIDOS DE ANÁLISE</h2>
        <p>
          5.1 Divulgação de incidentes jamais poderão ser feitas nos grupos
          (seja Discord/Whatsapp/Telegram ou outros). Poderá resultar em punição
          (Art9.1).
        </p>
        <p>
          5.2 Antes do início das etapas, temos o briefing no Discord onde
          passamos as instruções importantes, e também respondemos as perguntas
          que forem feitas pelos pilotos. A participação do briefing é
          obrigatória em todas as etapas para evitar dúvidas e problemas
          desnecessários durante e após as corridas. Uma Print (captura de tela)
          será feita entre as 20:30/20:40 no Discord para comprovar a presença
          dos participantes, e será postada no grupo do WhatsApp ou no próprio
          Discord. O piloto que não estiver listado na captura será considerado
          ausente do briefing e será punido com base na tabela de punições.
        </p>
        <p>
          5.3 Qualquer ocorrência/incidentes na etapa que tenham de ser
          analisados, deverá ser mandado via link de análises. Esteja ciente que
          ao pedir análise de um lance, você estará sujeito à análise também,
          caso houver algum incidente causado por você, resultará em punição, e
          dependendo da situação, só você receberá a punição.
        </p>
        <p>
          5.4 Os pedidos de análise poderão ser enviados com um limite de 48
          horas após o fim da etapa do pedido.
        </p>
        <p>
          5.5 No caso do pedido de defesa, deve ser enviada a sua visão
          alternativa do lance que justifique uma possível alteração do
          resultado de análise, sempre publicada no Discord na aba
          “❗resultado-pedidos-de-análise”. O piloto tem 24 horas após ser
          notificado da análise para pedir a defesa.
        </p>
        <p>
          5.6 Qualquer incidente de proporção grave (proposital), ou de abuso
          dos limites de pista (track limits) detectado durante a transmissão ao
          vivo resultará em punição ao piloto sem necessidade do pedido de
          análise.
        </p>
      </div>

      <div id="alteracao" className={styles.oficial}>
        <h2>
          6. POSSÍVEIS ALTERAÇÕES NO REGULAMENTO/PREMIAÇÃO/CRITÉRIOS DE
          DESEMPATE:
        </h2>
        <p>6.1 Alterações no Regulamento</p>
        <p>
          Alterações poderão ser feitas no regulamento, formato, regras,
          calendário, horários a qualquer momento, visando melhorar os futuros
          eventos/corridas da liga.
        </p>
        <p>6.2 Premiação</p>
        <p>
          Em caso de premiação por corrida ou temporada, o premiado deverá
          comunicar a organização com a chave PIX no WhatsApp até o máximo de 3
          dias após o fim da etapa/temporada (23:59 Horário de Brasília), caso
          contrário perderá o direito da mesma.
        </p>
        <p>6.3 Critério de Desempate nos Campeonatos</p>
        <p>
          Em caso de empate na pontuação na tabela de pilotos, o critério será
          primeiramente a maior quantidade de vitórias e depois pole positions,
          seguido das melhores posições nas corridas. E se ainda assim houver
          empate, será realizada uma corrida curta apenas entre os pilotos
          empatados após o fim da corrida, decidindo assim quem é o vencedor. As
          regras para essa corrida serão:
        </p>
        <p>
          Automobilista 2 & ACC Qualificação de 5 minutos + corrida de 5 minutos
        </p>
      </div>

      <div id="regulamento" className={styles.oficial}>
        <h2>7. REGULAMENTO IN-GAME (DENTRO DO JOGO)</h2>
        <p>
          7.1 Saber ultrapassar é ser ultrapassado, baseado nas regras básicas
          do automobilismo, como por exemplo mergulhos em escora no carro do
          oponente, deixar espaço mínimo de um carro ao dividir uma curva ou
          reta, defesa de posição com 1 movimento de defesa quando o oponente
          estiver próximo, zigzag na frente do adversário durante uma tentativa
          de ultrapassagem, poderá resultar em punições conforme tabela de
          punições (Art. 9.1).
        </p>
        <p>
          7.2 Abuso de bug/brecha no regulamento de má fé que resulte em
          vantagem ou prejuízo para os oponentes resultará em DSQ do campeonato
          do piloto.
        </p>
        <p>
          7.3 Em caso de danos totais no veículo, ou desqualificação da corrida
          (NC/DSQ e outras maneiras de abandono), resultará na perda total dos
          possíveis pontos a receber, por exemplo, Piloto Anderson terminaria a
          corrida e receberia 10 pontos, porém abandonou, sendo perdidos todos
          esses pontos.
        </p>
        <p>
          7.4 O piloto que fizer alteração de nickname dentro do jogo, nickname
          diferente do que foi inserido na inscrição, feito de maneira incorreta
          ou participar de corridas sem ter se cadastrado, não estar no grupo de
          pilotos e até abandonar o lobby antes da corrida ter terminado poderá
          ter seus pontos zerados na tabela de classificação ou ser expulso da
          sessão sem aviso prévio.
        </p>
        <p>
          7.5 Em caso de carro fixo em alguma das categorias, a escolha será
          feita conforme informado no site e grupo do WhatsApp, esse mesmo carro
          será FIXO por toda a temporada (todas as etapas do campeonato).
          Qualquer desrespeito a este termo resultará em DSQ da corrida onde foi
          desrespeitado esse acordo.
        </p>
        <p>
          7.6 Em campeonatos com carro fixo, o piloto pode trocar o carro a
          custo de 30 pontos na tabela do campeonato, o piloto não pode ficar
          negativo, ou seja, deve ter pelo menos 30 pontos para fazer a troca do
          modelo.
        </p>
        <p>
          7.7 No caso de corridas duplas em que seja necessário abrir uma outra
          sala (lobby) para realização do evento, será dado um prazo de no
          máximo 5 minutos a partir da abertura da sala para entrada.
        </p>
        <p>
          7.8 Em caso de bandeira amarela, não será permitida ultrapassagem,
          apenas se o piloto da frente estiver muito lento (-30KM/H) ou parado.
          Todos os pilotos devem respeitar o limite de velocidade estipulado
          pelo simulador, caso contrário poderá ser pedida análise do lance como
          qualquer outro incidente.
        </p>
        <p>
          7.9 Os pilotos devem manter uma distância segura uns dos outros (fila
          indiana) e não abusar do sistema de fantasmas do jogo entrando dentro
          de outro piloto para obter vantagem, qualquer tentativa contará como
          desrespeito à bandeira amarela (Art. 9.1).
        </p>
        <p>
          7.10 Durante a largada, o líder deve manter a velocidade entre 70KM/h
          e 90KM/h, ou aquela que foi estipulada pelo simulador, sem frenagem
          brusca e após dar o pé (acelerar), não deve diminuir mais, impedindo
          graves acidentes.
        </p>
        <p>
          7.11 O uso de ESC (Controle Eletrônico de Estabilidade) e voltar para
          os boxes fica expressamente proibido, podendo ser usado apenas em
          situação de travamento, onde não seja possível sair de forma alguma.
          (Punição no Art. 9.1)
        </p>
        <p>
          7.12 Fica proibido o pagamento de punições como Drive-Through durante
          uma Full Course Yellow (Automobilista 2), caso não seja respeitado,
          fica a disposição da direção decidir a punição mais justa.
        </p>
        <p>
          7.13 Ao abandonar a prova antes de todos os pilotos terem completado
          ou o tempo limite de prova ter excedido, você fica sujeito a perder os
          pontos que conquistaria pela sua posição. Exemplo: Temos 20 pilotos na
          corrida, e ela chega ao fim, os 12 primeiros passam na linha de
          chegada, você seria, neste exemplo, o 3º colocado, porém sai do jogo
          antes dos 20 terem completado ou o tempo ter acabado, neste caso fica
          sujeito a perder os pontos que receberia pela sua 3º colocação.
        </p>
      </div>

      <div id="participacoes" className={styles.oficial}>
        <h2>
          8. PARTICIPAÇÕES / TEMPO DA CORRIDA / CANCELAMENTOS / ADIAMENTOS
        </h2>
        <p>
          8.1 Todos os pilotos devem confirmar sua presença ou ausência através
          do link que será divulgado no grupo de pilotos até o máximo das 20:00
          (antes do Briefing). Caso tenha dúvidas de como realizar o
          procedimento, clique no vídeo tutorial acima da lista.
        </p>
        <p>
          8.2 No caso de muitas ausências em alguma das etapas da temporada,
          teremos algumas alterações no tempo de corrida e, dependendo do caso,
          até mesmo o cancelamento da etapa ou temporada, no caso de 15
          participantes ou menos em qualquer etapa. A direção decidirá se
          cancelará, diminuirá ou se irá manter o tempo da prova, também ouvindo
          a opinião dos pilotos no Discord ou Redes sociais na hora do Briefing.
        </p>
        <p>
          8.3 Em caso de necessidade, poderemos ter o adiamento de uma ou mais
          etapas no campeonato, e até mesmo o cancelamento. As medidas serão
          informadas através do grupo (WhatsApp, Discord ou outros meios de
          comunicação).
        </p>
      </div>

      <div id="punicao" className={styles.oficial}>
        <h2>9. TABELA DE PUNIÇÕES</h2>
        <p>
          9.1 Segue abaixo as punições que podem ser aplicadas em caso de pedido
          de análise ou casos notados na transmissão ao vivo, grupo e redes
          sociais:
        </p>
        <img alt="" src={imagem.punicao} />
      </div>

      <div id="configuracoes" className={styles.oficial}>
        <h2>10. CONFIGURAÇÕES DE LOBBY E FORMATO DE CORRIDA</h2>
        <p>
          10.1 Configurações de lobby/Assistências/Formato de corrida e outras
          configurações mais detalhadas poderão ser encontradas no site oficial
          da RPM Esports:{" "}
          <a href="https://www.rpmesports.com.br">
            https://www.rpmesports.com.br
          </a>{" "}
          - passe o mouse na aba "Calendário" e escolha a categoria desejada. As
          configurações poderão ser ajustadas a qualquer momento, e caso
          aconteça tudo será informado via grupo do WhatsApp e Briefing antes da
          corrida.
        </p>
        <p>
          10.2 A partir dos 10 minutos restantes para o início da corrida, a
          prioridade muda para quem já está no lobby (seja reserva ou suplente),
          então se o piloto com maior prioridade (piloto principal) chegar
          atrasado, ele perde o direito desta prioridade. (Exemplo: corrida às
          21:00, limite máximo às 20:50 para a prioridade normal valer.)
        </p>
        <p>
          10.3 Em caso de travamento do lobby em qualquer momento da etapa, será
          reaberto um novo Qualy de 5 a 10 minutos + Corrida, debitando o tempo
          já passado antes do travamento. Por exemplo, a corrida tinha 30
          minutos e 10 tinham se passado, a sessão será reaberta com 20 minutos
          (debitando os 10 passados ou o mais próximo disso). Serão 2 tentativas
          no máximo.
        </p>
        <p>
          10.4 Se não houver solução para o problema técnico durante a prova e
          ela estava a menos de 50% da corrida, a etapa será cancelada e os
          pontos somados pela METADE com base na classificação do QUALY. Porém,
          se mais de 50% da corrida for concluída, a pontuação será distribuída
          normalmente com base na volta anterior ao problema.
        </p>
      </div>

      <div id="pontuacao" className={styles.oficial}>
        <h2>11. PONTUAÇÃO DAS CORRIDAS PARA OS CAMPEONATOS</h2>
        <p>
          11.1 O G3 (3 Pilotos mais bem colocados) do grid de nível mais baixo
          (1 estrela/LIGHT) ficarão impossibilitados de jogar neste mesmo grid
          nas próximas 3 temporadas. Podendo optar por subir para o grid de
          nível mais alto (2 estrelas ou mais como o PRO-AM).
        </p>
      </div>

      <div id="pontuacaoequipe" className={styles.oficial}>
        <h2>12. PONTUAÇÃO DE EQUIPES/PILOTO RESERVA/SUBSTITUTO</h2>
        <p>
          12.1 Para os campeonatos em duplas com pontuação de construtores
          (equipes) a pontuação será a somados pontos dos 2 pilotos. Por
          exemplo: Márcio fez 25 pontos e Luan 10, a equipe deles pontuará 35
          pontos (25+10). A formação das duplas será decidida primeiramente
          através da escolha das equipes pelos pilotos inscritos, os mesmos
          podem escolher uma das vagas e pintura (original ou skin
          personalizada) e formar a dupla com quem preferirem. Os pilotos que
          ficarem sem dupla serão sorteados no dia do anúncio das equipes (será
          informado no site e grupo do WhatsApp).
        </p>
        <p>
          12.2 Para os campeonatos em duplas, um piloto reserva poderá
          substituir outro piloto que falte e deixe uma vaga livre, (a
          prioridade de entrada é definida por quem se inscreveu primeiro no
          site). Por exemplo: Luiz e Fábio estão na equipe Shell V-Power, porém
          em qualquer uma das etapas Luiz falta, um dos pilotos reserva poderá
          entrar em seu lugar e somar os pontos para a equipe Shell V-Power
          (isso não poderá ser feito por pilotos de outras equipes).
        </p>
        <p>
          12.3 Para os campeonatos como formato de equipe dinâmica, será
          realizado sorteio para definição dos pilotos de cada uma (exceto no
          caso dos parceiros que tem direito de 2 ou 4 escolhas para sua equipe
          dependendo do plano acordado). Temos também o sistema de substituição
          dentro da mesma equipe para as ausências, por exemplo, Luiz Gomes da
          equipe RPM falta, outro piloto desta mesma equipe poderá substituí-lo
          nesta corrida, é obrigatório o aviso na lista de presença tanto do
          piloto ausente quanto do substituto. O mesmo piloto que está
          substituindo também deverá respeitar todas as regras e caso receba um
          pedido de análise e a mesma seja aprovada, a punição será direcionada
          a seu grid principal.{" "}
        </p>
        <p>Exemplos de sinalização na lista de presença:</p>
        <p>
          12.4 No caso de dupla ou tripla inscrição (2 ou 3 grids), a vaga do
          grid mais alto ou definida pela direção contará principal para o
          sistema de equipes dinâmico, as outras serão alocadas na Equipe Livre
          que não disputa o campeonato. Porém, mesmo assim pode-se substituir um
          piloto ou vaga livre disponível na sua equipe.
        </p>
        <p>
          12.5 A inscrição como piloto reserva (inscrição após esgotamento das
          vagas) deverá realizar os mesmos procedimentos no site como qualquer
          outro piloto. O piloto reserva terá de depender da ausência de um
          piloto principal e caso não consiga participar por falta de vagas,
          poderá requisitar o reembolso da inscrição ou alteração do grid caso
          queira.{" "}
        </p>
      </div>

      <div id="resultado" className={styles.oficial}>
        <h2>13. DESCARTE DO PIOR RESULTADO NA TEMPORADA</h2>
        <p>
          Para pontuação do campeonato (Individual & equipes) temos o sistema de
          descarte, que habilita ao piloto uma chance de recuperação no
          campeonato após um abandono, não participação ou mau desempenho. Será
          permitido descartar apenas 1 etapa, seja ela por ausência, abandono ou
          pior resultado em pontuação. Substituições dentro do campeonato de
          equipes dinâmico ou de eventos especiais como a World Series não podem
          ser descartados.
        </p>
      </div>

      <div id="skins" className={styles.oficial}>
        <h2>14. ENVIO DE PINTURAS (SKINS)</h2>
        <p>
          O envio de skins e pinturas é feito através do site (aba Skin-set) e
          deve respeitar algumas regras a seguir:
        </p>
        <ul>
          <li>
            Automobilista 2: deve ser feito o envio da pasta com o nome da skin
            + arquivo XML com os dados necessários. (
            <a href="exemploaqui">exemplo aqui</a>)
          </li>
          <li>
            Assetto Corsa 1: deve ser feito o envio da pasta com os conteúdos da
            skin (<a href="exemploaqui">exemplo aqui</a>) e também o envio da
            sua GUID (<a href="exemploaqui">exemplo aqui</a>)
          </li>
          <li>
            AC Competizione: deve ser feito o envio da pasta "Customs" e seu
            conteúdo (<a href="exemploaqui">exemplo aqui</a>)
          </li>
        </ul>
        <p>
          Qualquer pintura que seja enviada fora dos padrões acima será
          desconsiderada.
        </p>
        <p>
          O prazo máximo para envio da pintura (para ser incluída no pacote
          Skin-Set) fica sempre no site (aba calendário, escolha seu grid)
          localizado na parte inferior da página. Após este prazo, as pinturas
          não serão mais adicionadas ao skin-set, mas ainda podem ser enviadas
          para aparecerem na transmissão ao vivo.
        </p>
      </div>

      <div id="trofeu" className={styles.oficial}>
        <h2>15. ENTREGA DE TROFÉU (PREMIAÇÃO DO CAMPEONATO)</h2>
        <p>
          Os premiados com troféu receberão o prêmio que será enviado pelos
          correios para qualquer região do Brasil, porém temos algumas
          limitações principalmente com valores de frete e também valor mínimo
          para compra no site da fornecedora, então algumas regras terão de ser
          seguidas:
        </p>
        <ul>
          <li>
            Primeiramente precisamos deixar claro que é a primeira vez que
            iremos introduzir este novo sistema de premiações, portanto ainda é
            necessário todo o entendimento e aperfeiçoamento do mesmo, ou seja,
            precisamos da compreensão de todos com possíveis imprevistos que
            possam acontecer.
          </li>
          <li>
            O troféu só poderá ser entregue quando o valor mínimo do pedido para
            a fornecedora for atingido, simplificando, precisaremos entregar os
            troféus de 5 em 5 meses para concluirmos esse objetivo.
          </li>
          <li>
            O valor do frete será pago pela organização e pelo piloto, o
            primeiro valor (para trazer todos os troféus) será pago pela
            organização, o segundo valor (frete da organização para o piloto)
            será pago pelo próprio piloto.
          </li>
        </ul>
      </div>

      <div id="redessociais" className={styles.oficial}>
        <h2>16. DIVULGAÇÃO DE LIGA/EVENTO/OUTRAS MÍDIAS NAS REDES SOCIAIS</h2>
        <p>
          16.1 É proibida a divulgação de incidentes/exposição de pilotos nos
          grupos/redes sociais/chats in-game e outros meios de comunicação, seja
          de campeonatos feitos pela RPM ou qualquer outra liga no Assetto Corsa
          ou até mesmo em outros jogos. Será feita uma advertência e caso não
          seja respeitada, resultará na remoção/banimento do piloto do meio de
          comunicação em que foi feita a divulgação, ou até mesmo o banimento
          permanente de toda a liga dependendo da gravidade.
        </p>
        <p>
          16.2 Divulgação de ligas/corridas/links e outras maneiras de promover
          seu grupo/campeonato/organização através das redes sociais da RPM
          Esports sem autorização, não poderão ser feitas.
        </p>
      </div>

      <div id="idade" className={styles.oficial}>
        <h2>17. RESTRIÇÃO DE IDADE PARA MÍDIAS SOCIAIS/ENTREVISTAS</h2>
        <p>
          17.1 Todo piloto menor de 13 anos só poderá participar das mídias
          sociais e eventos RPMEsports com a supervisão dos responsáveis,
          evitando assim maiores problemas.
        </p>
        <p>
          17.2 Após o término dos eventos, temos as entrevistas com os
          participantes no nosso Discord, a participação não é obrigatória,
          porém ao participar algumas regras devem ser seguidas. Qualquer tipo
          de ofensa verbal, ou indiretas feitas para tentar denegrir a imagem de
          qualquer participante ou equipe jamais serão permitidas, caso ocorra
          será dada uma advertência, se não houver a colaboração, o usuário será
          mutado até o fim da entrevista, e dependendo da gravidade, poderá
          resultar no banimento/suspensão do piloto da liga.
        </p>
      </div>
    </div>
  );
}

export default Regulamento;

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
            <a href="#pontuacao-equipe">
              12. PONTUAÇÃO DE EQUIPES/PILOTO RESERVA/SUBSTITUTO/PINTURAS
            </a>
          </li>
          <li>
            <a href="#divulgacao">
              13. DIVULGAÇÃO DE LIGA/EVENTO/E OUTRAS MÍDIAS NAS REDES SOCIAIS
            </a>
          </li>
          <li>
            <a href="#restricao">
              14. RESTRIÇÃO DE IDADE PARA MÍDIAS SOCIAIS/ENTREVISTAS
            </a>
          </li>
        </ol>
      </div>

      <div id="introducao" className={styles.oficial}>
        <h2>1. INTRODUÇÃO - SEJA BEM VINDO A RPM ESPORTS</h2>
        <ol>
          <li>1.1 O que é a RPM?</li>

          <li>
            RPM Esports é um clube de pilotos e também Liga E-Sports focada
            atualmente no automobilismo virtual, ou seja, eventos virtuais nos
            jogos pré-definidos, visando temporadas divertidas, competitivas,
            emocionantes e memoráveis, dando valor a cada uma delas e seus
            pilotos através do Hall da Fama no site. Todos os links necessários
            e informações sobre as etapas/datas/regras e outros detalhes estão
            aqui:
            <a href="https://linktr.ee/RPMEsports" target="_blank">
              https://linktr.ee/RPMEsports
            </a>
          </li>
          <li>1.2 Qual a proposta? Onde queremos chegar?</li>
          <li>
            {" "}
            RPM Esports tem como principal objetivo presenciar corridas de nível
            iniciante, intermediário e competitivo, visando a evolução na pista,
            acessibilidade ao Automobilismo Virtual e claro, muita diversão.
            Temos como grande objetivo promover o Automobilismo Virtual,
            trazendo mais pessoas para este universo e tirando esta categoria
            dos jogos de nicho, ou seja, transformar o AV em uma categoria mais
            jogada e respeitada do que é atualmente, com muito mais variedade.
          </li>
        </ol>
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
        <h3>
          3.1 Respeito com os demais pilotos e pessoas do grupo em qualquer meio
          de comunicação da RPM Esports
        </h3>
        <p>
          Qualquer tipo de preconceito, desrespeito, postagem de conteúdo
          indevido como conteúdos de política, pornografia, discursos de ódio,
          violência, intolerância religiosa ou racial não será tolerado, podendo
          ser aplicado o banimento do mesmo, e dependendo da gravidade, podendo
          ser permanente.
        </p>
        <h3>
          3.2 Desrespeito a jogadores que utilizam assistências de pilotagem não
          será tolerado
        </h3>
        <p>
          Esta atitude poderá resultar na remoção do grupo por tempo
          indeterminado.
        </p>
        <h3>
          3.3 Os pilotos inscritos ou participantes de algum evento oficial na
          RPM Esports autorizam a utilização da imagem e voz nas transmissões ao
          vivo e atividades promovidas pela organização.
        </h3>
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
          através da plataforma PIX via chave ou QR CODE que será comunicada
          através dos sistemas de inscrição ou redes sociais e também no site.
        </p>
        <p>
          Método de participação e valores: Para jogar em um dos grids o valor
          da inscrição fica em R$20,00 (por piloto), um valor mais baixo pode
          ser informado também no site. Treinos, Forfun e eventos especiais têm
          seus valores gratuitos, não necessitando de taxa de inscrição (podem
          haver exceções).
        </p>

        <h3>
          4.2 Para participação parcial da temporada, temos um desconto nos
          valores da inscrição:
        </h3>
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
        <img
        alt=""
        src={imagem.punicao}
        />          
         
      </div>





    </div>
  );
}

export default Regulamento;

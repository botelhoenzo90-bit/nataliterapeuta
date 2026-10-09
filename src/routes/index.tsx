import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronDown,
  Clock3,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Monitor,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Video,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

import portrait from "@/assets/idalecia-retrato.png.asset.json";
import office from "@/assets/idalecia-consultorio.png.asset.json";
import clinic from "@/assets/clinica-fachada.png.asset.json";
import whatsappIcon from "@/assets/whatsapp.png.asset.json";
import depression from "@/assets/depressao.webp.asset.json";
import anxiety from "@/assets/ansiedade.png.asset.json";
import dependency from "@/assets/dependencia-emocional.png.asset.json";
import fears from "@/assets/medos.png.asset.json";
import trauma from "@/assets/traumas.png.asset.json";
import panic from "@/assets/panico.webp.asset.json";
import insomnia from "@/assets/insonia.png.asset.json";
import esteem from "@/assets/autoestima.png.asset.json";
import relationships from "@/assets/relacionamentos.png.asset.json";
import grief from "@/assets/luto.png.asset.json";
import sharePhoto from "@/assets/idalecia-compartilhar.jpg.asset.json";

const siteUrl = "https://nataliterapeuta.lovable.app";
const shareUrl = new URL(sharePhoto.url, siteUrl).href;

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Natali | terapias integrativas e escuta terapêutica em atendimento online, presencial e domiciliar e online" },
      { name: "description", content: "terapias integrativas e escuta terapêutica com Natali em atendimento online, presencial e domiciliar e online. Atendimento individual para ansiedade, traumas e questões emocionais. Consulte horários." },
      { property: "og:title", content: "Natali | terapias integrativas e escuta terapêutica em atendimento online, presencial e domiciliar e online" },
      { property: "og:description", content: "Conheça Natali, psicanalista e terapeuta integrativa emocional. Atendimento presencial no Centro de atendimento online, presencial e domiciliar e online, com escuta individualizada e acolhimento." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "google-site-verification", content: "9myn0HdI7aGpUZnVvPyhIOqrxVOLgTJA9XtYO1VNmew" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: shareUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Natali, psicanalista e terapeuta integrativa emocional" },
      { name: "twitter:image", content: shareUrl },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Natali — Psicanalista e Terapeuta Integrativa", inLanguage: "pt-BR" },
          {
            "@type": "LocalBusiness", "@id": `${siteUrl}/#atendimento`,
            name: "Natali — Psicanalista e Terapeuta Integrativa", url: siteUrl,
            telephone: "+55 51 9875-1059",
            description: "Atendimento de terapias integrativas e escuta terapêutica presencial em atendimento online, presencial e domiciliar e online.",
            address: {
              "@type": "PostalAddress", streetAddress: "Consulte o endereço pelo WhatsApp",
              addressLocality: "Brasil",
              postalCode: "Agendamento prévio", addressCountry: "BR",
            },
          },
        ],
      }),
    }],
  }),
  component: Index,
});

const whatsapp = "https://wa.me/555198751059";
const clinicMapUrl = "";
const clinicVideoUrl = "";

const issues = [
  ["Dores emocionais", "Acolhimento e organização emocional para momentos de desânimo e perda de sentido."],
  ["Ansiedade e estresse", "Um espaço para compreender padrões emocionais e desenvolver mais segurança no dia a dia."],
  ["Relacionamentos e casais", "Trabalhe limites, autoestima e padrões que afetam seus relacionamentos."],
  ["Medos e inseguranças", "Compreenda reações emocionais e avance no seu processo com acompanhamento."],
  ["Questões emocionais", "Um processo estruturado e acolhedor para olhar para experiências que ainda pesam."],
  ["Equilíbrio emocional", "Acolhimento para compreender suas experiências e buscar mais equilíbrio emocional."],
  ["Sono e bem-estar", "Investigue padrões emocionais que podem estar relacionados à dificuldade de desacelerar."],
  ["Autoconhecimento", "Fortaleça sua percepção de si e construa relações mais saudáveis consigo."],
  ["Relacionamentos e casais", "Mais clareza para lidar com conflitos, inseguranças e padrões repetitivos."],
  ["Conflitos familiares", "Um espaço seguro para atravessar mudanças e experiências de perda."],
];

const issueImages = [depression, anxiety, dependency, fears, trauma, panic, insomnia, esteem, relationships, grief];

const reviews = [
  { name: "Mariana S.", text: "Um espaço de escuta, respeito e acolhimento para falar sobre o que você sente." },
  { name: "Camila R.", text: "Cuidado individualizado, com atenção à sua história e ao seu momento." },
  { name: "Juliana M.", text: "Uma condução acolhedora para olhar para suas emoções com mais consciência." },
  { name: "Ana P.", text: "Privacidade e respeito à individualidade, no atendimento presencial ou online." },
];

const faq = [
  ["Quais abordagens Natali utiliza?", "Natali oferece psicanálise, terapia integrativa emocional, terapias cognitivo-comportamentais e TRG Kids. A abordagem é definida de forma individualizada."],
  ["Quais modalidades de atendimento estão disponíveis?", "Natali atende online, presencialmente e em domicílio, conforme disponibilidade e região atendida."],
  ["Quanto tempo dura o atendimento?", "A duração e a frequência são conversadas diretamente com Natali, considerando a necessidade e a modalidade de atendimento."],
  ["Quais atendimentos estão disponíveis?", "Os atendimentos incluem psicanálise, terapia integrativa emocional, terapias cognitivo-comportamentais, TRG Kids, massoterapia e palestras de saúde emocional e desenvolvimento pessoal."],
  ["A terapia substitui acompanhamento médico?", "Não. A terapia não substitui avaliação ou tratamento médico quando eles forem necessários. Em situações de sofrimento intenso, procure também um profissional de saúde adequado."],
  ["Como começo?", "Clique em um dos botões de agendamento e envie uma mensagem. Você poderá tirar suas dúvidas e verificar a modalidade de atendimento mais adequada."],
];

function goWhatsapp(message: string) {
  window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="site">
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Natali</h1>
            <p className="hero-title">Psicanalista • Terapeuta Integrativa Emocional</p>
            <p className="hero-statement">Cuidar da mente é transformar a vida.</p>
            <p className="hero-lead">Acolhimento, escuta e cuidado para uma vida mais leve, consciente e com significado.</p>
            <div className="hero-credentials"><span><ShieldCheck size={17}/> Escuta ativa e acolhimento</span><span><Monitor size={17}/> Online, presencial e domiciliar</span></div>
            <div className="hero-actions">
              <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero agendar uma conversa sobre a terapias integrativas e escuta terapêutica.")}><MessageCircle/> Agendar uma conversa</Button>
              <Button variant="siteGhost" size="site" asChild><a href="#processo">Conhecer o processo <ArrowRight/></a></Button>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee"><div><span>ANSIEDADE</span><i>✦</i><span>DEPRESSÃO</span><i>✦</i><span>DEPENDÊNCIA EMOCIONAL</span><i>✦</i><span>TRAUMAS</span><i>✦</i><span>MEDOS</span><i>✦</i><span>AUTOESTIMA</span><i>✦</i><span>RELACIONAMENTOS</span><i>✦</i><span>FOBIAS</span><i>✦</i><span>LUTO</span><i>✦</i><span>ANSIEDADE</span><i>✦</i><span>DEPRESSÃO</span><i>✦</i><span>DEPENDÊNCIA EMOCIONAL</span><i>✦</i><span>TRAUMAS</span><i>✦</i><span>MEDOS</span><i>✦</i></div></div>

      <section className="section intro-section">
        <div className="container narrow center">
          <span className="eyebrow">QUANDO O EMOCIONAL PEDE CUIDADO</span>
          <h2>Quando algo dentro de você pede <em>atenção</em>, ouvir pode ser o primeiro passo.</h2>
          <p>Existem padrões emocionais que se repetem, medos que limitam, relações que machucam e sentimentos que parecem difíceis de explicar. A terapia cria um espaço seguro para olhar para tudo isso com mais consciência e cuidado.</p>
          <div className="center action">
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero agendar meu atendimento.")}>Agendar meu atendimento <MessageCircle size={18}/></Button>
          </div>
        </div>
      </section>

      <section className="section soft" id="especialidades">
        <div className="container issues-container">
          <div className="section-heading center">
            <span className="eyebrow">QUESTÕES TRABALHADAS</span>
            <h2>Suas dores físicas e emocionais <em>merece ser compreendido.</em></h2>
            <p>O acompanhamento é individualizado e pode abordar diferentes dificuldades emocionais e comportamentais.</p>
          </div>
          <div className="issue-window"><div className="issue-track">
            {[0, 1].map(copy => <div className="conveyor-group" aria-hidden={copy === 1 ? true : undefined} key={copy}>
              {issues.map(([title,text], i) => <article className="issue-card" key={title}>
                <img className="issue-image" src={issueImages[i]?.url} alt={copy === 0 ? title : ""} loading="lazy"/>
                <div className="issue-body"><h3>{title}</h3><p>{text}</p></div>
              </article>)}
            </div>)}
          </div></div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero agendar meu atendimento.")}>Agendar meu atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section process" id="processo">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">COMO FUNCIONA</span>
            <h2>Um processo com <em>acolhimento e direção.</em></h2>
            <p>Da primeira conversa ao acompanhamento, cada etapa é pensada para que você saiba onde está e para onde está caminhando.</p>
          </div>
          <div className="steps">
            {[
              ["01","Primeiro contato","Você conversa com a Natali, apresenta o que está vivendo e tira suas primeiras dúvidas."],
              ["02","Entendimento","O momento atual e suas principais questões são compreendidos de forma individualizada."],
              ["03","Processo terapêutico","As sessões seguem uma condução estruturada, respeitando seu ritmo e suas necessidades."],
              ["04","Novos caminhos","O objetivo é ampliar consciência e construir formas mais saudáveis de lidar com suas experiências."]
            ].map(([n,t,d]) => <article className="step" key={n}><div className="step-num">{n}</div><div><h3>{t}</h3><p>{d}</p></div></article>)}
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero agendar uma conversa.")}>Agendar conversa <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section clinic-story">
        <div className="container clinic-story-grid">
          <div className="clinic-copy">
            <span className="eyebrow">UM ESPAÇO PARA VOCÊ</span>
            <h2>Mais do que uma sessão: um lugar para <em>se ouvir.</em></h2>
            <p>O atendimento considera a pessoa por inteiro: corpo, emoções e contexto de vida. O primeiro passo é acolher, ouvir com atenção e compreender o que precisa de cuidado.</p>
            <p>Os atendimentos podem acontecer online, presencialmente ou em domicílio, conforme disponibilidade e modalidade indicada.</p>
            
            <div className="clinic-highlights">
              <div><ShieldCheck size={18}/><span><strong>Privacidade</strong>Um atendimento reservado e individual.</span></div>
              <div><HeartHandshake size={18}/><span><strong>Acolhimento</strong>Escuta respeitosa, sem julgamentos.</span></div>
              <div><Monitor size={18}/><span><strong>Flexibilidade</strong>Opções presencial e online.</span></div>
            </div>
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero conhecer o espaço e entender como funciona o atendimento.")}>Conhecer o atendimento <ArrowRight size={18}/></Button>
          </div>
          <Carousel className="clinic-gallery" opts={{ loop: true }} aria-label="Fotos do espaço de atendimento">
            <CarouselContent>
              <CarouselItem><figure className="clinic-slide"><img src={office.url} alt="Espaço de atendimento" loading="lazy"/></figure></CarouselItem>
              <CarouselItem><figure className="clinic-slide"><img src={clinic.url} alt="Espaço de atendimento, espaço de atendimento" loading="lazy"/></figure></CarouselItem>
            </CarouselContent>
            <CarouselPrevious variant="siteGold" className="clinic-arrow clinic-arrow-prev" aria-label="Foto anterior" title="Foto anterior"/>
            <CarouselNext variant="siteGold" className="clinic-arrow clinic-arrow-next" aria-label="Próxima foto" title="Próxima foto"/>
          </Carousel>
        </div>
      </section>


      <section className="section video-section" id="video">
        <div className="container video-section-grid">
          <div className="video-copy">
            <span className="eyebrow">CONHEÇA A NATALI</span>
            <h2>Conheça o trabalho de Natali e <em>o seu processo.</em></h2>
            <p>Em breve, este espaço poderá apresentar um vídeo de Natali explicando sua abordagem, os atendimentos e como o cuidado pode começar.</p>
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de conhecer melhor o seu atendimento.")}>Quero conhecer o atendimento <ArrowRight size={18}/></Button>
          </div>
          <div className="video-frame">
            {clinicVideoUrl ? (
              <video controls preload="metadata" playsInline src={clinicVideoUrl}>
                <source src={clinicVideoUrl} />
                Seu navegador não consegue reproduzir este vídeo.
              </video>
            ) : (
              <div className="video-placeholder">
                <div className="video-play"><Video size={30}/></div>
                <strong>Seu vídeo será exibido aqui</strong>
                <span>Espaço reservado para o vídeo de apresentação de Natali.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="container about-grid">
          <figure className="about-image"><img src={portrait.url} alt="Imagem de apresentação da terapeuta Natali" loading="lazy"/></figure>
          <div className="about-copy">
            <span className="eyebrow">SOBRE A NATALI</span>
            <h2>Conhecimento, acolhimento e um olhar <em>individualizado.</em></h2>
            <p>Natali atua como psicanalista, terapeuta integrativa emocional, com terapias cognitivo-comportamentais e atendimento infantil TRG Kids.</p>
            <p>Seu trabalho integra escuta ativa, terapia de fala, terapias integrativas e massoterapia, buscando acolher as dores emocionais e físicas e aliviar o desconforto inicial do paciente.</p>
            <div className="about-points"><div><Check size={17}/> Atendimento individual</div><div><Check size={17}/> Online e presencial</div><div><Check size={17}/> Terapia Integrativa e Emocional</div></div>
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero agendar uma conversa.")}>Agendar conversa <MessageCircle size={18}/></Button>
          </div>
        </div>
      </section>

      <section className="section method-section">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">A SOLUÇÃO COMEÇA PELO CUIDADO</span><h2>Existe um caminho para sair do automático e construir <em>novas possibilidades.</em></h2><p>O processo terapêutico oferece um espaço estruturado para compreender o que está por trás do sofrimento, reorganizar padrões emocionais e avançar com mais consciência.</p></div>
          <div className="method-cards">
            <article><div className="method-icon"><Brain size={21}/></div><span>01</span><h3>Compreender</h3><p>Olhar para o que você sente e identificar padrões que se repetem na sua vida.</p></article>
            <article><div className="method-icon"><HeartHandshake size={21}/></div><span>02</span><h3>Acolher</h3><p>Ter um espaço seguro para falar sobre experiências difíceis com respeito à sua história.</p></article>
            <article><div className="method-icon"><Sparkles size={21}/></div><span>03</span><h3>Reorganizar</h3><p>Construir novas perspectivas para lidar com emoções, relações e situações do cotidiano.</p></article>
            <article><div className="method-icon"><ArrowRight size={21}/></div><span>04</span><h3>Avançar</h3><p>Levar mais consciência para suas escolhas, limites e próximos passos.</p></article>
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero conhecer o processo terapêutico e agendar meu atendimento.")}>Começar meu processo <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section specialty">
        <div className="container specialty-grid">
          <div><span className="eyebrow">ABORDAGEM COMPLEMENTAR</span><h2>Leitura Corporal e <em>Comportamental</em></h2><p>Existem dores físicas e dores emocionais. O cuidado pode envolver escuta ativa e terapia de fala, terapias integrativas e massoterapia, buscando primeiro acolher e aliviar o desconforto de cada paciente.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero saber mais sobre a Terapia Integrativa e Emocional.")}>Quero saber mais <ArrowRight size={18}/></Button></div>
          <div className="specialty-quote"><Brain size={32}/><p>“Compreender seus padrões pode ser o começo de uma nova forma de se relacionar consigo mesmo.”</p></div>
        </div>
      </section>

      <section className="section benefits">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">POR QUE ESCOLHER A NATALI</span><h2>Um atendimento pensado para olhar para <em>você por inteiro.</em></h2><p>Experiência, acolhimento e acompanhamento individualizado para quem deseja compreender melhor o que está vivendo.</p></div>
          <div className="benefit-grid">
            {[["Escuta individualizada","Cada pessoa possui uma história, experiências e necessidades diferentes."],["Abordagens integrativas","terapias integrativas e escuta terapêutica, Terapia Integrativa e Emocional e certificação internacional."],["Modalidades de atendimento","Atendimento online, presencial e domiciliar, conforme disponibilidade."],["Ambiente acolhedor","Um espaço de respeito, privacidade e cuidado durante todo o processo."]].map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero agendar um atendimento com você.")}>Agendar meu atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section reviews">
        <div className="container reviews-container">
          <div className="section-heading center"><span className="eyebrow">AVALIAÇÕES</span><h2>Acolhimento que faz parte de <em>cada encontro.</em></h2><p>Ser ouvido com respeito pode ser o primeiro passo para um novo começo.</p></div>
          <div className="review-window"><div className="review-track">{[0,1].map(copy => <div className="conveyor-group" aria-hidden={copy === 1 ? true : undefined} key={copy}>{reviews.map(({name,text})=><article className="review-card" key={name}><div className="review-stars" aria-label="Cinco estrelas ilustrativas">{[0,1,2,3,4].map(star=><Star key={star} size={18}/>)}</div><p>{text}</p><div className="review-person"><div className="review-avatar"><UserRound size={24}/></div><div className="review-person-info"><h3>{name}</h3><span>Paciente da clínica</span></div></div></article>)}</div>)}</div></div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero conversar sobre um atendimento.")}>Agendar atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section location">
        <div className="container location-grid">
          <figure className="location-map">
            {clinicMapUrl ? <iframe title="Google Maps — clínica em atendimento online, presencial e domiciliar" src={clinicMapUrl} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/> : <div className="location-map-pending"><MapPin size={36}/><p>Mapa temporariamente indisponível.</p></div>}
            <figcaption>Atendimento online, presencial e domiciliar<br/>Agendamento prévio pelo WhatsApp</figcaption>
          </figure>
          <div className="location-copy"><span className="eyebrow">ATENDIMENTO</span><h2>Online, presencial ou domiciliar, <em>onde fizer sentido para você.</em></h2><p>Escolha a modalidade mais adequada para sua rotina. Para atendimento presencial, entre em contato para consultar disponibilidade e horários.</p><div className="location-list"><div><MapPin size={18}/><span><strong>Presencial e domiciliar</strong>Consulte disponibilidade e região atendida pelo WhatsApp.</span></div><div><Video size={18}/><span><strong>Online</strong>Atendimento à distância, com praticidade e privacidade.</span></div><div><Clock3 size={18}/><span><strong>Horários</strong>Consulte diretamente com a Natali os horários disponíveis.</span></div></div><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de consultar horários e modalidade de atendimento.")}>Consultar horários <ArrowRight size={18}/></Button></div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Talvez a sua dúvida esteja <em>aqui.</em></h2><p>Se ainda não encontrou a resposta que procura, fale diretamente com a Natali.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Tenho uma dúvida sobre a terapia.")}>Tirar uma dúvida <MessageCircle size={18}/></Button></div>
          <div className="faq-list">{faq.map(([q,a],i)=><div className={`faq-item ${openFaq===i ? "open":""}`} key={q}><Button variant="sitePlain" size="site" aria-expanded={openFaq===i} onClick={() => setOpenFaq(openFaq===i ? null : i)}><span>{q}</span><ChevronDown size={18}/></Button>{openFaq===i && <p>{a}</p>}</div>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container center"><span className="eyebrow">SEU PROCESSO COMEÇA COM UMA CONVERSA</span><h2>Você não precisa entender tudo agora para <em>dar o primeiro passo.</em></h2><p>Converse com Natali, conte o que você está sentindo e conheça as possibilidades de cuidado.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero dar o primeiro passo e conhecer a terapias integrativas e escuta terapêutica.")}>Quero conversar com Natali <ArrowRight size={19}/></Button></div>
      </section>

      <footer><div className="container footer-grid"><div><div className="brand footer-brand">Natali</div><p>Psicanalista<br/>Terapeuta Integrativa Emocional • TCC • TRG Kids</p></div><div><strong>Atendimento</strong><span>Online, presencial e domiciliar</span><span>Consulte horários</span></div><div><strong>Contato</strong><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de agendar um atendimento.")}><MessageCircle size={16}/> WhatsApp</Button><a href="#inicio"><Instagram size={16}/> Instagram</a></div></div><div className="footer-bottom">© {new Date().getFullYear()} Natali. Todos os direitos reservados.</div></footer>

      <Button variant="whatsapp" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de saber mais sobre a terapias integrativas e escuta terapêutica.")} aria-label="Falar no WhatsApp"><img src={whatsappIcon.url} alt=""/></Button>
    </main>
  );
}

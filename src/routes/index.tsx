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
import sharePhoto from "@/assets/natali-compartilhar.jpg.asset.json";
import logo from "@/assets/logo-natali.png.asset.json";

const siteUrl = "https://nataliterapeuta.lovable.app";
const shareUrl = new URL(sharePhoto.url, siteUrl).href;

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Natali | Psicanálise, cuidado emocional e terapias integrativas" },
      { name: "description", content: "Psicanálise, terapia integrativa emocional, terapias cognitivo-comportamentais e TRG Kids. Atendimento online, presencial e domiciliar mediante agendamento." },
      { property: "og:title", content: "Natali | Psicanálise, cuidado emocional e terapias integrativas" },
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
      { property: "og:image:alt", content: "Logomarca Natali — Psicanalista e Terapeuta" },
      { name: "twitter:image", content: shareUrl },
    ],
    links: [
      { rel: "canonical", href: siteUrl },
      { rel: "apple-touch-icon", href: logo.url },
    ],
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
const clinicMapUrl = "https://www.google.com/maps?q=Porto+Alegre,+RS,+Brasil&output=embed";
const clinicVideoUrl = "";

const issues = [
  ["Ansiedade e sobrecarga", "Um espaço para conversar sobre preocupações, rotina e emoções difíceis."],
  ["Autoconhecimento", "Reflexão sobre sentimentos, escolhas, limites e relações."],
  ["Relações e família", "Compreender conflitos, comunicação e vínculos importantes."],
  ["Cuidado infantil", "Atendimento infantil TRG Kids, conforme avaliação e adequação."],
  ["Mudanças de vida", "Apoio para refletir sobre desafios e fases de transição."],
  ["Terapia integrativa", "Possibilidades de cuidado conversadas de forma individualizada."],
  ["Escuta terapêutica", "Um espaço de conversa com atenção à sua experiência."],
  ["Terapia cognitivo-comportamental", "Abordagem a ser conversada conforme sua necessidade e objetivos."],
  ["Saúde emocional", "Palestras e conversas sobre bem-estar e desenvolvimento pessoal."],
];

const issueImages = [depression, anxiety, dependency, fears, trauma, panic, insomnia, esteem, relationships, grief];

const reviews = [
  { name: "Mariana Oliveira", text: "Eu gostei muito de ter um espaço onde pude falar com tranquilidade, sem sentir que precisava esconder o que estava passando. A conversa me ajudou a olhar para algumas situações de outro jeito." },
  { name: "Camila Rodrigues", text: "Desde o primeiro contato, me senti acolhida e respeitada. Foi importante poder tirar minhas dúvidas e entender como o acompanhamento poderia funcionar para mim, no meu tempo." },
  { name: "Juliana Martins", text: "Gostei da atenção e da forma cuidadosa de conduzir a conversa. Consegui organizar melhor algumas ideias e refletir sobre coisas que eu vinha deixando de lado." },
  { name: "Fernanda Costa", text: "Eu estava procurando um atendimento em que pudesse conversar sem julgamentos. A experiência foi acolhedora e me senti à vontade para falar sobre o que era importante para mim." },
];

const faq = [
  ["Quais abordagens Natali utiliza?", "Natali oferece psicanálise, terapia integrativa emocional, terapias cognitivo-comportamentais e TRG Kids. A abordagem é definida de forma individualizada."],
  ["Quais modalidades de atendimento estão disponíveis?", "Natali atende online, presencialmente e em domicílio, conforme disponibilidade e região atendida."],
  ["Quanto tempo dura o atendimento?", "A duração e a frequência são conversadas diretamente com Natali, considerando a necessidade e a modalidade de atendimento."],
  ["Quais atendimentos estão disponíveis?", "Os atendimentos incluem psicanálise, terapia integrativa emocional, terapias cognitivo-comportamentais, TRG Kids e palestras de saúde emocional e desenvolvimento pessoal."],
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
            <img className="natali-logo" src={logo.url} alt="Logomarca Natali — Psicanalista e Terapeuta" />
            <h1>Natali</h1>
            <p className="hero-title">Psicanalista • Terapeuta Integrativa Emocional</p>
            <p className="hero-statement">Seu bem-estar começa quando você encontra espaço para ser ouvida.</p>
            <p className="hero-lead">Um cuidado que considera suas emoções, sua história e as necessidades de cada fase da vida.</p>
            <div className="hero-credentials"><span><ShieldCheck size={17}/> Escuta ativa e acolhimento</span><span><Monitor size={17}/> Online, presencial e domiciliar</span></div>
            <div className="hero-actions hero-actions-centered">
              <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de agendar um atendimento e consultar os horários disponíveis.")}><MessageCircle/> Agendar atendimento</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee"><div className="marquee-track"><div className="marquee-group" aria-hidden="true"><span>PSICANÁLISE</span><i>✦</i><span>TERAPIA INTEGRATIVA</span><i>✦</i><span>TCC</span><i>✦</i><span>TRG KIDS</span><i>✦</i><span>ESCUTA ATIVA</span><i>✦</i><span>SAÚDE EMOCIONAL</span><i>✦</i><span>ATENDIMENTO ONLINE</span><i>✦</i></div><div className="marquee-group" aria-hidden="true"><span>PSICANÁLISE</span><i>✦</i><span>TERAPIA INTEGRATIVA</span><i>✦</i><span>TCC</span><i>✦</i><span>TRG KIDS</span><i>✦</i><span>ESCUTA ATIVA</span><i>✦</i><span>SAÚDE EMOCIONAL</span><i>✦</i><span>ATENDIMENTO ONLINE</span><i>✦</i></div></div></div>

      <section className="section intro-section">
        <div className="container narrow center">
          <span className="eyebrow">UM ESPAÇO PARA RECOMEÇAR</span>
          <h2>Você merece ser acolhida com tempo, respeito e <em>escuta verdadeira.</em></h2>
          <p>Nem sempre é simples colocar em palavras aquilo que pesa. O acompanhamento oferece um espaço de conversa e reflexão para compreender sentimentos, reconhecer necessidades e construir caminhos possíveis no seu ritmo.</p>
          <div className="center action">
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero agendar meu atendimento.")}>Agendar meu atendimento <MessageCircle size={18}/></Button>
          </div>
        </div>
      </section>

      <section className="section soft" id="especialidades">
        <div className="container issues-container">
          <div className="section-heading center">
            <span className="eyebrow">CUIDADO PARA DIFERENTES MOMENTOS</span>
            <h2>Suas dores físicas e emocionais <em>merece ser compreendido.</em></h2>
            <p>Cada pessoa chega com uma história única. Conheça algumas das questões que podem ser acolhidas no acompanhamento.</p>
          </div>
          <div className="issue-window"><div className="issue-track">
            {[0, 1].map(copy => <div className="conveyor-group" aria-hidden={copy === 1 ? true : undefined} key={copy}>
              {issues.map(([title,text], i) => <article className="issue-card" key={title}>
                <img className="issue-image" src={issueImages[i]?.url} alt={title} loading="lazy" />
                <div className="issue-body"><h3>{title}</h3><p>{text}</p></div>
              </article>)}
            </div>)}
          </div></div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero agendar meu atendimento.")}>Agendar meu atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section process situations-section" id="processo">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">ISSO ACONTECE COM VOCÊ?</span>
            <h2>Você sente que está na hora de olhar com mais carinho para <em>o que está vivendo?</em></h2>
            <p>Às vezes, alguns sentimentos e situações se repetem e fica difícil entender tudo sozinho. Você não precisa ter as respostas prontas para começar uma conversa.</p>
          </div>
          <div className="steps situation-cards">
            {[
              ["01","Pensamentos que não desaceleram","Você sente a mente cheia, pensa demais ou tem dificuldade para encontrar um momento de tranquilidade."],
              ["02","Emoções difíceis de organizar","Ansiedade, insegurança ou tristeza aparecem e você nem sempre sabe como lidar com o que sente."],
              ["03","Relações que trazem desgaste","Algumas situações e padrões nos relacionamentos se repetem e você gostaria de compreendê-los melhor."],
              ["04","Vontade de se entender melhor","Você quer se conhecer, reconhecer suas necessidades e encontrar novas formas de lidar com os desafios."]
            ].map(([n,t,d]) => <article className="step" key={n}><div className="step-num">{n}</div><div><h3>{t}</h3><p>{d}</p></div></article>)}
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de conversar e consultar os horários disponíveis para atendimento.")}>Vamos conversar <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section clinic-story">
        <div className="container clinic-story-grid">
          <div className="clinic-copy">
            <span className="eyebrow">UM CUIDADO QUE RESPEITA SUA HISTÓRIA</span>
            <h2>Um espaço para acolher o que você sente e olhar para si com <em>mais gentileza.</em></h2>
            <p>Nem sempre conseguimos explicar tudo o que sentimos — e não é preciso chegar com respostas prontas. A proposta é oferecer uma escuta atenta, sem julgamentos, para que você possa falar sobre sua história, suas dúvidas e aquilo que está pesando neste momento.</p>
            <p>A partir dessa conversa, vocês podem explorar as possibilidades de acompanhamento e entender qual modalidade combina melhor com suas necessidades. O cuidado é construído com respeito à sua individualidade, aos seus limites e ao seu tempo.</p>
            
            <div className="clinic-highlights">
              <div className="clinic-highlight-card"><span className="clinic-highlight-icon"><ShieldCheck size={22}/></span><strong>Privacidade</strong><p>Um espaço individual, com respeito à sua história e discrição em cada conversa.</p></div>
              <div className="clinic-highlight-card"><span className="clinic-highlight-icon"><HeartHandshake size={22}/></span><strong>Acolhimento</strong><p>Escuta atenta e respeitosa, sem julgamentos e sem pressa para encontrar palavras.</p></div>
              <div className="clinic-highlight-card"><span className="clinic-highlight-icon"><Monitor size={22}/></span><strong>Flexibilidade</strong><p>Opções de atendimento online e presencial, conforme disponibilidade.</p></div>
            </div>
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de agendar um atendimento.")}>Agendar atendimento <ArrowRight size={18}/></Button>
          </div>
        </div>
      </section>


      <section className="section about" id="sobre">
        <div className="container about-grid">
          <div className="about-photo about-photo-placeholder"><div className="about-placeholder-content"><UserRound size={44}/><strong>Imagem da Natali</strong><span>Em breve</span></div></div>
          <div className="about-copy">
            <span className="eyebrow">QUEM É NATALI?</span>
            <h2>Um cuidado que começa com <em>escuta, presença e acolhimento.</em></h2>
            <p>Natali é psicanalista e terapeuta integrativa emocional. Seu trabalho reúne escuta individualizada e diferentes possibilidades de cuidado, incluindo terapias cognitivo-comportamentais e atendimento infantil TRG Kids.</p>
            <p>Mais do que chegar com respostas prontas, você pode encontrar um espaço para conversar sobre sua história, compreender o que está vivendo e conhecer as abordagens disponíveis para o seu momento.</p>
            <div className="about-points"><div><Check size={17}/> Atendimento individual</div><div><Check size={17}/> Online e presencial</div><div><Check size={17}/> Corpo e emoções: um olhar integrado</div></div>
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero agendar uma conversa.")}>Agendar conversa <MessageCircle size={18}/></Button>
          </div>
        </div>
      </section>

      <section className="section method-section">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">ABORDAGENS DE CUIDADO</span><h2>Conhecer suas necessidades pode abrir espaço para <em>novas escolhas.</em></h2><p>Psicanálise, terapia integrativa emocional e outras abordagens podem oferecer caminhos diferentes. A indicação e os objetivos devem ser conversados com a profissional.</p></div>
          <div className="method-cards">
            <article><div className="method-icon"><Brain size={21}/></div><span>01</span><h3>Compreender</h3><p>Olhar para o que você sente e identificar padrões que se repetem na sua vida.</p></article>
            <article><div className="method-icon"><HeartHandshake size={21}/></div><span>02</span><h3>Acolher</h3><p>Ter um espaço seguro para falar sobre experiências difíceis com respeito à sua história.</p></article>
            <article><div className="method-icon"><Sparkles size={21}/></div><span>03</span><h3>Reorganizar</h3><p>Construir novas perspectivas para lidar com emoções, relações e situações do cotidiano.</p></article>
            <article><div className="method-icon"><ArrowRight size={21}/></div><span>04</span><h3>Avançar</h3><p>Levar mais consciência para suas escolhas, limites e próximos passos.</p></article>
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de agendar meu atendimento.")}>Agendar meu atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section specialty">
        <div className="container specialty-grid">
          <div><span className="eyebrow">CUIDADO INTEGRATIVO</span><h2>Leitura Corporal e <em>Comportamental</em></h2><p>Dores físicas e emocionais podem impactar o dia a dia. A escuta ativa e o acompanhamento terapêutico podem ajudar a compreender o que você está vivendo e conversar sobre possibilidades de cuidado adequadas às suas necessidades.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de agendar um atendimento e conversar sobre as abordagens disponíveis.")}>Agendar atendimento <ArrowRight size={18}/></Button></div>
          <div className="specialty-quote"><Brain size={32}/><p>“Compreender seus padrões pode ser o começo de uma nova forma de se relacionar consigo mesmo.”</p></div>
        </div>
      </section>

      <section className="section reviews">
        <div className="container reviews-container">
          <div className="section-heading center"><span className="eyebrow">AVALIAÇÕES</span><h2>Acolhimento que faz parte de <em>cada encontro.</em></h2><p>Cada experiência é pessoal. O atendimento é conduzido com respeito, privacidade e atenção às necessidades apresentadas.</p></div>
          <div className="review-window"><div className="review-track">{[0,1].map(copy => <div className="conveyor-group" aria-hidden={copy === 1 ? true : undefined} key={copy}>{reviews.map(({name,text})=><article className="review-card" key={name}><div className="review-stars" aria-label="Estrelas decorativas de exemplo">{[0,1,2,3,4].map(star=><Star key={star} size={18}/>)}</div><p className="review-quote">“{text}”</p><div className="review-person"><div className="review-avatar"><UserRound size={24}/></div><div className="review-person-info"><h3>{name}</h3><span>Experiência de atendimento</span></div></div></article>)}</div>)}</div></div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Quero conversar sobre um atendimento.")}>Agendar atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section location">
        <div className="container location-grid">
          <figure className="location-map">
            {clinicMapUrl ? <iframe title="Google Maps — clínica em atendimento online, presencial e domiciliar" src={clinicMapUrl} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/> : <div className="location-map-pending"><MapPin size={36}/><p>Mapa temporariamente indisponível.</p></div>}
            
          </figure>
          <div className="location-copy"><span className="eyebrow">ATENDIMENTO EM PORTO ALEGRE</span><h2>Encontre uma modalidade de cuidado que combine com <em>sua rotina.</em></h2><p>Natali realiza atendimentos online e consulta a disponibilidade para modalidades presencial e domiciliar em Porto Alegre e região. Entre em contato para confirmar o endereço, a área de atendimento e os horários.</p><div className="location-list location-cards">
            <div className="location-card"><span className="location-card-icon"><MapPin size={21}/></span><strong>Atendimento presencial</strong><p>Consulte a disponibilidade e combine o local pelo WhatsApp.</p></div>
            <div className="location-card"><span className="location-card-icon"><Video size={21}/></span><strong>Atendimento online</strong><p>Converse de onde estiver, com praticidade e privacidade.</p></div>
            <div className="location-card"><span className="location-card-icon"><Clock3 size={21}/></span><strong>Agendamento</strong><p>Consulte os horários disponíveis e escolha o melhor para você.</p></div>
          </div><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de agendar um atendimento e consultar as modalidades disponíveis.")}>Agendar atendimento <ArrowRight size={18}/></Button></div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Talvez a sua dúvida esteja <em>aqui.</em></h2><p>Se ainda não encontrou a resposta que procura, fale diretamente com a Natali.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de agendar um atendimento e tirar algumas dúvidas.")}>Agendar atendimento <MessageCircle size={18}/></Button></div>
          <div className="faq-list">{faq.map(([q,a],i)=><div className={`faq-item ${openFaq===i ? "open":""}`} key={q}><Button variant="sitePlain" size="site" aria-expanded={openFaq===i} onClick={() => setOpenFaq(openFaq===i ? null : i)}><span>{q}</span><ChevronDown size={18}/></Button>{openFaq===i && <p>{a}</p>}</div>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container center"><span className="eyebrow">SEU PROCESSO COMEÇA COM UMA CONVERSA</span><h2>Comece com uma conversa e descubra o que faz sentido para <em>você.</em></h2><p>Envie uma mensagem para tirar dúvidas sobre abordagens, modalidades e agendamento.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de agendar meu primeiro atendimento.")}>Agendar atendimento com Natali <ArrowRight size={19}/></Button></div>
      </section>

      <footer><div className="container footer-grid"><div><img className="natali-logo footer-logo" src={logo.url} alt="Logomarca Natali — Psicanalista e Terapeuta" /><p>Psicanalista<br/>Terapeuta Integrativa Emocional • TCC • TRG Kids</p></div><div><strong>Atendimento</strong><span>Online, presencial e domiciliar</span><span>Consulte horários</span></div><div><strong>Contato</strong><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de agendar um atendimento.")}><MessageCircle size={16}/> WhatsApp</Button><a href="#inicio"><Instagram size={16}/> Instagram</a></div></div><div className="footer-bottom">© {new Date().getFullYear()} Natali. Todos os direitos reservados.</div></footer>

      <Button variant="whatsapp" size="site" onClick={() => goWhatsapp("Olá, Natali! Gostaria de agendar um atendimento.")} aria-label="Falar no WhatsApp"><img src={whatsappIcon.url} alt=""/></Button>
    </main>
  );
}

import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/hooks/useLanguage";
import imgEbike from "@/assets/Strasbourg on an E-Bike.png";
import imgKids from "@/assets/Strasbourg with Kids.png";
import imgWine from "@/assets/The Alsace Wine Route by E-Bike.png";
import imgGermany from "@/assets/Ride Into Germany.png";

const categoryStyles: Record<string, string> = {
  "City Guide":    "bg-blue-900/60 text-blue-300 border border-blue-700/50",
  "Experience":    "bg-amber-900/60 text-amber-300 border border-amber-700/50",
  "Seasonal":      "bg-emerald-900/60 text-emerald-300 border border-emerald-700/50",
  "Family":        "bg-violet-900/60 text-violet-300 border border-violet-700/50",
  "Route":         "bg-sky-900/60 text-sky-300 border border-sky-700/50",
  "Cross-Border":  "bg-rose-900/60 text-rose-300 border border-rose-700/50",
};

export function CategoryTag({ category, className = "" }: { category: string; className?: string }) {
  const style = categoryStyles[category] ?? "bg-dark-surface text-dark-foreground/60 border border-white/10";
  return (
    <span className={`inline-block text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 ${style} ${className}`}>
      {category}
    </span>
  );
}

export const blogPosts = [
  {
    slug: "strasbourg-ebike-where-to-ride",
    category: "City Guide",
    image: imgEbike,
    author: "Prashant K.",
    date: { en: "April 5, 2025", fr: "5 avril 2025", de: "5. April 2025" },
    title: {
      en: "Why Strasbourg Makes More Sense on an E-Bike (And Where to Ride)",
      fr: "Pourquoi Strasbourg est plus logique en vélo électrique (et où rouler)",
      de: "Warum Straßburg mit einem E-Bike mehr Sinn ergibt (und wo man fahren sollte)",
    },
    excerpt: {
      en: "Strasbourg has over 600 km of dedicated bike lanes and terrain flat enough to make every ride effortless. Here's why an e-bike is the only way to truly feel this city.",
      fr: "Strasbourg possède plus de 600 km de pistes cyclables et un terrain suffisamment plat pour rendre chaque trajet sans effort. Voici pourquoi le vélo électrique est la seule façon de vraiment ressentir cette ville.",
      de: "Straßburg verfügt über mehr als 600 km eigener Radwege und ein so flaches Gelände, dass jede Fahrt mühelos wird. Hier lesen Sie, warum ein E-Bike die beste Art ist, diese Stadt wirklich zu erleben.",
    },
    content: {
      en: `<p>Strasbourg sits at the crossroads of two worlds — French charm and German precision — and that mix shows up everywhere. In the cobblestone streets of La Petite France. In the half-timbered houses leaning over dark canals. In a city that takes cycling seriously enough to have built over 600 kilometres of dedicated bike lanes.</p>
<p>If you want to actually feel this city rather than watch it scroll past a bus window, an e-bike puts you exactly where you need to be.</p>

<h2>Strasbourg Was Built for Two Wheels</h2>
<p>This city did not stumble into being bike-friendly. It planned for it. Strasbourg consistently ranks among the top cycling cities in France, with infrastructure that makes riding comfortable whether you are a daily commuter or a visitor exploring for the first time. Learn more about <a href="https://en.wikivoyage.org/wiki/Strasbourg" target="_blank" rel="noopener noreferrer">Strasbourg on Wikivoyage</a>.</p>
<p>The flat terrain helps. Unlike Paris or Lyon, Strasbourg asks nothing difficult of your legs. And when you ride an e-bike, even the occasional slight incline near the European Quarter becomes a non-event. You arrive at your destination without the sweat, without the effort, and with time to actually look at where you are going.</p>

<h2>The Routes That Show You the Real City</h2>
<h3>La Petite France to the European Quarter</h3>
<p>This is the classic ride. Start near the medieval locks at La Petite France, follow the canal paths east, and work your way through <strong>Neustadt</strong> — the German imperial quarter now classified as a UNESCO World Heritage Site — before reaching the European Parliament. The contrast between centuries is striking, and on an e-bike you cover the full route without rushing.</p>
<h3>The Rhine Cycle Path</h3>
<p>Cross the Pont de l'Europe and you are in Germany. The Rhine path runs north and south, flat and wide, through poplar forests and past small Alsatian villages. Ride 10 kilometres south and you reach the village of Rhinau. Ride north and the landscapes open into something much bigger. This cross-border ride works well with an e-bike because the distances that feel ambitious on a regular bicycle become completely manageable.</p>
<h3>Orangerie Park Loop</h3>
<p>For a shorter, relaxed circuit, the loop around <strong>Parc de l'Orangerie</strong> connects to the embassy district and several riverside paths. Good for a morning ride before the city fills up.</p>

<h2>Why an E-Bike Changes the Experience</h2>
<p>A standard bicycle in Strasbourg works perfectly well for locals who ride every day. For visitors who want to cover more ground, stop often for photos, carry a bag, or simply move at a pace that allows conversation, an e-bike changes the calculation entirely.</p>
<p>VéloRouge offers guided e-bike experiences built around exactly this kind of riding — routes chosen for what they show you, not just where they go, with bikes maintained to a level that makes the ride itself disappear into the background.</p>

<h2>Plan Your Ride in Strasbourg</h2>
<p>Spring and early autumn give you the best conditions — mild temperatures, lower tourist crowds, and the kind of golden light that makes Alsatian architecture look exactly as good as it actually is. Strasbourg rewards the slow traveller. An e-bike keeps you slow enough to notice things, and fast enough to see everything.</p>
<p><a href="https://velorouge.fr" target="_blank" rel="noopener noreferrer">Book your e-bike experience at velorouge.fr</a></p>`,
      fr: `<p>Strasbourg se trouve à la croisée de deux mondes — le charme français et la rigueur allemande — et ce mélange se voit partout. Dans les ruelles pavées de la Petite France. Dans les maisons à colombages penchées au-dessus des canaux sombres. Dans une ville qui prend le vélo suffisamment au sérieux pour avoir construit plus de 600 kilomètres de pistes cyclables dédiées.</p>
<p>Si vous voulez vraiment ressentir cette ville plutôt que de la voir défiler derrière une vitre de bus, un vélo électrique vous place exactement là où vous devez être.</p>

<h2>Strasbourg a été Conçue pour Deux Roues</h2>
<p>Cette ville n'est pas devenue cyclable par hasard. Elle l'a planifié. Strasbourg figure régulièrement parmi les meilleures villes cyclables de France, avec des infrastructures qui rendent le vélo agréable, que vous soyez un habitué ou un visiteur qui découvre pour la première fois. En savoir plus sur <a href="https://en.wikivoyage.org/wiki/Strasbourg" target="_blank" rel="noopener noreferrer">Strasbourg sur Wikivoyage</a>.</p>
<p>Le terrain plat aide beaucoup. Contrairement à Paris ou Lyon, Strasbourg ne demande aucun effort particulier à vos jambes. Et sur un vélo électrique, même la légère montée vers le Quartier Européen ne pose aucun problème. Vous arrivez à destination sans transpiration, sans effort, et avec le temps de regarder vraiment où vous allez.</p>

<h2>Les Parcours Qui Vous Montrent la Vraie Ville</h2>
<h3>La Petite France jusqu'au Quartier Européen</h3>
<p>C'est le parcours classique. Commencez près des écluses médiévales de la Petite France, suivez les chemins longeant les canaux vers l'est, traversez le <strong>Neustadt</strong> — le quartier impérial allemand aujourd'hui classé au patrimoine mondial de l'UNESCO — avant d'atteindre les bâtiments de verre et d'acier du Parlement Européen. Le contraste entre les siècles saute aux yeux, et sur un vélo électrique vous couvrez tout le parcours sans jamais vous presser.</p>
<h3>La Piste Cyclable du Rhin</h3>
<p>Traversez le Pont de l'Europe et vous voilà en Allemagne. Le chemin le long du Rhin court vers le nord et le sud, plat et large, à travers des forêts de peupliers et de petits villages alsaciens. Roulez 10 kilomètres vers le sud et vous atteignez le village de Rhinau. Vers le nord, les paysages s'ouvrent sur quelque chose de beaucoup plus grand.</p>
<h3>Le Tour du Parc de l'Orangerie</h3>
<p>Pour un circuit plus court et détendu, la boucle autour du <strong>Parc de l'Orangerie</strong> rejoint le quartier des ambassades et plusieurs chemins longeant la rivière. Idéal pour une sortie matinale avant que la ville ne se remplisse.</p>

<h2>Pourquoi le Vélo Électrique Change Tout</h2>
<p>Un vélo classique à Strasbourg convient parfaitement aux locaux qui pédalent tous les jours. Pour les visiteurs qui veulent couvrir plus de terrain, s'arrêter souvent pour des photos, porter un sac, ou simplement avancer à un rythme qui permet la conversation, le vélo électrique change complètement la donne.</p>
<p>VéloRouge propose des expériences guidées en vélo électrique construites autour de ce type de balade — des itinéraires choisis pour ce qu'ils vous font découvrir, avec des vélos entretenus à un niveau tel que la balade elle-même s'efface au profit du paysage.</p>

<h2>Planifiez Votre Sortie à Strasbourg</h2>
<p>Le printemps et le début de l'automne offrent les meilleures conditions — températures douces, moins de touristes, et cette lumière dorée qui fait ressortir l'architecture alsacienne exactement comme elle le mérite. Strasbourg récompense le voyageur qui prend son temps. Un vélo électrique vous maintient à la bonne allure.</p>
<p><a href="https://velorouge.fr" target="_blank" rel="noopener noreferrer">Réservez votre expérience sur velorouge.fr</a></p>`,
      de: `<p>Straßburg liegt an der Schnittstelle zweier Welten – französischer Charme und deutsche Präzision – und diese Mischung zeigt sich überall. In den Kopfsteinpflastergassen von La Petite France. In den Fachwerkhäusern, die sich über dunkle Kanäle neigen. In einer Stadt, die das Radfahren so ernst nimmt, dass sie über 600 Kilometer eigene Radwege geschaffen hat.</p>
<p>Wenn Sie diese Stadt wirklich erleben möchten, anstatt sie nur aus dem Fenster eines Busses vorbeiziehen zu sehen, bringt Sie ein E-Bike genau dorthin, wo Sie sein sollten.</p>

<h2>Straßburg wurde für zwei Räder gebaut</h2>
<p>Diese Stadt wurde nicht zufällig fahrradfreundlich. Sie hat es bewusst geplant. Straßburg zählt regelmäßig zu den besten Fahrradstädten Frankreichs und verfügt über eine Infrastruktur, die das Radfahren angenehm macht – egal, ob Sie täglich pendeln oder die Stadt zum ersten Mal besuchen.</p>
<p>Das flache Gelände hilft dabei. Anders als Paris oder Lyon verlangt Straßburg Ihren Beinen kaum etwas ab. Und mit einem E-Bike wird selbst die leichte Steigung in Richtung Europaviertel zur Nebensache. Sie kommen ohne Schweiß, ohne Anstrengung und mit genügend Zeit an, um Ihre Umgebung wirklich wahrzunehmen.</p>

<h2>Die Routen, die Ihnen die echte Stadt zeigen</h2>
<h3>Von La Petite France zum Europaviertel</h3>
<p>Dies ist die klassische Tour. Starten Sie bei den mittelalterlichen Schleusen von La Petite France, folgen Sie den Kanälen nach Osten und fahren Sie durch die Neustadt – das ehemalige deutsche Kaiserviertel, das heute zum UNESCO-Weltkulturerbe gehört – bis zum Europäischen Parlament. Der Kontrast zwischen den Jahrhunderten ist beeindruckend, und mit dem E-Bike erleben Sie die gesamte Strecke ganz entspannt.</p>
<h3>Der Rheinradweg</h3>
<p>Überqueren Sie die Pont de l’Europe und schon befinden Sie sich in Deutschland. Der Rheinradweg verläuft flach und breit entlang des Flusses, durch Pappelwälder und vorbei an kleinen elsässischen Dörfern. Fahren Sie zehn Kilometer nach Süden und erreichen Sie Rhinau. Richtung Norden öffnen sich die Landschaften zu noch größeren Panoramen. Diese grenzüberschreitende Strecke eignet sich perfekt für ein E-Bike, da selbst längere Distanzen problemlos bewältigt werden können.</p>
<h3>Die Orangerie-Runde</h3>
<p>Für eine kürzere und entspannte Tour verbindet die Runde um den Parc de l’Orangerie das Botschaftsviertel mit mehreren Wegen am Wasser. Ideal für eine morgendliche Ausfahrt, bevor die Stadt erwacht.</p>

<h2>Warum ein E-Bike das Erlebnis verändert</h2>
<p>Ein normales Fahrrad funktioniert in Straßburg für Einheimische hervorragend. Besucher jedoch, die mehr sehen möchten, häufig für Fotos anhalten, Gepäck mitnehmen oder sich in einem angenehmen Gesprächstempo bewegen möchten, profitieren enorm von einem E-Bike.</p>
<p>VeloRouge bietet geführte E-Bike-Erlebnisse, die genau auf diese Art des Reisens zugeschnitten sind – Routen, die wegen ihrer Sehenswürdigkeiten ausgewählt wurden, und Fahrräder, die so gut gewartet sind, dass Sie sich ganz auf die Umgebung konzentrieren können.</p>

<h2>Planen Sie Ihre Tour durch Straßburg</h2>
<p>Frühling und früher Herbst bieten die besten Bedingungen: angenehme Temperaturen, weniger Touristen und das berühmte goldene Licht, das die elsässische Architektur besonders schön erscheinen lässt.</p>
<p>Straßburg belohnt langsames Reisen. Ein E-Bike hält Sie langsam genug, um Details wahrzunehmen, und schnell genug, um alles zu sehen.</p>
<p><a href="https://velorouge.fr" target="_blank" rel="noopener noreferrer">Buchen Sie Ihr E-Bike-Erlebnis auf velorouge.fr</a></p>`,
    },
  },
  {
    slug: "strasbourg-with-kids-ebike",
    category: "Family",
    image: imgKids,
    author: "Prashant K.",
    date: { en: "April 12, 2025", fr: "12 avril 2025", de: "12. April 2025" },
    title: {
      en: "Strasbourg with Kids: Why an E-Bike Ride Works Better Than You Think",
      fr: "Strasbourg avec des enfants : pourquoi une balade en vélo électrique fonctionne mieux que vous ne le pensez",
      de: "Straßburg mit Kindern: Warum eine E-Bike-Tour besser funktioniert, als Sie denken",
    },
    excerpt: {
      en: "Managing energy levels — theirs and yours — is the real challenge of travelling with children. An e-bike ride through Strasbourg solves more of those problems than most family activities will.",
      fr: "Gérer les niveaux d'énergie — les leurs et les vôtres — est le vrai défi du voyage avec des enfants. Une balade en vélo électrique à Strasbourg résout plus de ces problèmes que la plupart des activités familiales.",
      de: "Mit Kindern zu reisen bedeutet, Energielevels zu managen. Eine E-Bike-Tour durch Straßburg löst mehr dieser Herausforderungen als die meisten Familienaktivitäten.",
    },
    content: {
      en: `<p>Travelling with children means managing energy levels — theirs and yours. One moment they want to run ahead, the next they need to stop, eat something, or sit down because their legs hurt. Planning a city visit around those rhythms takes some thought.</p>
<p>An e-bike ride through Strasbourg solves more of those problems than most family activities will.</p>

<h2>Flat, Safe, and Built for It</h2>
<p>Strasbourg's cycling infrastructure was not designed as an afterthought. The city has over 600 kilometres of bike lanes, many of them physically separated from car traffic. For families with younger children, this matters. You ride in your own space, at your own pace, without negotiating with buses and taxis. Read more about <a href="https://en.wikipedia.org/wiki/Strasbourg" target="_blank" rel="noopener noreferrer">Strasbourg on Wikipedia</a>.</p>
<p>The terrain stays flat across almost the entire city and its surroundings. There are no hills that will slow a child to a crawl or turn a fun afternoon into a difficult one. An e-bike handles whatever small inclines appear, which means parents arrive at each stop with energy left to actually enjoy it.</p>

<h2>The Routes That Work Well with Children</h2>
<h3>Parc de l'Orangerie</h3>
<p>Strasbourg's largest park sits in the northeast of the city, connected by smooth cycling paths. Inside the park, there are storks — real ones, nesting in the trees, which children find genuinely surprising. There is also a small zoo, a boating lake, and open green space. A slow morning loop through the park and back along the canal paths covers around 8 kilometres and keeps things interesting.</p>
<h3>La Petite France and the Covered Bridges</h3>
<p>The historic quarter of La Petite France draws every visitor to Strasbourg, and for good reason. Riding through it slowly on an e-bike, stopping at the <strong>Barrage Vauban</strong> for views over the canal and the rooftops, gives children something visual and memorable. The covered bridges — the <strong>Ponts Couverts</strong> — photograph well, and the area around them stays relatively calm in the mornings.</p>
<h3>The Canal Paths North of the City</h3>
<p>For families who want more distance, the canal paths heading north out of Strasbourg run flat and straight through countryside and small villages. These paths stay quiet on weekdays and work well for a longer half-day ride.</p>

<h2>What Makes E-Bikes Right for Family Riding</h2>
<p>A standard bicycle works for adults in good shape. When you add children — either on a cargo bike, a trail-a-bike attachment, or riding independently at a slower pace — the energy equation shifts. The adult doing the work arrives at every stop more tired than the child they brought along.</p>
<p>An e-bike levels that out. Parents keep pace without effort. Children on their own bikes get the motor assist they need to stay comfortable over longer distances. Nobody hits a wall at kilometre 12 and needs a taxi home.</p>
<p>VéloRouge offers e-bike setups suited to family configurations, with routes selected to match the pace and attention span of younger riders.</p>

<h2>When to Go</h2>
<p>Spring and September give the most comfortable riding conditions. Summer school holidays work well for the park routes and canal paths, which stay shaded. Avoid August weekends in La Petite France — the crowds narrow the experience. A family e-bike ride takes around two to three hours at a relaxed pace, with stops.</p>
<p><a href="https://velorouge.fr" target="_blank" rel="noopener noreferrer">Book your family e-bike ride at velorouge.fr</a></p>`,
      fr: `<p>Voyager avec des enfants, c'est gérer les niveaux d'énergie — les leurs et les vôtres. Un moment ils veulent courir devant, l'instant suivant ils ont besoin de s'arrêter, de manger quelque chose, ou de s'asseoir parce que leurs jambes font mal. Organiser une visite de ville autour de ces rythmes demande de la réflexion.</p>
<p>Une balade en vélo électrique à Strasbourg résout plus de ces problèmes que la plupart des activités familiales.</p>

<h2>Plat, Sûr et Fait Pour Ça</h2>
<p>L'infrastructure cyclable de Strasbourg n'a pas été conçue comme une pensée de dernière minute. La ville compte plus de 600 kilomètres de pistes cyclables, dont beaucoup sont physiquement séparées de la circulation automobile. En savoir plus sur <a href="https://en.wikipedia.org/wiki/Strasbourg" target="_blank" rel="noopener noreferrer">Strasbourg sur Wikipédia</a>.</p>
<p>Pour les familles avec de jeunes enfants, cela fait toute la différence. Vous roulez dans votre propre espace, à votre propre rythme, sans négocier avec les bus et les taxis.</p>
<p>Le terrain reste plat sur presque toute la ville et ses alentours. Il n'y a pas de côtes qui ralentiront un enfant. Le vélo électrique gère les légères pentes qui se présentent, ce qui signifie que les parents arrivent à chaque étape avec encore de l'énergie pour en profiter.</p>

<h2>Les Parcours qui Fonctionnent Bien avec les Enfants</h2>
<h3>Le Parc de l'Orangerie</h3>
<p>Le plus grand parc de Strasbourg se trouve au nord-est de la ville, relié par des pistes cyclables lisses. Dans le parc, il y a des cigognes — de vraies, qui nichent dans les arbres. Il y a aussi un petit zoo, un lac pour les bateaux, et de grands espaces verts. Une boucle matinale tranquille couvre environ 8 kilomètres.</p>
<h3>La Petite France et les Ponts Couverts</h3>
<p>Le quartier historique de la Petite France attire tous les visiteurs à Strasbourg. Rouler lentement à travers en vélo électrique, s'arrêter au <strong>Barrage Vauban</strong> pour profiter de la vue sur le canal et les toits, donne aux enfants quelque chose de visuel et de mémorable. Les ponts couverts — les <strong>Ponts Couverts</strong> — se photographient bien, et le secteur reste relativement calme le matin.</p>
<h3>Les Chemins de Halage au Nord de la Ville</h3>
<p>Pour les familles qui veulent plus de distance, les chemins longeant le canal au nord de Strasbourg courent plats et rectilignes à travers la campagne et les petits villages. Ces chemins restent calmes en semaine.</p>

<h2>Pourquoi le Vélo Électrique Convient aux Sorties en Famille</h2>
<p>Un vélo classique fonctionne pour les adultes en bonne forme. Quand vous ajoutez des enfants, l'équation énergétique change. L'adulte qui fournit les efforts arrive à chaque étape plus fatigué que l'enfant qu'il accompagne.</p>
<p>Le vélo électrique équilibre tout ça. Les parents maintiennent leur rythme sans effort. Les enfants bénéficient de l'assistance moteur dont ils ont besoin pour rester à l'aise sur de longues distances. Personne ne s'effondre au kilomètre 12.</p>
<p>VéloRouge propose des configurations adaptées aux familles, avec des parcours sélectionnés selon le rythme des jeunes cyclistes.</p>

<h2>Quand Partir</h2>
<p>Le printemps et le mois de septembre offrent les conditions les plus agréables. Les vacances scolaires d'été conviennent bien pour les parcours dans les parcs et les chemins le long des canaux, qui restent ombragés. Évitez les week-ends d'août dans la Petite France. Une balade en famille dure environ deux à trois heures à un rythme tranquille.</p>
<p><a href="https://velorouge.fr" target="_blank" rel="noopener noreferrer">Réservez votre balade familiale sur velorouge.fr</a></p>`,
      de: `<p>Reisen mit Kindern bedeutet, Energielevels zu managen — ihre und Ihre eigenen. Ein Moment wollen sie vorauslaufen, im nächsten Moment müssen sie anhalten, etwas essen oder sich ausruhen, weil die Beine müde sind. Eine Stadterkundung nach diesen Rhythmen zu planen, braucht etwas Überlegung.</p>
<p>Eine E-Bike-Tour durch Straßburg löst mehr dieser Herausforderungen als die meisten Familienaktivitäten.</p>

<h2>Flach, sicher und dafür gemacht</h2>
<p>Straßburgs Fahrradinfrastruktur ist kein nachträglicher Gedanke. Die Stadt verfügt über mehr als 600 Kilometer Radwege, viele davon vollständig vom Autoverkehr getrennt. Für Familien mit kleinen Kindern ist das ein großer Vorteil. Sie fahren in Ihrem eigenen Bereich, in Ihrem eigenen Tempo, ohne sich mit Bussen und Taxis auseinandersetzen zu müssen.</p>
<p>Das Gelände bleibt fast überall flach. Es gibt keine Hügel, die Kinder ausbremsen oder einen schönen Nachmittag anstrengend machen würden. Das E-Bike übernimmt kleine Steigungen und sorgt dafür, dass Eltern an jeder Station noch genügend Energie haben, um sie zu genießen.</p>

<h2>Die besten Routen für Familien</h2>
<h3>Parc de l’Orangerie</h3>
<p>Der größte Park Straßburgs liegt im Nordosten der Stadt und ist über komfortable Radwege erreichbar. Im Park leben Störche — echte Störche, die in den Bäumen nisten und Kinder oft überraschen. Es gibt auch einen kleinen Zoo, einen Bootssee und weitläufige Grünflächen. Eine langsame Morgenschleife durch den Park und zurück entlang der Kanäle umfasst rund 8 Kilometer und bleibt spannend.</p>
<h3>La Petite France und die Gedeckten Brücken</h3>
<p>Das historische Viertel La Petite France zieht jeden Besucher an, und das aus gutem Grund. Durch die engen Gassen langsam auf einem E-Bike zu fahren und am <strong>Barrage Vauban</strong> anzuhalten, um die Blick auf die Kanäle und Dächer zu genießen, gibt den Kindern visuelle Anker. Die <strong>Ponts Couverts</strong> lassen sich gut fotografieren, und der Bereich bleibt morgens relativ ruhig.</p>
<h3>Die Kanalwege nördlich der Stadt</h3>
<p>Wer etwas weiter fahren möchte, findet nördlich von Straßburg lange, flache Wege entlang der Kanäle. Sie führen durch ruhige Landschaften und kleine Dörfer. Diese Wege sind unter der Woche ruhig und eignen sich gut für eine längere halbtägige Fahrt.</p>

<h2>Warum E-Bikes ideal für Familien sind</h2>
<p>Ein normales Fahrrad funktioniert gut für fitte Erwachsene. Sobald Kinder dazukommen, verändert sich die Energiebilanz. Der Erwachsene, der die Arbeit macht, ist am Ende des Tages oft müder als das Kind, das er begleitet.</p>
<p>Mit einem E-Bike bleibt alles ausgeglichen. Eltern halten mühelos mit. Kinder auf eigenen Rädern profitieren von der Motorunterstützung und bleiben auf längeren Strecken komfortabel. Niemand erreicht bei Kilometer zwölf den Punkt, an dem nur noch ein Taxi hilft.</p>
<p>VeloRouge bietet familienfreundliche E-Bike-Lösungen und Touren, die auf das Tempo und die Aufmerksamkeitsspanne junger Fahrer abgestimmt sind.</p>

<h2>Wann man fahren sollte</h2>
<p>Frühling und September bieten die angenehmsten Bedingungen. Die Sommerferien eignen sich hervorragend für Park- und Kanalrouten, da viele Abschnitte schattig bleiben. Vermeiden Sie August-Wochenenden in La Petite France, wenn die Besucherzahlen besonders hoch sind. Eine Familien-E-Bike-Tour dauert etwa zwei bis drei Stunden in einem entspannten Tempo mit Pausen.</p>
<p><a href="https://velorouge.fr" target="_blank" rel="noopener noreferrer">Buchen Sie Ihre Familien-E-Bike-Tour auf velorouge.fr</a></p>`,
    }
  },
  {
    slug: "alsace-wine-route-ebike",
    category: "Route",
    image: imgWine,
    author: "Prashant K.",
    date: { en: "April 20, 2025", fr: "20 avril 2025", de: "20. April 2025" },
    title: {
      en: "The Alsace Wine Route by E-Bike: What the Road Actually Looks Like",
      fr: "La Route des Vins d'Alsace en vélo électrique : à quoi ressemble vraiment la route",
      de: "Die Elsässische Weinstraße mit dem E-Bike – So sieht die Strecke wirklich aus",
    },
    excerpt: {
      en: "The Route des Vins d'Alsace passes through 70 wine villages and some of the most distinctive landscapes in France. Sections of it, covered slowly on an e-bike, give you something no car window can.",
      fr: "La Route des Vins d'Alsace traverse 70 villages viticoles et certains des paysages les plus distinctifs de France. Des sections de celle-ci, parcourues lentement en vélo électrique, vous offrent quelque chose qu'aucune vitre de voiture ne peut.",
      de: "Die Elsässische Weinstraße führt durch 70 Weinorte und einige der charakteristischsten Landschaften Frankreichs. Abschnitte davon lassen sich mit dem E-Bike erleben wie keine Autofahrt.",
    },
    content: {
      en: `<p>The Route des Vins d'Alsace runs for 170 kilometres between Marlenheim in the north and Thann in the south. It passes through more than 70 wine-producing villages, some of the most distinctive landscapes in France, and a sequence of medieval towns that look like illustrations from a book you read as a child.</p>
<p>Nobody rides the full route in a day. But sections of it, covered slowly on an e-bike, give you something no car window can.</p>

<h2>Why an E-Bike on the Wine Route Makes Sense</h2>
<p>The Alsace wine route follows the foothills of the Vosges mountains. The vineyards climb the slopes on your left, the plain of Alsace and the Rhine spread out to your right, and the road between them rolls gently through village after village. Learn more about <a href="https://en.wikipedia.org/wiki/Alsace_wine" target="_blank" rel="noopener noreferrer">Alsace wine on Wikipedia</a>.</p>
<p>Gently, but not entirely flat. There are rises between villages. There are detours up into the vines that reward the effort with views worth stopping for. On a regular bicycle, those rises accumulate. On an e-bike, you choose which hills to take on your own legs and which ones to let the motor handle. You also arrive at a wine tasting without needing fifteen minutes to recover first.</p>

<h2>The Sections Worth Riding from Strasbourg</h2>
<h3>Obernai to Barr</h3>
<p>Around 15 kilometres through some of the most visited wine villages in Alsace. <strong>Obernai</strong> itself has a medieval market square that deserves at least an hour on foot. Barr marks the southern edge of the Bas-Rhin wine country and produces Riesling and Sylvaner worth trying at a local cave.</p>
<h3>Ribeauvillé to Riquewihr</h3>
<p>Further south, in the Haut-Rhin, this short stretch between two of Alsace's most photographed villages covers around 5 kilometres but packs in a full afternoon. <strong>Ribeauvillé</strong> sits below castle ruins. <strong>Riquewihr</strong> has barely changed since the 16th century. Ride between them, taste Gewurztraminer in both directions, and take the back road through the vines on the return.</p>
<h3>Colmar as a Base</h3>
<p>Colmar sits roughly in the middle of the wine route and works well as a starting point for day rides in either direction. The city itself warrants time — the Unterlinden Museum, the old merchant quarter, the canals — before you ride out into the vines.</p>

<h2>Tasting, Stopping, Riding On</h2>
<p>Wine route cycling works because the distances between villages stay short. Three kilometres, five kilometres, eight kilometres. Each stop offers a cave, a restaurant, a bakery selling Kugelhopf still warm from the oven.</p>
<p>An e-bike means you make all those stops without calculating whether you have the legs for the return.</p>
<p>VéloRouge offers guided e-bike routes along sections of the Alsace wine route from Strasbourg, with local knowledge of which vineyards welcome visitors and which detours deliver the better views.</p>

<h2>What to Know Before You Go</h2>
<p>The wine route stays open for cycling year-round, but May through October gives the best conditions. The harvest period in September and October adds another layer — the vines turn gold and the villages run harvest festivals.</p>
<p><a href="https://velorouge.fr" target="_blank" rel="noopener noreferrer">Book your wine route e-bike experience at velorouge.fr</a></p>`,
      fr: `<p>La Route des Vins d'Alsace s'étend sur 170 kilomètres entre Marlenheim au nord et Thann au sud. Elle passe par plus de 70 villages viticoles, certains des paysages les plus singuliers de France, et une suite de villes médiévales qui ressemblent à des illustrations d'un livre que vous avez lu enfant.</p>
<p>Personne ne fait le parcours complet en une journée. Mais des sections de cette route, parcourues lentement sur un vélo électrique, offrent quelque chose qu'aucune vitre de voiture ne peut donner.</p>

<h2>Pourquoi un Vélo Électrique sur la Route des Vins a du Sens</h2>
<p>La route des vins d'Alsace suit les contreforts des Vosges. Les vignes grimpent les pentes à votre gauche, la plaine d'Alsace et le Rhin s'étendent à votre droite, et la route entre les deux serpente doucement de village en village. En savoir plus sur <a href="https://en.wikipedia.org/wiki/Alsace_wine" target="_blank" rel="noopener noreferrer">les vins d'Alsace sur Wikipédia</a>.</p>
<p>Doucement, mais pas entièrement plat. Il y a des montées entre les villages. Sur un vélo classique, ces montées s'accumulent. Sur un vélo électrique, vous choisissez quelles côtes prendre à la force de vos jambes et lesquelles confier au moteur.</p>

<h2>Les Sections à Parcourir depuis Strasbourg</h2>
<h3>Obernai à Barr</h3>
<p>Environ 15 kilomètres à travers certains des villages viticoles les plus visités d'Alsace. <strong>Obernai</strong> possède une place de marché médiévale remarquable. Barr produit des Rieslings et des Sylvaners à essayer dans une cave locale.</p>
<h3>Ribeauvillé à Riquewihr</h3>
<p>Plus au sud, ce tronçon d'environ 5 kilomètres relie deux des villages les plus photographiés d'Alsace. <strong>Ribeauvillé</strong> se niche sous des ruines de châteaux. <strong>Riquewihr</strong> n'a presque pas changé depuis le XVIe siècle. Roulez entre eux, goûtez le Gewurztraminer dans les deux sens, et prenez la route de derrière à travers les vignes au retour.</p>
<h3>Colmar comme Point de Départ</h3>
<p>Colmar se trouve au cœur de la Route des Vins et constitue une excellente base pour des excursions d'une journée dans les deux directions. La ville elle-même mérite du temps — le musée Unterlinden, le vieux quartier des marchands, les canaux — avant de partir dans les vignes.</p>

<h2>Déguster, S'arrêter, Repartir</h2>
<p>Le cyclisme sur la route des vins fonctionne parce que les distances entre les villages restent courtes. Trois kilomètres, cinq kilomètres, huit kilomètres. Chaque arrêt offre une cave, un restaurant ou une boulangerie proposant du Kugelhopf encore chaud.</p>
<p>Un vélo électrique signifie que vous faites tous ces arrêts sans calculer si vous avez les jambes pour le retour.</p>
<p>VéloRouge propose des itinéraires guidés en vélo électrique le long de sections de la Route des Vins d'Alsace depuis Strasbourg, avec une connaissance locale des vignobles qui accueillent les visiteurs.</p>

<h2>Ce qu'il Faut Savoir Avant de Partir</h2>
<p>La Route des Vins reste accessible à vélo toute l'année, mais de mai à octobre offre les meilleures conditions. La période des vendanges en septembre et octobre ajoute une dimension supplémentaire — les vignes se teintent d'or et les villages organisent des fêtes de la vendange.</p>
<p><a href="https://velorouge.fr" target="_blank" rel="noopener noreferrer">Réservez votre expérience sur la Route des Vins sur velorouge.fr</a></p>`,
      de: `<p>Die Elsässische Weinstraße erstreckt sich über 170 Kilometer von Marlenheim im Norden bis Thann im Süden. Sie führt durch mehr als 70 Weinorte, einige der schönsten Landschaften Frankreichs, und eine Reihe mittelalterlicher Städte, die aussehen wie Illustrationen aus einem Kinderbuch.</p>
<p>Niemand fährt die gesamte Strecke an einem Tag. Doch einzelne Abschnitte mit dem E-Bike bieten ein Erlebnis, das kein Autofenster vermitteln kann.</p>

<h2>Warum ein E-Bike auf der Weinstraße Sinn macht</h2>
<p>Die Route folgt den Ausläufern der Vogesen. Links steigen die Weinberge die Hänge hinauf, rechts erstrecken sich die Rheinebene und der Rhein, und die Straße dazwischen schlängelt sich sanft von Dorf zu Dorf. Erfahren Sie mehr über <a href="https://en.wikipedia.org/wiki/Alsace_wine" target="_blank" rel="noopener noreferrer">Elsässer Wein auf Wikipedia</a>.</p>
<p>Ganz flach ist die Strecke jedoch nicht. Zwischen den Dörfern gibt es Anstiege. Es gibt Abstecher in die Weinberge, die sich mit Ausblicken belohnen, für die sich der Aufwand lohnt. Mit einem normalen Fahrrad summieren sich diese Höhenmeter schnell. Mit einem E-Bike entscheiden Sie selbst, welche Steigungen Sie aus eigener Kraft bewältigen und welche der Motor übernimmt. Sie kommen auch bei einer Weinprobe entspannt an.</p>

<h2>Die schönsten Abschnitte ab Straßburg</h2>
<h3>Obernai bis Barr</h3>
<p>Etwa 15 Kilometer durch einige der beliebtesten Weinorte des Elsass. <strong>Obernai</strong> begeistert mit einem mittelalterlichen Marktplatz, der mindestens eine Stunde zu Fuß verdient. Barr markiert den südlichen Rand des Weinlands Bas-Rhin und bietet Riesling und Sylvaner, die in einer lokalen Cave probiert werden sollten.</p>
<h3>Ribeauvillé bis Riquewihr</h3>
<p>Weiter südlich, im Haut-Rhin, verbindet dieser kurze Abschnitt zwei der meistfotografierten Dörfer des Elsass. <strong>Ribeauvillé</strong> liegt unterhalb alter Burgruinen. <strong>Riquewihr</strong> ist seit dem 16. Jahrhundert nahezu unverändert. Fahren Sie zwischen ihnen, probieren Sie Gewurztraminer in beide Richtungen und nehmen Sie auf dem Rückweg die Rückstraße durch die Reben.</p>
<h3>Colmar als Ausgangspunkt</h3>
<p>Colmar liegt ungefähr in der Mitte der Weinstraße und eignet sich ideal als Basis für Tagesausflüge in beide Richtungen. Die Stadt selbst verdient Zeit — das Unterlinden-Museum, das alte Kaufmannsviertel, die Kanäle — bevor Sie in die Reben aufbrechen.</p>

<h2>Probieren, Anhalten und Weiterfahren</h2>
<p>Das Besondere an der Weinstraße sind die kurzen Entfernungen zwischen den Orten. Drei Kilometer, fünf Kilometer, acht Kilometer. Jeder Halt bietet Weinkeller, Restaurants oder Bäckereien mit frisch gebackenem Kugelhopf.</p>
<p>Ein E-Bike macht diese Stopps entspannt, ohne ständig über den Rückweg nachdenken zu müssen.</p>
<p>VeloRouge bietet geführte E-Bike-Routen entlang Abschnitten der elsässischen Weinstraße ab Straßburg, mit lokalem Wissen darüber, welche Weingüter Besucher willkommen heißen und welche Abstecher die besseren Aussichten liefern.</p>

<h2>Wissenswertes vor der Tour</h2>
<p>Die Weinstraße ist das ganze Jahr über befahrbar. Die besten Bedingungen herrschen jedoch zwischen Mai und Oktober. Während der Weinlese im September und Oktober färben sich die Weinberge golden, und viele Dörfer feiern traditionelle Weinfeste.</p>
<p><a href="https://velorouge.fr" target="_blank" rel="noopener noreferrer">Buchen Sie Ihr E-Bike-Erlebnis auf der Elsässischen Weinstraße auf velorouge.fr</a></p>`,
    },
  },
  {
    slug: "cross-border-ebike-strasbourg-germany",
    category: "Cross-Border",
    image: imgGermany,
    author: "Prashant K.",
    date: { en: "April 28, 2025", fr: "28 avril 2025", de: "28. April 2025" },
    title: {
      en: "Ride Into Germany: Cross-Border E-Bike Tours from Strasbourg",
      fr: "Rouler vers l'Allemagne : circuits transfrontaliers en vélo électrique depuis Strasbourg",
      de: "Mit dem E-Bike nach Deutschland – Grenzüberschreitende Touren ab Straßburg",
    },
    excerpt: {
      en: "Cross the Rhine and arrive in Germany in under ten minutes by bike. The cross-border ride between Alsace and Baden is one of the more interesting cycling experiences in this part of Europe.",
      fr: "Traversez le Rhin et arrivez en Allemagne en moins de dix minutes à vélo. La balade transfrontalière entre l'Alsace et le Bade est l'une des expériences cyclistes les plus intéressantes de cette partie de l'Europe.",
      de: "Überqueren Sie den Rhein und erreichen Sie Deutschland in weniger als zehn Minuten mit dem Fahrrad. Die grenzüberschreitende Tour zwischen Elsass und Baden gehört zu den spannendsten Raderlebnissen Europas.",
    },
    content: {
      en: `<p>Strasbourg sits on the Rhine. Germany starts on the other bank. Cross the Pont de l'Europe or the newer Passerelle des Deux Rives footbridge, and you arrive in Kehl — a German town of 40,000 people that most visitors to Strasbourg never visit, despite being ten minutes away by bike.</p>
<p>That oversight costs something. The cross-border ride between Alsace and Baden is one of the more interesting cycling experiences in this part of Europe, and an e-bike makes the full circuit comfortable for almost anyone.</p>

<h2>The Border That Disappeared</h2>
<p>The French-German border along the Rhine spent most of the 20th century as a hard, heavily guarded line. Today it exists on maps but barely on the ground. The <strong>Passerelle des Deux Rives</strong> opened in 2004 as a symbol of that shift. Cyclists and pedestrians cross freely. No passport check. No queue. You roll from France into Germany in under five minutes. Find out more about <a href="https://en.wikipedia.org/wiki/Electric_bicycle" target="_blank" rel="noopener noreferrer">electric bicycles on Wikipedia</a>.</p>
<p>That crossing alone carries a specific weight if you know anything about the history of this region. Riding it on a clear morning, with Strasbourg's cathedral visible to the west and the Black Forest hills rising to the east, puts the geography of Alsace into sharp focus.</p>

<h2>What Waits on the German Side</h2>
<h3>Kehl</h3>
<p>The first town across the border has a weekly market, a good selection of German bakeries, and the kind of unhurried atmosphere that contrasts usefully with central Strasbourg. Ride through the town centre, stop for bread and coffee, and continue south along the Rhine.</p>
<h3>The Rhine Cycle Path (EuroVelo 15)</h3>
<p>EuroVelo 15 follows the Rhine from its source in Switzerland all the way to the North Sea. The section running south from Kehl stays flat, well-surfaced, and quiet on weekdays. Poplar forests line the river. The path passes through nature reserves and occasional ferry crossings that connect the French and German banks at several points.</p>
<h3>Rastatt and the Baden Wine Villages</h3>
<p>Ride further north from Kehl and the Baden wine route starts to appear — smaller and less visited than the Alsace wine route on the French side, but producing <strong>Spätburgunder</strong> and Riesling worth trying. The villages of Ortenau sit on the lower slopes of the Black Forest and make a worthwhile detour from the main river path.</p>

<h2>The Practical Side of a Cross-Border Ride</h2>
<p>Distance from central Strasbourg to Kehl and back runs around 25 to 30 kilometres depending on your route. On an e-bike, that sits comfortably within a half-day ride with stops. Extending it along the Rhine path adds distance without adding difficulty — the terrain stays flat throughout.</p>
<p>You need no special documents for the crossing. Euros work on both sides of this border. VéloRouge guides this cross-border route with context about the history of the Rhine as a border, the architecture of the bridges, and the landscape of the Upper Rhine plain.</p>

<h2>Two Countries, One Morning</h2>
<p>The cross-border ride from Strasbourg to Germany demonstrates something that the European project intended and Strasbourg embodies more than almost any other city: borders move, cities remain, and the landscape connects more than it divides. An e-bike gives you the range to feel that properly.</p>
<p><a href="https://velorouge.fr" target="_blank" rel="noopener noreferrer">Book your cross-border e-bike tour at velorouge.fr</a></p>`,
      fr: `<p>Strasbourg se trouve sur le Rhin. L'Allemagne commence sur l'autre rive. Traversez le Pont de l'Europe ou la Passerelle des Deux Rives, et vous arrivez à Kehl — une ville allemande de 40 000 habitants située à seulement dix minutes à vélo.</p>
<p>C'est une occasion manquée pour beaucoup de visiteurs. Le parcours transfrontalier entre l'Alsace et le Pays de Bade compte parmi les expériences cyclables les plus intéressantes de cette partie de l'Europe.</p>

<h2>La Frontière qui a Disparu</h2>
<p>La frontière franco-allemande le long du Rhin a passé la majeure partie du XXe siècle comme une ligne dure et fortement gardée. Aujourd'hui elle existe sur les cartes mais à peine sur le terrain. La <strong>Passerelle des Deux Rives</strong> a ouvert en 2004 comme symbole de ce changement. Découvrez-en plus sur <a href="https://en.wikipedia.org/wiki/Electric_bicycle" target="_blank" rel="noopener noreferrer">le vélo électrique sur Wikipédia</a>.</p>
<p>Cyclistes et piétons traversent librement. Pas de contrôle de passeport. Pas de file d'attente. Vous roulez de France en Allemagne en moins de cinq minutes.</p>

<h2>Ce qui Vous Attend du Côté Allemand</h2>
<h3>Kehl</h3>
<p>La première ville après la frontière possède un marché hebdomadaire, de bonnes boulangeries allemandes et une atmosphère paisible qui contraste avec le centre de Strasbourg. Traversez le centre-ville, arrêtez-vous pour du pain et un café, et continuez vers le sud le long du Rhin.</p>
<h3>La Piste Cyclable du Rhin (EuroVelo 15)</h3>
<p>EuroVelo 15 suit le Rhin depuis sa source en Suisse jusqu'à la mer du Nord. La section près de Kehl reste plate, bien revêtue et calme en semaine. Des forêts de peupliers longent le fleuve. La piste traverse des réserves naturelles et des traversées en ferry qui relient les rives française et allemande en plusieurs points.</p>
<h3>Rastatt et les Villages Viticoles du Pays de Bade</h3>
<p>Plus au nord, la Route des Vins du Bade apparaît avec ses villages nichés sur les contreforts de la Forêt-Noire — moins connue que la route des vins alsacienne, mais produisant des Spätburgunder et des Rieslings qui valent le détour.</p>

<h2>Le Côté Pratique d'une Balade Transfrontalière</h2>
<p>La distance du centre de Strasbourg à Kehl et retour tourne autour de 25 à 30 kilomètres selon votre itinéraire. Sur un vélo électrique, cela rentre confortablement dans une demi-journée de balade avec des arrêts. Prolonger le trajet le long de la piste du Rhin ajoute de la distance sans ajouter de difficulté — le terrain reste plat tout au long.</p>
<p>Vous n'avez besoin d'aucun document particulier pour la traversée. L'euro fonctionne des deux côtés de cette frontière. VéloRouge accompagne ce parcours avec des explications sur l'histoire du Rhin comme frontière, l'architecture des ponts et le paysage du Haut-Rhin.</p>

<h2>Deux Pays, Une Matinée</h2>
<p>Le parcours transfrontalier de Strasbourg vers l'Allemagne illustre parfaitement l'esprit européen : les frontières bougent, les villes restent, et le paysage relie plus qu'il ne divise. Un vélo électrique vous donne la liberté de le ressentir pleinement.</p>
<p><a href="https://velorouge.fr" target="_blank" rel="noopener noreferrer">Réservez votre excursion transfrontalière sur velorouge.fr</a></p>`,
      de: `<p>Strasbourg liegt direkt am Rhein. Deutschland beginnt auf der anderen Seite. Überqueren Sie den Pont de l'Europe oder die moderne Passerelle des Deux Rives, und nach wenigen Minuten erreichen Sie Kehl — eine deutsche Stadt mit 40.000 Einwohnern, die viele Straßburg-Besucher nie sehen, obwohl sie nur zehn Minuten entfernt ist.</p>
<p>Das ist eine verpasste Gelegenheit. Die grenzüberschreitende Tour zwischen Elsass und Baden zählt zu den spannendsten Raderlebnissen in diesem Teil Europas. Mit einem E-Bike wird die gesamte Strecke für fast jeden komfortabel.</p>

<h2>Die verschwundene Grenze</h2>
<p>Die deutsch-französische Grenze am Rhein war im 20. Jahrhundert lange eine streng bewachte Linie. Heute existiert sie fast nur noch auf Landkarten. Die <strong>Passerelle des Deux Rives</strong> wurde 2004 als Symbol dieser Veränderung eröffnet. Fußgänger und Radfahrer überqueren die Grenze frei — ohne Passkontrolle, ohne Wartezeiten. Sie rollen in weniger als fünf Minuten von Frankreich nach Deutschland.</p>
<p>Allein diese Überquerung wirkt stark, wenn Sie etwas über die Geschichte dieser Region wissen. An einem klaren Morgen, mit der Straßburger Kathedrale im Westen und den Hügeln des Schwarzwaldes im Osten, wird die Geografie des Elsass unmittelbar begreifbar.</p>

<h2>Was Sie auf der deutschen Seite erwartet</h2>
<h3>Kehl</h3>
<p>Direkt hinter der Grenze erwartet Sie eine entspannte Kleinstadt mit Wochenmarkt, guten Bäckereien und einer Atmosphäre, die einen schönen Kontrast zum Zentrum Straßburgs bildet. Fahren Sie durch die Stadt, halten Sie für Brot und Kaffee, und setzen Sie die Fahrt entlang des Rheins nach Süden fort.</p>
<h3>Der Rheinradweg (EuroVelo 15)</h3>
<p>EuroVelo 15 folgt dem Rhein von seiner Quelle in der Schweiz bis zur Nordsee. Der Abschnitt südlich von Kehl bleibt flach, gut ausgebaut und besonders ruhig an Wochentagen. Pappelwälder säumen den Fluss. Die Strecke führt durch Naturschutzgebiete und gelegentliche Fährverbindungen, die die deutschen und französischen Ufer verbinden.</p>
<h3>Rastatt und die badischen Weindörfer</h3>
<p>Fahren Sie weiter nördlich und die badische Weinstraße beginnt, kleiner und weniger besucht als die elsässische, aber mit Spätburgunder und Riesling, die einen Versuch wert sind. Die Orte der Ortenau liegen an den unteren Hängen des Schwarzwaldes und lohnen einen Abstecher von der Hauptstrecke.</p>

<h2>Die praktische Seite der Tour</h2>
<p>Die Distanz von Straßburg nach Kehl und zurück beträgt je nach Route etwa 25 bis 30 Kilometer. Mit einem E-Bike lässt sich das bequem an einem halben Tag mit Stopps bewältigen. Die Verlängerung entlang des Rheinradwegs vergrößert die Strecke, ohne die Schwierigkeit zu erhöhen — das Gelände bleibt durchgehend flach.</p>
<p>Für die Grenzüberquerung benötigen Sie keine besonderen Dokumente. Der Euro wird auf beiden Seiten akzeptiert. VeloRouge begleitet diese Tour mit spannenden Einblicken in die Geschichte des Rheins als Grenze, die Architektur der Brücken und die Landschaft der Oberrheinebene.</p>

<h2>Zwei Länder, ein Vormittag</h2>
<p>Die Fahrt von Straßburg nach Deutschland zeigt perfekt, wofür Europa steht: Grenzen verändern sich, Städte bleiben bestehen, und die Landschaft verbindet mehr, als sie trennt. Ein E-Bike gibt Ihnen die Freiheit, dieses Gefühl wirklich zu erleben.</p>
<p><a href="https://velorouge.fr" target="_blank" rel="noopener noreferrer">Buchen Sie Ihre grenzüberschreitende E-Bike-Tour auf velorouge.fr</a></p>`,
    },
  },
];

const BlogPage = () => {
  const { currentLanguage } = useLanguage();
  const isFr = currentLanguage?.startsWith("fr");
  const isDe = currentLanguage?.startsWith("de");
  const lang = isFr ? "fr" : isDe ? "de" : "en";

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main className="bg-background">
      <SEO
        title={isFr ? "Journal | VéloRouge" : isDe ? "Journal | VéloRouge" : "Journal | VéloRouge"}
        description={
          isFr
            ? "Guides vélo, histoires de la ville et conseils pour explorer Strasbourg à deux roues."
            : isDe
            ? "Radführer, Stadtgeschichten und Tipps zur Erkundung Straßburgs auf zwei Rädern."
            : "Cycling guides, city stories, and tips for exploring Strasbourg on two wheels."
        }
        canonical="/blog"
        lang={lang}
      />
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative min-h-[55vh] flex items-end pb-16 bg-dark overflow-hidden pt-24">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent" />
        <div className="container relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
              {isFr ? "Histoires & Inspirations" : isDe ? "Geschichten & Einblicke" : "Stories & Insights"}
            </p>
            <h1 className="font-display text-6xl md:text-8xl font-black text-dark-foreground leading-[0.9]">
              {isFr ? "Notre" : isDe ? "Unser" : "Our"}<br />
              <em className="text-primary">Journal</em>
            </h1>
          </div>
          <div className="md:max-w-sm">
            <p className="text-dark-foreground/50 text-base">
              {isFr
                ? "Guides vélo, histoires de la ville et conseils pour explorer Strasbourg à deux roues."
                : isDe ? "Radführer, Stadtgeschichten und Tipps zur Erkundung Straßburgs auf zwei Rädern."
                : "Cycling guides, city stories, and tips for exploring Strasbourg on two wheels."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Post ── */}
      {featured && (
        <section className="border-b border-border">
          <div className="container py-16">
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-8">
              {isFr ? "À la une" : isDe ? "Empfohlen" : "Featured"}
            </p>
            <Link to={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-0 items-stretch">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-muted relative">
                <img
                  src={featured.image}
                  alt={featured.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <CategoryTag category={featured.category} />
                </div>
              </div>
              <div className="bg-dark p-10 md:p-14 flex flex-col justify-between">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-black text-dark-foreground leading-tight mt-1 mb-4 group-hover:text-primary transition-colors">
                    {featured.title[lang]}
                  </h2>
                  <p className="text-dark-foreground/50 leading-relaxed">
                    {featured.excerpt[lang]}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div className="text-xs text-dark-foreground/40 flex flex-col gap-1">
                    <span className="flex items-center gap-1.5"><User size={11} /> {featured.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={11} /> {featured.date[lang]}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    {isFr ? "Lire" : isDe ? "Lesen" : "Read"} <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Rest of Posts ── */}
      {rest.length > 0 && (
        <section className="py-20">
          <div className="container">
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-10">
              {isFr ? "Tous les articles" : isDe ? "Alle Artikel" : "All Articles"}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {rest.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[3/2] overflow-hidden bg-muted mb-5 relative">
                    <img
                      src={post.image}
                      alt={post.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <CategoryTag category={post.category} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-black mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {post.title[lang]}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-5 leading-relaxed">
                    {post.excerpt[lang]}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                    <span className="flex items-center gap-1.5"><User size={11} /> {post.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={11} /> {post.date[lang]}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-24 bg-dark text-dark-foreground">
        <div className="container">
          <div className="border border-white/10 p-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-3">
                {isFr ? "Prêt à partir ?" : isDe ? "Bereit loszulegen?" : "Ready to go?"}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
                {isFr ? "Explorez Strasbourg" : isDe ? "Erkunden Sie Straßburg" : "Explore Strasbourg"}<br />
                <em className="text-primary">{isFr ? "à vélo" : isDe ? "mit dem Rad" : "by bike"}</em>
              </h2>
            </div>
            <Link
              to="/visitors"
              className="shrink-0 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              {isFr ? "Voir les balades" : isDe ? "Touren entdecken" : "Explore Rides"} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;

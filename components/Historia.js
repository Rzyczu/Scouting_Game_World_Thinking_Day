import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyButton from './MyButton';

class Historia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: require('../assets/bipi.jpg'),
            paragraph1: 'Baden-Powell urodził się w brytyjskim Londynie, w dzielnicy Paddington. Jego ojciec, wielebny Baden Powell, był księdzem anglikańskim oraz profesorem geometrii na Uniwersytecie Oxford, matką wnuczka admirała Horacego Nelsona, Henrietta Grace Smyth.',
            paragraph2: 'Karierę wojskową rozpoczął w 1876 roku jako zwykły żołnierz. Służył w Anglii, Indiach, Afganistanie i Afryce Potudniowej. Do jego głównych osiągnięć należy, trwająca 7 miesięcy, obrona miasta Mafeking w latach 1899-1900 podczas wojny przeciwko Burom. Podczas obrony stworzył on oddział chłopców, którzy uczestniczyli w służbie pomocniczej jako łącznicy czy wartownicy. Podczas tego eksperymentu zauważył on, że można powierzyć młodym osobom odpowiedzialne zadania pod warunkiem poważnego traktowania ich.   ',
            paragraph3: 'W 1902 roku Bi-Pi wraca do Wielkiej Brytanii i obserwuje duże zainteresowanie swoją książką "Aids to scouting" (Wskazówki do wywiadów) wśród młodzieży. W 1903 roku zostaje generalnym inspektorem kawalerii brytyjskiej. W 1907 roku postanawia zorganizować obóz dla chłopców na wyspie Brownsea, gdzie sprawdza skuteczność swoich metod, m.in. systemu zastępów. Postanawia także na stałe zająć się pracą wychowawczą wśród młodych chłopców. W 1908 roku wydaje książkę "Scouting for Boys" ("Skauting dla chłopców"). W 1910 roku pod wpływem dużego zainteresowania tematyką książki wśród młodzieży Bi-Pi kończy swoją służbę wojskową w stopniu generała i poświęca się skautingowi. W ciągu roku do jego organizacji przystępuje 100 tysięcy członków. W 1909 roku rozpoczyna swą działalność ruch skautek - dziewcząt. W 1910 roku Robert Baden-Powell prosi o pomoc w prowadzeniu żeńskiej organizacji swoją siostrę, Agnes. W 1912 roku Baden-Powell bierze ślub z Olave Clair Soames.',
            paragraph4: 'W 1920 roku skauci podczas pierwszego Jamboree obierają Roberta Baden-Powella Naczelnym Skautem Świata. Podczas emerytury Bi-Pi zajmuje się szkoleniem armii terytorialnej Wielkiej Brytanii. Za pracę ze skautami otrzymał wiele nagród i wyróżnień, m.in. tytuł lorda - barona Gilwell oraz Krzyż Komandorski z Gwiazdą Orderu "Polonia Restituta". W posiadłości Gilwell Park zorganizowano międzynarodowy ośrodek skautowy. Bi-Pi zmart w Kenii, 8 stycznia 1941 roku, gdzie od 1939 roku poddawał się leczeniu.',
            paragraph5: '',
            paragraph6: '',
            paragraph7: '',
            paragraph8: '',
            header: "gen. Robert Baden-Powell"
        }
    }
    bipi = () => {
        this.setState({
            photo: require('../assets/bipi.jpg'),
            paragraph1: 'Baden-Powell urodził się w brytyjskim Londynie, w dzielnicy Paddington. Jego ojciec, wielebny Baden Powell, był księdzem anglikańskim oraz profesorem geometrii na Uniwersytecie Oxford, matką wnuczka admirała Horacego Nelsona, Henrietta Grace Smyth.',
            paragraph2: 'Karierę wojskową rozpoczął w 1876 roku jako zwykły żołnierz. Służył w Anglii, Indiach, Afganistanie i Afryce Potudniowej. Do jego głównych osiągnięć należy, trwająca 7 miesięcy, obrona miasta Mafeking w latach 1899-1900 podczas wojny przeciwko Burom. Podczas obrony stworzył on oddział chłopców, którzy uczestniczyli w służbie pomocniczej jako łącznicy czy wartownicy. Podczas tego eksperymentu zauważył on, że można powierzyć młodym osobom odpowiedzialne zadania pod warunkiem poważnego traktowania ich.   ',
            paragraph3: 'W 1902 roku Bi-Pi wraca do Wielkiej Brytanii i obserwuje duże zainteresowanie swoją książką "Aids to scouting" (Wskazówki do wywiadów) wśród młodzieży. W 1903 roku zostaje generalnym inspektorem kawalerii brytyjskiej. W 1907 roku postanawia zorganizować obóz dla chłopców na wyspie Brownsea, gdzie sprawdza skuteczność swoich metod, m.in. systemu zastępów. Postanawia także na stałe zająć się pracą wychowawczą wśród młodych chłopców. W 1908 roku wydaje książkę "Scouting for Boys" ("Skauting dla chłopców"). W 1910 roku pod wpływem dużego zainteresowania tematyką książki wśród młodzieży Bi-Pi kończy swoją służbę wojskową w stopniu generała i poświęca się skautingowi. W ciągu roku do jego organizacji przystępuje 100 tysięcy członków. W 1909 roku rozpoczyna swą działalność ruch skautek - dziewcząt. W 1910 roku Robert Baden-Powell prosi o pomoc w prowadzeniu żeńskiej organizacji swoją siostrę, Agnes. W 1912 roku Baden-Powell bierze ślub z Olave Clair Soames.',
            paragraph4: 'W 1920 roku skauci podczas pierwszego Jamboree obierają Roberta Baden-Powella Naczelnym Skautem Świata. Podczas emerytury Bi-Pi zajmuje się szkoleniem armii terytorialnej Wielkiej Brytanii. Za pracę ze skautami otrzymał wiele nagród i wyróżnień, m.in. tytuł lorda - barona Gilwell oraz Krzyż Komandorski z Gwiazdą Orderu "Polonia Restituta". W posiadłości Gilwell Park zorganizowano międzynarodowy ośrodek skautowy. Bi-Pi zmart w Kenii, 8 stycznia 1941 roku, gdzie od 1939 roku poddawał się leczeniu.',
            paragraph5: '',
            paragraph6: '',
            paragraph7: '',
            paragraph8: '',
            paragraph9: '',
            header: "gen. Robert Baden-Powell"
        })
    }
    amalkowski = () => {
        this.setState({
            photo: require('../assets/amalkowski.jpg'),
            paragraph1: 'Pochodził z rodziny patriotycznej. Nauki pobierał w Warszawie, Tarnowie, Krakowie oraz Lwowie. W 1906 roku zdaje maturę w lwowskiej VI Szkole Realnej. Zostaje współzałożycielem abstynenckiej organizacji "Młodzież" działającej wśród krakowskich uczniów. W 1908 rozpoczyna studia na Wydziale Budowy Maszyn Politechniki Lwowskiej. W kwietniu 1910 przeniósł się na Uniwersytet Jana Kazimierza, jednak nie udaje mu się uzyskać wyższego wykształcenia. Był członkiem zarządu głównego "Eleuterii" oraz członkiem zwykłym "Eleusis", "Zarzewia" i "Sokoła".',
            paragraph2: 'W listopadzie 1909 roku rozpoczyna, za karę, tłumaczenie książki Roberta Baden-Powella "Skauting dla chłopców" ("Scouting for Boys"). Małkowski staje się entuzjastą skautingu.',
            paragraph3: 'Od 20 marca do 21 maja 1911 roku odbywa się pierwszy kurs skautowy. Małkowski omawia na nim napisaną przez siebie książkę "Scouting jako system wychowania młodzieży" ukazującą się w formie arkuszy od kwietnia do lipca 1911 roku. Zostaje także członkiem składu Komendy Skautowej, a następnie Naczelnej Komendy Skautowej we Lwowie. Od 1911 roku wydaje czasopismo "Skaut". W 1912 roku wyjechał do Londynu w celu zebrania materiałów do nowego wydania książki. Po powrocie odsunięto go od pracy w "Skaucie" i Naczelnej Komendzie Skautowej. W 1913 roku Małkowski organizuje wyjazd polskich skautów na III Wszechbrytyjski Zlot Skautów. Nad polskim obozem powiewa flaga z białym orłem. Powszechnie używa się nazwy kraju wymazanego z map politycznych świata. BiPi nagradza Małkowskiego medalem "Za zasługi".',
            paragraph4: 'W 1913 roku przenosi się do Zakopanego, gdzie żeni się z Olgą Drahonowską. Tworzy tam niezależny ośrodek harcerski. Podczas wojny wstępuje do Legionów Polskich. Zniechęcony związkami Legionów z Austrią występuje z nich po dość krótkim okresie. Próbuje utworzyć niepodległą Rzeczpospolitą Podhalańską, w wyniku czego musi wyemigrować z Zakopanego. Najpierw wybiera Anglię, później USA, gdzie zakłada polskie drużyny skautowe. Od września 1915 roku przez rok pełni funkcję skautmistrza związkowego w Związku Sokołów Polskich w Ameryce. Próbuje zorganizować oddziały do walki z Niemcami. Władze związku są przeciwne pomysłowi, przez co Małkowski wyjeżdża do Kanady, gdzie w 1916 roku wstępuje do wojska. W styczniu kolejnego roku rozpoczyna trzymiesięczną naukę w Wojskowej Szkole Piechoty. Służy na froncie we Francji w armii kanadyjskiej. W listopadzie 1918 roku zostaje przeniesiony do armii gen. Hallera. Wysłany do Odessy ginie w wyniku zatonięcia statku, na którym płynął w nocy z 15 na 16 stycznia 1919 roku.',
            paragraph5: '',
            paragraph6: '',
            paragraph7: '',
            paragraph8: '',
            paragraph9: '',
            header: "Andrzej Małkowski"
        })
    }
    omalkowska = () => {
        this.setState({
            photo: require('../assets/omalkowska.jpg'),
            paragraph1: 'Urodzona w Krzeszowicach 1 września 1888 roku. Córka Zofii, czeskiej mieszczanki i Karola, zarządcy dóbr hrabiego Potockiego w Małopolsce. Szkołę kończyła zdając tylko kolejne egzaminy w Krakowie. Po maturze wstąpiła do Konserwatorium Muzycznego we Lwowie, gdzie odkryła swój talent poetycki i rzeźbiarski. Interesowała się sportem, była instruktorką w "Sokole", działała w "Eleusis", a później, za namową Małkowskiego w "Zarzewiu", gdzie zdobyła stopień porucznika.',
            paragraph2: 'Latem 1911 roku we Lwowie zakłada pierwszą żeńską drużynę harcerską oraz zostaje komendantką w Naczelnej Komendzie Skautowej do 1912 roku. W marcu 1912 roku na I Zjeździe we Lwowie harcerstwo staje się organizacją abstynencką. Po tym wydarzeniu zostaje wybrana w skład Zarządu Oddziału lwowskiego Eleuterii- Wyzwolenia. Druhna Olga współtworzyła także hymn ZHP. We wrześniu 1912 roku w czasopiśmie "Škaut" ukazał się oparty na melodii "Na barykady ludu roboczy" wierz "Marsz skautów" autorstwa Ignacego Kozielewskiego. Za zgodą autora Małkowska dokonała drobnych zmian w utworze, który stał się później hymnem.',
            paragraph3: 'W 1913 roku udała się na leczenie do Zakopanego, gdzie wzięła ślub z Andrzejem Małkowskim. Po wyleczeniu nacieku w płucu Małkowska rozpoczęta działalność harcerstwa żeńskiego we Lwowie. Od momentu, gdy Andrzej Małkowski wyruszył naI wojnę światową prowadziła również drużynę męską. Podczas wojny zorganizowała także: skautową pocztę, pomoc żniwną dla góralek, ochronkę dla opuszczonych dzieci, tanią jadłodajnię dla ubogiej ludności i skautową straż porządkową pełniącą nocną służbę. Małkowscy musieli udać się na emigrację.',
            paragraph4: 'Wybierają Stany Zjednoczone, gdzie 30 października 1915 roku na świat przychodzi ich syn, Lutyk. Po roku Olga wraca z nim do Europy. W lutym 1917 roku, pod wpływem niepowodzenia planu utworzenia polskiego Legionu w Kanadzie przenosi się z Francji do Szwajcarii. Poczta neutralnego kraju odmawia dostarczania żołdu Małkowskiego, przez co Olga podejmuje pracę fizyczną w gospodarstwie ogrodniczym w Chexbres Village. Od końca 1917 roku uczy muzyki w Ecole Nouvelle, a od 1918 roku w londyńskiej szkole, którą złożyła na prośbę Polish Relief Foun',
            paragraph5: 'W listopadzie 1921 wraca do Zakopanego. W międzyczasie w wyniku zatonięcia statku ginie Andrzej Małkowski. Druhna Olga uczy angielskiego i gimnastyki w Szkole Gospodarstwa Domowego. Prowadzi kursy języka, historii i kultury polskiej dla Ślązaczek. Latem 1931 Olga Małkowska kierowała w Sromowcach pierwszym obozem żeńskim Studium W-F Uniwersytetu Jagiellońskiego. W 1932 r. prowadziła VII światową konferencję skautek na Buczu, gdzie wybrana została do Komitetu Światowego Skautek.. W międzyczasie zdobywa odznaczenia państwowe: Krzyż Oficerski Orderu Polonia Restituta oraz Krzyż Niepodległości',
            paragraph6: 'W 1939 roku uchodzi z kraju do Wielkiej Brytanii w obawie, przed prześladowaniami ze strony gestapo. Zakłada Dom Dziecka Polskiego, który zostaje później przeniesiony do Szkocji do posiadłości Castlemains koło Douglas w Lanarkshire. Powstaje tam szkoła, gimnazjum, harcerstwo oraz ośrodek urlopowy dla żołnierzy. W 1942 roku zostaje przewodniczącą Komitetu Naczelnego ZHP na czas wojny. Organizuje Guides International Service skautową służbę pomagającą dzieciom na terenach wyzwalanych spod panowania hitlerowskiego.',
            paragraph7: 'Po wojnie, w latach 1948-1960 prowadziła kolejny Dom Dziecka Polskiego w w Hawson Court, posiadłości w Buckfastleigh, w Devon. W 1959 roku zorganizowała wycieczkę do Polski, a w 1961 wraca na stałe do kraju. Do 1964 roku mieszka we Wrocławiu, a później, na stałe, w Zakopanem, przy ul. Małe Żywczańskie 17A. W 1966 roku dostaje państwową rentę dla zasłużonych oraz Honorową Odznakę Przyjaciela Dziecka. Uczestniczyła także w odprawianej przez Karola Wojtyłę mszy świętej w rocznicę śmierci Małkowskiego.',
            paragraph8: 'Olga Małkowska zmarła 15 stycznia 1979 roku. Pochowana została na zakopiańskim cmentarzu przy ulicy Nowotarskiej. Nad grobem postawiono pomnik autorstwa Henryka Berzeca.',
            header: "Olga Małkowska"
        })
    }
    swf = () => {
        this.setState({
            photo: require('../assets/swfrelichowski.jpg'),
            paragraph1: 'Stefan urodził się 22 stycznia 1913 r. w Chełmży. Był dzieckiem wesołym, żywym, ciekawym świata i ludzi. Mając 11 lat pełnit służbę przy ołtarzu jako ministrant. W Chełmży ukończył szkołę podstawową i gimnazjum.',
            paragraph3: 'Był czynnym harcerzem i członkiem Sodalicji Mariańskiej. 11 marca 1927 r. został przyjęty do 2. Pomorskiej Drużyny Harcerskiej im. Zawiszy Czarnego. 26 czerwca 1927 r. złożył Przyrzeczenie Harcerskie. W następnym roku został już drużynowym. Funkcję pełnił do sierpnia 1931 r. Doświadczenie jakie zdobył w harcerstwie, pomogło mu ukształtować własny światopogląd oraz umiejętność radzenia sobie w trudnych sytuacjach. Jesienią 1931 r. wstąpił do Wyższego Seminarium Duchownego w Pelplinie. Był to dla niego trudny czas formacji, jednak nie poddał się i wytrwał w dążeniu do celu, jakim było kapłaństwo. W swoim pamiętniku pisze: "Boże, chcę być naprawdę kapłanem". W latach 1933-1936 pełnił funkcję drużynowego Starszoharcerskiego Zrzeszenia Kleryków w Pelplinie. W marcu 1937 r. przyjmuje święcenia kapłańskie. Rok później został wysłany jako wikariusz do parafii pw. Wniebowzięcia Najświętszej Maryi Panny w Toruniu. Tam odnalazł się jako duszpasterz młodzieży oraz pełnił funkcję kapelana Pomorskiej Chorągwi Harcerzy.',
            paragraph4: 'W przededniu wybuchu II wojny światowej uczestniczył w Pogotowiu Harcerek i Harcerzy. Tuż po wkroczeniu armii hitlerowskiej do Polski zostaje aresztowany, lecz po kilku dniach go zwolniono. 18 października był ponownie aresztowany i osadzony w więzieniu gestapo tzw. Forcie VII w Toruniu. W więzieniu mimo zakazu celebrował Msze św., słuchał spowiedzi oraz organizował dyskusje patriotyczne. W styczniu 1940 r. został przeniesiony do obozu pracy w Gdańskim Nowym Porcie. Następnie wywieziono go do obozu koncentracyjnego w Stutthofie. W święta wielkanocne roku 1940 potajemnie zdobył hostię i wino mszalne, by zorganizować liturgię Wielkiego Czwartku. W IV tego samego roku przeniesiono go do obozu koncentracyjnego Sachsenhausen-Oranienburg pod Berlinem. Po ośmiu miesiącach ostatecznie przewieziono go do obozu w Dachau, gdzie otrzymał numer obozowy 22492. Podczas całej obecności w obozie pełnił służbę duszpasterską, organizował pomoc żywnościową, a gdy w 1944 r. wybuchła epidemia tyfusu plamistego, mimo najsurowszych zakazów śpieszył z pomocą chorym. Na początku 1945 r. sam zaraził się chorobą i zmarł w opinii świętości 23 lutego 1945 r.',
            paragraph5: 'Jego śmierć była niesamowitym zdarzeniem w obozie. Władze Dachau pozwolity na wystawienie zwłok. Cześć oddawali im nie tylko Polacyi nie tylko katolicy. Naoczny świadek wspomina: "W milczeniu i w nabożnym, modlitewnym skupieniu przesuwał się przez kostnicę ttum więźniów. Szli młodzi i starzy. Szli Polacy i cudzoziemcy. Znali go wszyscy. Odszedł kochany, święty kapłan. Odszedł człowiek, który życie swe złożył na otarzu miłości i miłosierdzia względem bliźniego i jego nieśmiertelnej duszy".',
            paragraph6: 'Przed kremacją Stanisław Bieńka zdjął z twarzy pośmiertną maskę, w której zagipsował jeden z palców prawej ręki. Drugi paleC, zagipsowany, zachował ks. Bernard Czapliński.',
            paragraph7: 'Jego historia jednak nie kończy się na śmierci. Po wojnie rozpoczęto starania o proces beatyfikacyjny. Oficjalnie został on otwarty w 1964 r. w Pelplinie. 7 czerwca 1999 r. w Toruniu papież Jan Paweł Il beatyfikował ks. Stefana wincentego Frelichowskiego, a w dwa lata później na wniosek środowisk harcerskich został ogłoszony przez Kongregację ds. Kultu Bożego i Dyscypliny Sakramentów patronem harcerstwa.',
            paragraph8: '',
            paragraph9: '',
            header: "bł. ks. Stefan Wincenty Frelichowski"
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menu}>
                    <TouchableOpacity
                        style={styles.person}
                        onPress={() => this.bipi()}
                    >
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 400 / 2,
                                // alignSelf: 'center',
                            }}
                            source={require('../assets/bipi.jpg')}
                        />
                        <Text>R. Baden-{"\n"}Powell</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.person}
                        onPress={() => this.amalkowski()}
                    >
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 400 / 2,
                            }}
                            source={require('../assets/amalkowski.jpg')}
                        />
                        <Text>Anrzej {"\n"}Małkowski</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.person}
                        onPress={() => this.omalkowska()}
                    >
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 400 / 2,
                            }}
                            source={require('../assets/omalkowska.jpg')}
                        />
                        <Text>Olga {"\n"}Małkowska</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.person}
                        onPress={() => this.swf()}
                    >
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 400 / 2,
                            }}
                            source={require('../assets/swfrelichowski.jpg')}
                        />
                        <Text>S. W. {"\n"}Frelichowski</Text>
                    </TouchableOpacity>
                </View>
                <SafeAreaView style={styles.page}>
                    <ScrollView>
                        <Image
                            style={{
                                height: 350, width: 300, resizeMode: 'contain',
                                alignSelf: 'center',
                            }}
                            source={this.state.photo}
                        />
                        <Text style={styles.header}>{this.state.header}</Text>

                        <Text style={styles.text}>{this.state.paragraph1}</Text>
                        <Text style={styles.text}>{this.state.paragraph2}</Text>
                        <Text style={styles.text}>{this.state.paragraph3}</Text>
                        <Text style={styles.text}>{this.state.paragraph4}</Text>
                        {
                            this.state.paragraph5 == '' ?
                                null
                                :
                                <View>
                                    <Text style={styles.text}>{this.state.paragraph5}</Text>
                                    <Text style={styles.text}>{this.state.paragraph6}</Text>
                                    <Text style={styles.text}>{this.state.paragraph7}</Text>
                                    <Text style={styles.text}>{this.state.paragraph8}</Text>
                                    <Text style={styles.text}>{this.state.paragraph9}</Text>
                                </View>
                        }
                        <Text style={styles.credits}>
                            ~HarcApp
                        </Text>

                    </ScrollView>
                </SafeAreaView >
            </View >
        );
    }
}
const styles = StyleSheet.create({

    container: {
        margin: 20,
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    menu: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    person: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 20
    },
    page: {
        flex: 5,
    },
    text: {
        fontSize: 20,
        paddingTop: 15
    },
    header: {
        fontSize: 25,
        paddingTop: 15,
        paddingBottom: 30
    },
    credits: {
        fontSize: 15,
        color: 'gray',
        paddingTop: 15
    }
})

export default Historia;

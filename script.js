
const phrasesList1 = [
    "Մենք կոտրել ենք հայկական ֆաշիստական, ահաբեկչական պետության ողնաշարը: Մենք նրանց ծնկի ենք բերել, ուստի նրանք պետք է հետեւություններ անեն: Հայ հասարակությունը պետք է ճիշտ հետեւություններ անի: Եթե նրանք վրեժ են փափագում, ապա ավելի վատ վախճան կունենան: Այստեղից մինչեւ Հայաստանի սահման 5 կիլոմետր է եւ եթե այն կողմից անգամ մեկ փամփուշտ արձակվի, մենք այնպիսի հարված կհասցնենք, որ նրանք իրենց անունները կմոռանան:",
    "Ադրբեջանի զինված ուժերը տեղակայված են հայ-ադրբեջանական սահմանի հիմնական ռազմավարական բարձունքներում ու Հայաստանը պետք է լավ հասկանա, թե դա ինչ է նշանակում: ",
    "Հայաստանը պետք է լավ հասկանա, թե դա ինչ է նշանակում։ Այսօր այս ռազմավարական բարձունքներից տեսնում ենք Վանաձոր, Կապան, Գորիս և Ջերմուկ քաղաքները։ Մեր աչքի առաջ է նաև Սևանա լիճը։ Այս ամենը իրականություն է:",
    "Մեր բանակը ցուցաբերել է հերոսություն, պրոֆեսիոնալիզմ և նվիրում։ Հարկ եղած դեպքում, սա եւս մեկ անգամ ցույց կտանք ու կհասնենք մեր ուզածին․ սա գիտեն բոլորը, թող սա իմանան նաեւ նրանք, ովքեր մեր սահմանին զորավարժություններ են անցկացնում ի պաշտպանություն Հայաստանի։ Մեզ ոչ ոք չի կարող վախեցնել:",
    "Մենք Զանգեզուրի միջանցք ենք իրականացնում՝ ուզում է Հայաստանը, թե ոչ։ Եթե ցանկանա, ավելի հեշտ կլինի այդ հարցը լուծել, եթե չուզի, ուժով կլուծենք:",
    "Երբ բացվեն բոլոր կոմունիկացիաները, մենք, իհարկե, կվերադառնանք, Ադրբեջանի բնակչությունը կվերադառնա իր նախնիների հողեր:",
    "Նոյեմբերի 10-ի եռակողմ հայտարարության մեջ նշված է՝ բոլոր փախստականները պետք է վերադառնան հայրենի հողեր։ Մեր հայրենի հողերը՝ Զանգեզուր, Գյոյչա, Իրեվան։ Մենք, իհարկե, վերադառնալու ենք:",
    "Հայաստանը դեռևս օկուպացված է պահում Ադրբեջանին պատկանող 8 գյուղ:",
    "Եթե Հայաստանն իսկապես խաղաղություն է ուզում, ապա նրա ինչի՞ն է պետք հարյուր միլիոն դոլարների զենքը:",
    "Արևմտյան Ադրբեջանը մեր պատմական հողն է: Բազմաթիվ պատմական փաստաթղթերը, պատմական քարտեզները, մեր պատմությունը դա հաստատում են:",
    "Հայերը հողին են հավասարեցրել և ոչնչացրել են  Արևմտյան Ադրբեջանի մեր պատմական ու կրոնական հուշարձանները, ինչպես դա արել են Ղարաբաղում: ",
    "Արևմտյան Ադրբեջանը պատմական ադրբեջանական  հող է, իսկ այդ շրջանի քաղաքների ու գյուղերի անուններն ունեն ադրբեջանական ծագում։ Մեզ լավ հայտնի է, որ ամբողջ պատմության ընթացքում ադրբեջանցի ժողովուրդն ապրել է ներկայիս Հայաստանի տարածքում։ Այժմ մեր հիմնական խնդիրն այդ տեղեկատվությունը միջազգային հանրությանը հասցնելն է։",
    "Վստահ եմ, որ կգա այն օրը, երբ Արևմտյան Ադրբեջանի մեր հայրենակիցները, նրանց ազգականները, երեխաներն ու թոռները կվերադառնան մեր պատմական հողը՝ Արևմտյան Ադրբեջան։",
    "Իր առաջին որոշումներից մեկով նորաստեղծ Ադրբեջանի Ժողովրդական Հանրապետությունը 1918 թվականին փաստացի նվիրեց Հայաստանին մեր պատմական քաղաքը՝ Իրևանը։ Սա աններելի քայլ էր, դա դավաճանություն էր ու հանցագործություն։",
    "1920 թվականին խորհրդային կառավարության որոշմամբ և հայ ազգայնականների պնդմամբ մեր մյուս պատմական հողը՝ Զանգեզուրը, պոկվեց Ադրբեջանից և միացվեց Հայաստանին։ Սա հերթական հանցագործությունն էր մեր ժողովրդի դեմ։",
    "Այսօր մենք արդեն գտնվում ենք Բալա Գյոյչայի ափին։ Այսօր Գյոյչա լիճը մենք տեսնում ենք առանց հեռադիտակի։ Առաջին հերթին, կարծում եմ, դա արդարացի է։ Երկրորդ՝ սեպտեմբերյան բախումները մեզ ապագայում ապահովագրում են մեծ խնդիրներից։",
    "Ես կարծում եմ, որ տարին մեկ կամ երկու տարին մեկ անգամ անհրաժեշտ է Բաքվում անցկացնել Արևմտյան Ադրբեջանին առնչվող միջազգային համաժողով։ Մենք կհրավիրենք գիտնականների, հնագետների, պատմաբանների  մեզ բարեկամ երկրներից միջազգային հեղինակավոր գիտաժողով անցկացնելու և այս ամենը ներկայացնելու համար։ Այսինքն՝ պետք է շատ քայլեր ձեռնարկել, որպեսզի այդ թեման չվերանա օրակարգից, այլ ընդհակառակը մտնի միջազգային օրակարգ։",
    "ԵԽԽՎ-ն, որը խոսում է Ղարաբաղ հայերի վերադարձի մասին, հայկական մշակութային ժառանգության պահպանության մասին, Հայաստանին կոչ չի անում պայմաններ ստեղծել ադրբեջանցիների վերադարձի և Ադրբեջանի ժողովրդի մշակութային ժառանգությունը պաշտպանելու համար։ ԵԽԽՎ-ն պահանջում է ազատ արձակել Խոջալուի մարդասպաններին, բայց չի անդրադառնում անհետ կորած 4 հազար ադրբեջանցիների հարցին։",
    "Եթե տեսնենք, որ մեր պետության անվտանգությունն անգամ չնչին վտանգի տակ է, անմիջապես տեղում կոչնչացնենք թշնամուն։",
    "30 տարի հայերը չկարողացան պետականություն կառուցել։ Նշանակում է, որ այդ ժողովուրդը չի կարող պետություն կառուցել։ Սա նշանակում է, որ այդ ժողովուրդը կարող է ապրել միայն այլ խոշոր պետությունների շրջանակներում։",
    "Ոչ մեկի զանգը կամ հայտարարությունը չի կարող կանգնեցնել մեզ։",
    "Որպեսզի Հայաստանը հանգիստ ապրի 29 հազար քառակուսի կմ տարածքում, կա մեկ պայման՝ ընդունել մեր պայմանները՝ պաշտոնապես ճանաչել Ղարաբաղը Ադրբեջանի տարածք, ստորագրել խաղաղության պայմանագիր եւ դելիմիտացիայի աշխատանքներ տանել՝ համաձայն մեր պայմանների։ Միայն այդ դեպքում նրանք կարող են հանգիստ ապրել 29 հազար քառ․ կմ տարածքում։",
    "Խաղաղության պայմանագրում Լեռնային Ղարաբաղի հարցը ներառելու ցանկացած փորձ հակաարդյունավետ է։ Եթե Հայաստանը «կառուցողական մոտեցում» չցուցաբերի, ապա Բաքվի և Երևանի միջև խաղաղություն և փոխգործակցություն չի լինի։ Եթե Հայաստանը խաղաղություն չի ուզում, ապա չի լինի խաղաղություն։",
    "Ղարաբաղի հայերին մնում է մեկ ճանապարհ՝ «աղբարկղը նետել կեղծ «պետական ատրիբուտները», լուծարել խորհրդարանը և ենթարկվել Ադրբեջանի օրենքներին։",
    "Զանգեզուրյան միջանցքի բացումն անխուսափելի է, որքան արագ այն բացվի, այնքան լավ։ Ամեն դեպքում, մենք մեր ջանքերն այդ ուղղությամբ կավելացնենք։ Այս միջանցքի բացումը նոր հնարավորություններ կստեղծի բոլոր երկրների համար և դրական ազդեցություն կունենա տարածաշրջանում գործարար համագործակցության վրա։",
    "Ֆրանսիայի կողմից Հայաստանին զենքի մատակարարումը ծառայում է ոչ թե խաղաղությանը, այլ նոր հակամարտության։",
    "Զանգեզուրի միջանցքի բացումը խաղաղության պայմանագրի կնքման՝ Ադրբեջանի պայմաններից մեկն է։"

];

const phrasesList2 = [
    "Այսօր միջազգային հանրությունը մեզ հստակ ասում է՝ լինել աշխարհի միակ երկիրը, որ երկկողմ մակարդակում չի ճանաչում Թուրքիայի դաշնակից Ադրբեջանի տարածքային ամբողջականությունը, մեծ վտանգ է ոչ միայն Արցախի, այլև Հայաստանի համար: Այսօր միջազգային հանրությունը մեզ կրկին ասում է՝ մի փոքր իջեցրեք Լեռնային Ղարաբաղի կարգավիճակի հարցում ձեր նշաձողը և միջազգային մեծ կոնսոլիդացիա կապահովեք Հայաստանի և Արցախի շուրջ",
    "Եթե որեւէ մեկն ասում է, որ Հայաստանը պետք է շարունակի կոնֆրոնտացիոն ռեժիմում ապրել առաջիկայում, ինքը, ըստ էության, Հայաստանի Հանրապետության պետականությունը, պետության գոյությունը, ինքնիշխանությունը եւ անկախությունը դնում է կասկածի տակ:",
    "Հայաստանը դնել կոնֆրոնտացիոն ռեժիմում՝ նշանակում է Հայաստանի Հանրապետության ինքնիշխանությունը, անկախությունը դատապարտել չգոյության: Ես սրանում համոզված եմ։",
    "Բանակցային գործընթացում Հայաստանի առաջնահերթություններից է լինելու այն տարածքների դեօկուպացիան, որի վրա ինքնորոշվել է Արցախի ժողովուրդը, նախևառաջ նախկին ԼՂԻՄ բնակավայրերի վերադարձն Արցախի վերահսկողության ներքո՝ խաղաղ, բանակցային ճանապարհով, ինչը հնարավորություն կտա տեղահանված անձանց վերադարձնել իրենց տներ։",
    "Մենք պատրաստ ենք փոխադարձության սկզբունքով հասցեագրել նաև անկլավների հարցը, ինչպես հայտարարել եմ սույն թվականի հոկտեմբերի 10-ին Հայաստանի Հանրային հեռուստաընկերությանը տված հարցազրույցում, և վերջապես պատրաստ ենք մինչև տարեվերջ Ադրբեջանի հետ խաղաղության և հարաբերությունների կարգավորման պայմանագիր կնքել։",
    "Մենք պատրաստ ենք ապահովել ադրբեջանական բեռների եւ ադրբեջանցիների անցման անվտանգությունը մեր տարածքով` հույս ունենալով նաև փոխադարձության։",
    "Մենք փոխադարձաբար ճանաչո՞ւմ ենք անկլավների գոյությունը, այսինքն՝ որ կա Արծվաշեն, որը պատկանում է, պատկանել է Հայաստանի Հանրապետությանը, և անկլավներ հիմա, որ Հայաստանի տարածքում են, որոնք պատկանել են Ադրբեջանին. Այո՛, քաղաքական մակարդակում դա մենք ճանաչում ենք:",
    "Եկեք հասկանանք, մենք խոսում ենք պատերազմի՞ մասին, թե՞ խաղաղության: Եթե իրոք խոսում ենք խաղաղության մասին, դա [անկլավների հարցը] ընդամենը տեխնիկական, կազմակերպչական հարց է, որը շատ մեծ ռազմավարական խորք չունի: Եթե խոսում ենք պատերազմի մասին, այո, դա շատ սուր հարց է: Մենք այս բոլոր մարտահրավերները գիտակցում ենք: Ճանապարհից են խոսում, հասանելիություն են խոսում. Մենք այդ բոլոր ճանապարհներն էլ գիտենք, խնդիրներն էլ գիտենք, դրանց այլընտրանքներն էլ գիտենք, լուծումներն էլ գիտենք: Հարցը հետևյալի մասին է՝ մենք այդ հարցը դիտում ենք պատերազմի՞ մեջ, թե՞ խաղաղության մեջ",
    "Ես Հայաստանի Հանրապետության տարածքի՝ 29 800 քառակուսի կմ լինելու մասին հայտարարություն արեցի, որից հետո Ազգային ժողովի դիմաց բազմահազարանոց ցույց տեղի ունեցավ։ Սրանից ակնհայտ դարձավ, որ մենք՝ որպես հանրություն, մեր պետության միջազգայնորեն ճանաչված տարածքի չափի մասին այդքան էլ լավ պատկերացում չունենք։",
    "Պատկերացրեք, դուք ապրում եք մի տեղ, բայց կադաստրի վկայական չունեք, հասկանո՞ւմ եք, մենք բոլորս հասկանում ենք, որ մեր շատ սիրելի հայրենիքում 30 տարի ապրում ենք մի տեղ, որի կադաստրի վկայականը չունենք: Ընդ որում՝ Հայաստանը, որպես պետություն, իր բազմահազարամյա գոյության ընթացքում երբեք կադաստրի վկայական չի ունեցել: Եթե մենք այն, ինչ ուզում ենք անել, ստացվի, մենք պատմության մեջ առաջին անգամ կստանանք կդաստրի վկայական, սեփականատեր կլինենք ոչ միայն դե ֆակտո, այլև դե յուրե, հասկանո՞ւմ եք:",
    "յո, այս պահին մենք ոչ մի բան չենք ստացել, շանս ենք ստացել, որ կարող ենք ստանալ ինչ-որ բան, բայց մենք շարունակում ենք մնալ այդ ռեժիմում՝ առանց կադաստրի վկայականի: Ուզում ենք հաղթահարել տնվորի մեր կարգավիճակը, ուզում ենք ունենալ կադաստրի վկայական, որի անունն է պետություն, միջազգայնորեն ճանաչված դեմարկացված և դելիմիտցված սահմաններով։",
    "Հիմա այսօր, այս պահին մեր գնահատականն այն է, որ Լեռնային Ղարաբաղի քաղաքացիական բնակչությանն ուղիղ սպառնալիք չկա:",
    "Ադրբեջանի 86.600 քկմ-ն ներառում է նաև Լեռնային Ղարաբաղը, բայց նաև պետք է արձանագրել, որ մենք ասում ենք, որ ԼՂ հայության իրավունքների ու անվտանգության հարցը պետք է քննարկվի Բաքու-Ստեփանակերտ ֆորմատում։",
    "Տիգրանաշենի հարցը մի գերագնահատեք, տենց անկլավ չկա, որն առաջացնի այնպիսի ճանապարհային պրոբլեմ, որն անլուծելի է։",
    "Եթե նույնիսկ այդպես է, ես ուզում եմ՝ այդ հարցի արժեքը չգերագնահատենք, որովհետեւ այդպիսի անկլավ չկա, որը մեզ համար առաջացնի ճանապարհային  այնպիսի պրոբլեմ, որն անլուծելի է, չկա տենց հարց: Եթե էդ ճանապարհը սենց չի կարա անցնի, սենց կարա անցնի, ոչ մի խնդիր չկա, իրականում մեր ճանապարհային ցանցն այնքան ենք զարգացրել, որ նման խնդիր չկա։",
    "Մենք պատրաստ ենք՝ ոչ թե իրենք հետ գնան, նոր ստորագրենք, այլ՝ ստորագրենք, նոր հետ գնան, մենք էլ, իրենք էլ, բայց դա պետք է գրվի և ստորագրվի այնպես, որ տարընթերցման տեղիք չտա։",
    "Երբ որ նշաձողը ամենաբարձր կետում ա, էդ նշաձողի հետ միակ բանը, որ կարա տեղի ունենա, իջեցումն ա, որովհետև էլ բարձրացնելու տեղ չկա։",
    "Էնպես չի, որ մենք ենք ամենաբարձր կետում դրել էդ նշաձողը, միշտ էլ էդ նշաձողը Ղարաբաղի շարժման ամենամեկնարկից էլ եղել ա ամենաբարձր կետում, սա էլ ա եղել մեր խորքային և՛ ռազմավարական, և՛ մարտավարական սխալը։",
    "Բաքվի հետ բանակցություններում Երևանի համար կարմիր գիծ է Հայաստանի տարածքային ամբողջականությունը, ինքնիշխանությունն ու Լեռնային Ղարաբաղի հայության իրավունքներն ու անվտանգությունը։"
];


function getRandomPhrase(phrases) {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}


function displayRandomPhrase(phrases, targetElement, displayTime) {
    const randomPhrase = getRandomPhrase(phrases);
    targetElement.textContent = randomPhrase;

    setTimeout(function () {
        targetElement.textContent = "";
    }, displayTime);
}


document.getElementById('randomButton1').addEventListener('click', function() {
    const randomPhraseElement = document.getElementById('randomPhrase');
    displayRandomPhrase(phrasesList1, randomPhraseElement, 100000); 
});

document.getElementById('randomButton2').addEventListener('click', function() {
    const randomPhraseElement = document.getElementById('randomPhrase');
    displayRandomPhrase(phrasesList2, randomPhraseElement, 100000); 
});

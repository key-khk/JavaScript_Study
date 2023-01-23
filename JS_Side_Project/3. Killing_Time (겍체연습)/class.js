let allRandom = [];    
let mvMarathon = [];
let animation = [];
let culture = [];
let special = [];

let killerCategory = [allRandom, mvMarathon, animation, culture, special];

class KillerInfo{
  constructor(name,korName){
    this.name = name;
    this.이름 = korName
    this.time = '?';
    allRandom.push(this);
  }
  timeRqrd(time) {
    this.time = time;
  }
  info(info){
    this.info = info;
  }
}
// 1.영화시리즈 (mvMarathon)
class MvMarathon extends KillerInfo{
  rcmnd(rcmnds){
    this.recommend = rcmnds;
    mvMarathon.push(this);
  }
}

let harryPotter = new MvMarathon('HarryPotter','해리포터');
harryPotter.timeRqrd('19hour 39min(1179min)');
harryPotter.info('왓챠');
harryPotter.rcmnd('1박2일');

let lordOfTheRings = new MvMarathon('Lord of the Rings','반지의제왕+호빗');
lordOfTheRings.timeRqrd('20hour (1200min)');
lordOfTheRings.info('왓챠');
lordOfTheRings.rcmnd('1박2일')

let fastAndFurious = new MvMarathon('Fast and Furious','분노의 질주');
fastAndFurious.timeRqrd('20hour 30min (1230min)');
fastAndFurious.info('1편>2편>4편>5편>6편>3편>7편>8편> 홉스&쇼>9편');
fastAndFurious.rcmnd('2박3일');

// 2.애니메이션 (animation)
class Aanimation  extends KillerInfo{
  publish(publ) {
    this.연재현황 = publ;
    animation.push(this);
  }
}

let simspon = new Aanimation('Simspon','심슨');
simspon.timeRqrd('회당 23분');
simspon.info('디즈니+ (레전드 편만 보자)');
simspon.publish('1989년 12월 17일~');

let futurama = new Aanimation('Futurama','퓨처라마');
futurama.timeRqrd('회당 22분');
futurama.info('디즈니+');
futurama.publish('(시즌1~5)1999년~2003년</br>(OVA 1~4)2007년~2009년</br>(시즌6~7)2010년~2013년</br>(시즌8)2022년')

// 3.문화 (culture)
class Culture  extends KillerInfo{
  categorys(ctgy){
    this.category = ctgy;
    culture.push(this);
  }
}
let greatMinds = new Culture('Great Minds','EBS 위대한 수업');
greatMinds.timeRqrd('강연자당 5회*20분');
greatMinds.info('https://home.ebs.co.kr/greatminds/index');
greatMinds.categorys('다큐');

let rollingStone500 = new Culture('Rolling Stone 500 Greatest Songs of All Time','롤링 스톤 선정 500대 명곡(ver.2021년)');
rollingStone500.info('https://namu.wiki/w/%EB%A1%A4%EB%A7%81%20%EC%8A%A4%ED%86%A4%20%EC%84%A0%EC%A0%95%20500%EB%8C%80%20%EB%AA%85%EA%B3%A1#s-5.1');
rollingStone500.categorys('음악');

// 4.특별 (special)
class Special  extends KillerInfo{
  categorys(ctgy){
    this.category = ctgy;
    special.push(this);
  }
  rcmnd(rcmnds){
    this.recommend = rcmnds
  }
}

let bakeCookie = new Special('Butter Cookie','냉동 버터쿠키 만들기');
bakeCookie.info('유튜브에서 하라는 대로 하자');
bakeCookie.categorys('요리');
bakeCookie.rcmnd('오븐이 없으면 노오븐이란 검색어를 꼭 붙이자');

let tarantino = new Special('Quentin Tarantino','쿠엔틴 타란티노');
tarantino.timeRqrd('1.저수지의 개들(Reservoir Dogs) - (99분)</br> 2.펄프픽션(Pulp Fiction) - (154분)');
tarantino.info('왓챠');
tarantino.categorys('영화-감독');
tarantino.rcmnd(
'1.저수지의 개들(Reservoir Dogs : 맥주 OR 코코넛라임 OR 말리부 모히또</br>'+
'2.펄프픽션(Pulp Fiction) : 치즈버거 + 맥주 OR 밀크셰이크');


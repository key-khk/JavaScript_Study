//0.전체랜덤   
// for (let i = 0; i < killerCategory.length; i++) { 
//   for (let j = 0; j < killerCategory[i].length; j++) {
//     allRandom.push(killerCategory[i][j]);
//   }
// }

//선택
let pickNum
while (true) {
  let pick = prompt(`
        0~4까지 숫자만 입력해주세요.
        1.영화시리즈 
        2.애니메이션 
        3.문화 
        4.특별 
        0.전체랜덤
        `);
  if (0<=pick && pick<killerCategory.length) {
    pickNum = pick;
    announce();
    break;
  } else {
    alert('0~4 사이에서 골라주세요');
  }
}    

//랜덤 및 결과값
function announce() {
  if (pickNum == null) {
    alert('취소하셨습니다.')
  } else {
    let randomPick = Math.floor(Math.random()*killerCategory[pickNum].length);
    let chosenOne = killerCategory[pickNum][randomPick];
    let json = JSON.stringify(chosenOne);
    document.write(json);
  }
}
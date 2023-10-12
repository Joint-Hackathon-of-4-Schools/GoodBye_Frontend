export const menuCalc = (ColorNumber, SugarPercent, StyleNumber) => {
  if(ColorNumber === 0) {
    if(SugarPercent >= 50) {
      return StyleNumber ? '카페라떼' : '초코라떼';
    } else {
      return '아메리카노';
    }
  }
  else if(ColorNumber === 1) {
    if(SugarPercent >= 50) {
      return StyleNumber ? '돌체라떼' : '바닐라라떼';
    } else {
      return '밀크티';
    }
  }
  else if(ColorNumber === 2) {
    if(SugarPercent >= 50) {
      return StyleNumber ? '청포도에이드' : '딸기라떼';
    } else {
      return '녹차라떼';
    }
  } else {
    if(SugarPercent >= 50) {
      return '소다라떼';
    } else {
      return StyleNumber ? '자몽에이드' : '레몬에이드';
    }
  }
}

/**
 * 검정-안달다-아무거나 : 아메리카노
 * 검정-달다-취향O : 카페
 * 검정-달다-취향X : 초코
 * 하양-달다-취향O : 돌체
 * 하양-달다-취행X : 바닐라
 * 하양-안달다-아무거나 : 밀크티
 * 초록-안달다-아무거나 : 녹차
 * 초록-달다-취향O : 청포도
 * 초록-달다-취향X : 딸기
 * 노랑-달다-아무거나 : 소다
 * 노랑-안달다-취향X : 레몬
 * 노랑-안달다-취향O : 자몽
 * */
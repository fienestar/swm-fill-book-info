function setItem(id, name, fee, purpose)
{
    const gi = document.getElementById.bind(document)
    const nameElement = gi(`eduNm_${id}`)
    nameElement.value = name
    const purposeElement = gi(`eduPurpose_${id}`)
    purposeElement.value = purpose
    const typeElement = gi(`eduForm_${id}`)
    typeElement.value = '도서'
    const feeElement = gi(`eduFee_${id}`)
    feeElement.value = fee;
}

function fillItem(items, purpose)
{
  const plusBtn = document.getElementsByClassName('btn-ar btn-plus')[0]
  items.slice(1).forEach(()=>plusBtn.click())
  setTimeout(() => {
    for(let i=0; i!=items.length; ++i)
      setItem(i+1, items[i].bookName, items[i].fee, purpose)
  }, 1000)
}

fillItem(JSON.parse(prompt("json을 입력해주세요!")), prompt("책 구입 목적을 일괄로 입력해주세요!"))

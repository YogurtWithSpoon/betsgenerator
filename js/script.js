function dateCurrent(){
let currentDate = new Date();

currentDate.setDate(currentDate.getDate());

document.querySelector('input[name=date]').valueAsDate = currentDate;
}


dateCurrent();

$(document).ready(function() {

    let card = `<div class="form-group col-6 event">
    <div class="card m-3">
        <div class="card-body">
            <div class="input-group">
                <div class="input-group-prepend py-2">
                    <span class="input-group-text">Первая команда</span>
                    <div class="dropdown bootstrap-select">
                        <select class="selectpicker" data-live-search="true" data-style="btn-info" name="team1[]"">
                            <option value="Авангард">Авангард</option>
                            <option value="Автомобилист">Автомобилист</option>
                            <option value="Адмирал">Адмирал</option>
                            <option value="Ак Барс">Ак Барс</option>
                            <option value="Амур">Амур</option>
                            <option value="Барыс">Барыс</option>
                            <option value="Витязь Подольск">Витязь Подольск</option>
                            <option value="Динамо Минск">Динамо Минск</option>
                            <option value="Динамо Москва">Динамо Москва</option>
                            <option value="Динамо Рига">Динамо Рига</option>
                            <option value="Йокерит">Йокерит</option>
                            <option value="Куньлунь РС">Куньлунь РС</option>
                            <option value="Локомотив">Локомотив</option>
                            <option value="Металлург Магнитогорск">Металлург Магнитогорск</option>
                            <option value="Нефтехимик">Нефтехимик</option>
                            <option value="Салават Юлаев">Салават Юлаев</option>
                            <option value="Северсталь">Северсталь</option>
                            <option value="Сибирь">Сибирь</option>
                            <option value="СКА">СКА</option>
                            <option value="Слован Братислава">Слован Братислава</option>
                            <option value="Сочи">Сочи</option>
                            <option value="Спартак Москва">Спартак Москва</option>
                            <option value="Торпедо">Торпедо</option>
                            <option value="Трактор">Трактор</option>
                            <option value="ЦСКА">ЦСКА</option>
                        </select>
                    </div>
                </div>

                <div class="input-group-prepend py-2">
                    <span class="input-group-text">Вторая команда</span>
                    <div class="dropdown bootstrap-select">
                        <select class="selectpicker" data-live-search="true" data-style="btn-warning" name="team2[]">
                            <option value="Авангард">Авангард</option>
                            <option value="Автомобилист">Автомобилист</option>
                            <option value="Адмирал">Адмирал</option>
                            <option value="Ак Барс">Ак Барс</option>
                            <option value="Амур">Амур</option>
                            <option value="Барыс">Барыс</option>
                            <option value="Витязь Подольск">Витязь Подольск</option>
                            <option value="Динамо Минск">Динамо Минск</option>
                            <option value="Динамо Москва">Динамо Москва</option>
                            <option value="Динамо Рига">Динамо Рига</option>
                            <option value="Йокерит">Йокерит</option>
                            <option value="Куньлунь РС">Куньлунь РС</option>
                            <option value="Локомотив">Локомотив</option>
                            <option value="Металлург Магнитогорск">Металлург Магнитогорск</option>
                            <option value="Нефтехимик">Нефтехимик</option>
                            <option value="Салават Юлаев">Салават Юлаев</option>
                            <option value="Северсталь">Северсталь</option>
                            <option value="Сибирь">Сибирь</option>
                            <option value="СКА">СКА</option>
                            <option value="Слован Братислава">Слован Братислава</option>
                            <option value="Сочи">Сочи</option>
                            <option value="Спартак Москва">Спартак Москва</option>
                            <option value="Торпедо">Торпедо</option>
                            <option value="Трактор">Трактор</option>
                            <option value="ЦСКА">ЦСКА</option>
                        </select>
                    </div>
                </div>

                <div class="input-group-prepend py-2">
                    <span class="input-group-text">Событие</span>
                    <div class="dropdown bootstrap-select btn-light">
                        <select class="selectpicker" name="sobit[]">
                            <option value="ИТБ1(0.5)">ИТБ1(0.5)</option>
                            <option value="ИТБ2(0.5)">ИТБ2(0.5)</option>
                            <option value="ИТБ1(1)">ИТБ1(1)</option>
                            <option value="ИТБ2(1)">ИТБ2(1)</option>
                            <option value="Все периоды ТМ(1.5): Нет">Все периоды ТМ(1.5): Нет</option>
                            <option value="Ничья и ТМ(2.5): Нет">Ничья и ТМ(2.5): Нет</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="ИТБ1(1.5)">ИТБ1(1.5)</option>
                            <option value="ИТБ2(1.5)">ИТБ2(1.5)</option>
                            <option value="Обе забьют: Да">Обе забьют: Да</option>
                            <option value="ТМ(7.5)">ТМ(7.5)</option>
                        </select>
                    </div>
                </div>

                <div class="input-group-prepend py-2">
                    <span class="input-group-text">Коэффициент</span>
                    <input type="tel" name=koef[] class="form-control" value="1.">
                </div>
            </div>
        </div>
    </div>
</div>`;
    
    var koefs = document.querySelectorAll('input[name="koef[]"]');
    var output = document.querySelector('.output');

    koefs.forEach(function(kof) {
      kof.addEventListener('change', function() {
        var multiply = 1;
        koefs.forEach(function(item) {
          multiply *= item.value
          return multiply
        })
        output.textContent = multiply.toFixed(3);
      })
    });  
    
    // add new element

    $('#add').click(function() {
      
      const form = $('.main-form');
      form.append(card);
      $(".selectpicker").selectpicker("render");

      var koefs = document.querySelectorAll('input[name="koef[]"]');
      var output = document.querySelector('.output');

      koefs.forEach(function(kof) {
        kof.addEventListener('change', function() {
          var multiply = 1;
          koefs.forEach(function(item) {
            multiply *= item.value
            return multiply
          })
          output.textContent = multiply.toFixed(3);
        })
      });
    });

    // remove last card
    $('#remove').click(function() {
      const lastCard = $('.form-group').last();
      var allKofs = document.querySelectorAll('input[name="koef[]"]').length;
      var lastkof = document.querySelectorAll('input[name="koef[]"]')[allKofs - 1];
      var output = document.querySelector('.output');
      var tmpValue = +output.textContent / lastkof.value;
      output.textContent = tmpValue.toFixed(3);
      lastCard.remove();
    });

    // reset all cards

    $('#reset').click(function() {
      const allCards = $('.form-group');
      allCards.each(function(index, card) {
        card.remove();
      });
    });
});

$('#generate').click(function(){
  let add_form = document.querySelector('.add-form')
  let koffes = document.querySelectorAll('input[name="koef[]"]')
  let finalPower = document.querySelector('.output')
  
  
  let teamFirst = document.querySelectorAll('.dropdown-toggle');
  let date_post=document.querySelector('input[name="date"]')
  
  let array1 = [];
  let array2 = [];
  let array3 = [];
  let string = '';

  for(let item of teamFirst){
    array1.push(item.title);
  }

  for(let item of koffes){
    array2.push(item.value)
  }

  array1.forEach((item,index,arr) => {
    if((index + 1) % 3 === 0){
      const tmp1 = array1.slice(index-2,index+1);
      const tmp2 = array2.slice(index/3,index/3+1);
      array3 = [...array3,...tmp1,...tmp2];
    }
  })

  array3.forEach((item,index,arr)=> {
    if ((index % 4 === 0)){
      string = string + '✅' + array3[index] + ' - ' + array3[index + 1] + '<br>' + array3[index + 2] + ' ' + 
      array3[index + 3] + '<br>';
    }
  })

  let card =
    ` <div class="card-header">Экспресс на сегодня</div>
      <div class="card-body">
        <p class="card-text">
            🚄Экспресс на `+date_post.value+`
            <br>`
            +
            string
            +
            `💰Коэффициент: `+ finalPower.textContent +`
            <br>
            🥅Ход матчей: https://www.myscore.ru/khl/
            <br>
            📺Трансляции: https://livesport.ws/league/russia-khl/
        </p>
      </div>
      </div>`
  
  let betcard = document.querySelector('.bet-card') 
  if(betcard){
    betcard.remove();
  }

  let div = document.createElement('div')
  div.className = "card col-8 bet-card mt-3"
  div.innerHTML = card;
  add_form.append(div);
})
/**
 * Функция создает объект игрокa
 * 
 * @param {number} x Координата объекта по оси Х
 * @param {number} y Координата объекта по оси У
 * @param {number} vx Скорость объекта по оси Х
 * @param {number} vy Скорость объекта по оси У
 * @param {number} radius Радиус объекта
 * @param {color} fillColor Цвет объекта
 * @returns Объект игрока
 */
  function gameObject(x,y,vx,vy,radius,fillColor){
    return{
      x  : x,
      y  : y,
      vx  : vx,
      vy  : vy,
      radius  : radius,
      fillColor  : fillColor,
    }
  };     

  gameObject()

/**
 * Функция рассчитывает расстояние между двумя точками
 * 
 * @param {number} a Начальная точка рассчета
 * @param {number} b Конечная точка рассчета
 * @returns Расстояние между точками
 */
  function getDistance(a,b){
          dx = a.x - b.x;
          dy = a.y - b.y;
          return  Math.sqrt(dx * dx + dy * dy);
  };

  getDistance()

/**
 * Функция проверяет, попал ли объект игрока в нужные мишени
 * 
 * @param {object} player Объект игрока
 * @param {object} circle Мишень в которую необходимо попасть
 * @returns При попадении функция возвращает true, иначе - false
 */
  function circleCollision(player,circle){
        if(getDistance(player.getBounds(),circle.getBounds()) 
          < (player.radius-30 + circle.radius)){
        return true;
        } else {
            return false;
        }
  };

  circleCollision()




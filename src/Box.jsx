import React from 'react';
import './Box.css'; // импортируем CSS-файл для стилей компонента Box

function Box(props) {
  // определяем класс для изменения ширины компонента Box в зависимости от параметра size
  const sizeClass = props.size === 'small' ? 'box-small' : // если size равно 'small', то класс будет 'box-small'
                    props.size === 'medium' ? 'box-medium' : // если size равно 'medium', то класс будет 'box-medium'
                    props.size === 'large' ? 'box-large' : ''; // если size равно 'large', то класс будет 'box-large'
  
  // определяем класс для добавления радиуса границы в зависимости от параметра roundedCorners
  const roundedClass = props.roundedCorners ? 'rounded' : ''; // если roundedCorners равно true, то класс будет 'rounded'

  return (
    // добавляем CSS-классы к компоненту Box в зависимости от переданных параметров
    <div className={`box ${sizeClass} ${roundedClass}`}>
      {props.children} {/* вставляем дочерние элементы внутрь компонента Box */}
    </div>
  );
}

export default Box; // экспортируем компонент Box для использования в других модулях

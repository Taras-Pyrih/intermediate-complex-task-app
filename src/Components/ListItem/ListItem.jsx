import classNames from 'classnames/bind';
import './ListItem.scss';

export const ListItem = props => {
  const liClass = classNames({
    listItem: true,
    postIsPublished: props.obj.done
  });

  const handleClick = () => {
    props.onChangeDone(props.postIndex);
  };

  return (
    <li className={liClass}>
      <p>
        <span>{props.obj.id}. </span>
        <span>{props.obj.title}</span>
      </p>
      <button onClick={handleClick}>Done</button>
    </li>
  );
};
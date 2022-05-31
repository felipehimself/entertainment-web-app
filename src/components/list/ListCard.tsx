import IAppInterface from '../../interfaces/appInterfaces';

import tvIcon from './../../assets/icons/icon-category-tv.svg';
import movieIcon from './../../assets/icons/icon-category-movie.svg';
import playIcon from './../../assets/icons/icon-play.svg';
import favIcon from './../../assets/icons/icon-bookmark.svg';

import * as Style from './styles';
import { useGlobalContext } from '../../store/context';
import { IoBookmarkSharp } from 'react-icons/io5';

const ListCard: React.FC<IAppInterface> = ({
  name,
  category,
  type,
  year,
  isFavorite,
  isTrending,
  img,
  id,
}) => {
  const { dispatch } = useGlobalContext();

  return (
    <Style.Article>
      <Style.ImgContainer>
        <Style.Img src={img} alt='' />
        <Style.ContainerPlay>
          <Style.BtnPlay>
            <Style.Icon src={playIcon} alt='play button' />
            Play
          </Style.BtnPlay>
        </Style.ContainerPlay>
        <Style.BtnFavorite
          onClick={() =>
            dispatch({ type: 'CHANGE_FAVORITE', payload: { id: id } })
          }
        >
          {isFavorite ? (
            <IoBookmarkSharp size={14} color='#fff' />
          ) : (
            <Style.Icon src={favIcon} alt='favorite icon' />
          )}
        </Style.BtnFavorite>
      </Style.ImgContainer>
      <Style.ListCard>
        <Style.Li>{year}</Style.Li>
        <Style.Li>
          {category === 'movie' ? (
            <Style.Icon src={movieIcon} alt='movie icon' />
          ) : (
            <Style.Icon src={tvIcon} alt='tv series icon' />
          )}
          {category}
        </Style.Li>
        <Style.Li>{type}</Style.Li>
      </Style.ListCard>
      <Style.H3>{name}</Style.H3>
    </Style.Article>
  );
};

export default ListCard;

import IAppInterface from '../../interfaces/appInterfaces';

import tvIcon from './../../assets/icons/icon-category-tv.svg';
import movieIcon from './../../assets/icons/icon-category-movie.svg';
import playIcon from './../../assets/icons/icon-play.svg';
import favIcon from './../../assets/icons/icon-bookmark.svg';
import * as Style from './styles';

import { useGlobalContext } from '../../store/context';
import { IoBookmarkSharp } from 'react-icons/io5';


const SliderItem: React.FC<IAppInterface> = ({
  imgLarge,
  name,
  category,
  type,
  year,
  isFavorite,
  isTrending,
  id,
}) => {
  const { dispatch } = useGlobalContext();
  return (
    <Style.OuterContainer>
      <Style.ContainerPlay>
        <Style.BtnPlay>
          <Style.IconMed src={playIcon} alt='play button' />
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
            <Style.IconMed src={favIcon} alt='favorite icon' />
          )}
      </Style.BtnFavorite>
      <Style.Img src={imgLarge} alt='image of a movie or tv series' />
      <Style.Container>
        <Style.ListDetails>
          <Style.Li>{year}</Style.Li>
          <Style.Li>
            {category === 'movie' ? (
              <Style.Icon src={movieIcon} alt='movie icon' />
            ) : (
              <Style.Icon src={tvIcon} alt='tv icon' />
            )}
            {category}
          </Style.Li>
          <Style.Li>{type}</Style.Li>
        </Style.ListDetails>
        <Style.H3>{name}</Style.H3>
      </Style.Container>
    </Style.OuterContainer>
  );
};

export default SliderItem;

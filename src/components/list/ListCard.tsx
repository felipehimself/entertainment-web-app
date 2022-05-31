import IAppInterface from '../../interfaces/appInterfaces';

import tvIcon from './../../assets/icons/icon-category-tv.svg';
import movieIcon from './../../assets/icons/icon-category-movie.svg';
import playIcon from './../../assets/icons/icon-play.svg';
import favIcon from './../../assets/icons/icon-bookmark.svg';

import * as Style from './styles';

const ListCard: React.FC<IAppInterface> = ({
  name,
  category,
  type,
  year,
  isFavorite,
  isTrending,
  img,
}) => {
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
        <Style.BtnFavorite>
          <Style.Icon src={favIcon} alt='play button' />
        </Style.BtnFavorite>
      </Style.ImgContainer>
      <Style.ListCard>
        <Style.Li>{year}</Style.Li>
        <Style.Li>
          {category === 'movie' ? (
            <Style.Icon src={movieIcon} alt='' />
          ) : (
            <Style.Icon src={tvIcon} alt='' />
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

import IAppInterface from '../../interfaces/appInterfaces';

import tvIcon from './../../assets/icons/icon-category-tv.svg';
import movieIcon from './../../assets/icons/icon-category-movie.svg';
import playIcon from './../../assets/icons/icon-play.svg';
import favIcon from './../../assets/icons/icon-bookmark.svg';
import * as Style from './styles';

const SliderItem: React.FC<IAppInterface> = ({
  imgLarge,
  name,
  category,
  type,
  year,
  isFavorite,
  isTrending,
}) => {
  return (
    <Style.OuterContainer>
      <Style.Img src={imgLarge} alt='image movie or tv series' />
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

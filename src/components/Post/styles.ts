import styled from 'styled-components/native';
import Ionicons  from '@expo/vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, FlatList, FlatListProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    width: 100%;

    margin-bottom: 10px;
`;

export const Header = styled.View`
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;

`;

export const AvatarWrapper = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
`;

export const Images = styled(
    FlatList as new(props: FlatListProps<string>) => FlatList<string>
).attrs({
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    style: {
        flex: 1
    }
})`
    flex: 1;
`;

export const ImagesWrapper = styled.View`
    width: ${Dimensions.get('window').width}px;
    aspect-ratio: 0.834;
`;


export const Img = styled.Image`
    width: ${Dimensions.get('window').width}px;
    height: 100%;
`;

export const Icons = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.text};
`;

export const Actions = styled.View`
    flex-direction: row;
    padding: 13px 10px;

    justify-content: space-between;
    align-items: center;
`;

export const ActionsLeft = styled.View`
    width: 33%;
    flex-direction: row;
    justify-content: space-between;
`;

export const IndexesImages = styled.View`
    width: 33%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


export const ActionsRight = styled.View`
    width: 33%;
    align-items: flex-end;
`;

export const LikeButton = styled(BorderlessButton)``;

export const CommentsButton = styled(BorderlessButton)``;

export const CommentsIcon = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.text};
    transform: scaleX(-1);
`;

export const Footer = styled.View`
    padding: 0 10px;
`;

export const Likes = styled.View`
    flex-direction: row;
`;

export const LikePostWrapper = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-right: 5px;
`;

export const WhoLiked = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const DescriptionWrapper = styled.View`
    flex-direction: row;
    margin-bottom: 5px;
`;
export const WhoPostedName = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-right: 5px;
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Comments = styled.Text`
    color: ${({ theme }) => theme.colors.text_link_comments};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: 5px;
`;

export const TimePost = styled.Text`
    color: ${({ theme }) => theme.colors.text_time_post};
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

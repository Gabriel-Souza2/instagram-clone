import styled from 'styled-components/native';
import Ionicons  from '@expo/vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

interface ImgProps {
    aspectRatio: number;
}

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

export const Img = styled.ImageBackground<ImgProps>`
    width: 100%;
    aspect-ratio: ${({ aspectRatio }) => aspectRatio};
`;

export const Icons = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.text};
`;

export const Actions = styled.View`
    flex-direction: row;
    padding: 10px;

    justify-content: space-between;
    align-items: center;
`;

export const ActionsLeft = styled.View`
    width: 30%;
    flex-direction: row;
    justify-content: space-between;
`;

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

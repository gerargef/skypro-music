import styled, { css, createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
    box-sizing: border-box;
}

a,
a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
}


ul li {
    list-style: none;
}

@font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), local('StratosSkyeng'),
        url('../fonts/Stratos-Regular.woff2') format('woff2'),
        url('../fonts/Stratos-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

html,
body {
    font-family: 'StratosSkyeng', sans-serif;
}
`
const MainTextMixin = css`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`

const SvgDark = css`
    fill: transparent;
    stroke: #4e4e4e;
`
const SvgLight = css`
    fill: transparent;
    stroke: #696969;
`

export const Wrapper = styled.div`
    overflow: hidden;
    background-color: #383838;
`
export const Container = styled.div`
    min-height: 100vh;
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    background-color: #181818;
`

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
`
export const MainNav = styled.div`
    flex-grow: 1;
    background-color: #181818;
    padding: 20px 0 20px 36px;
`
export const NavLogo = styled.div`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`

export const LogoImg = styled.img`
    height: 17px;
    color: #181818;
`

export const Centerblock = styled.div`
    min-height: 100vh;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`
export const Sidebar = styled.div`
    flex-grow: 2;
    padding: 20px 90px 20px 78px;
`

export const SidebarPersonal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 12px 0 15px 0;
`
export const SidebarPersonalName = styled.p`
    ${MainTextMixin}
    margin-right: 16px;
`
export const SidebarAvatar = styled.div`
    width: 43px;
    height: 43px;
    background-color: #313131;
    border-radius: 50%;
`
export const SidebarBlock = styled.div`
    height: 100%;
    padding: 240px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const SidebarList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
`

export const SidebarItem = styled.div`
    width: 250px;
    height: 150px;
`

const SceletonMixin = css`
    background-color: #313131;
    height: 19px;
`

export const SceletonSidebarItem = styled.div`
    ${SceletonMixin}
    width: 250px;
    height: 150px;
`
export const SceletonTrackTitle = styled.div`
    ${SceletonMixin}
    width: 51px;
    height: 51px;
`

export const SceletonTitleText = styled.div`
    ${SceletonMixin}
    width: 356px;
`

export const SceletonTrackAuthor = styled.div`
    ${SceletonMixin}
    width: 271px;
`

export const SceletonTrackAlbum = styled.div`
    ${SceletonMixin}
    width: 280px;
`
export const BarPlayer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const PlayerControls = styled.div`
    width: 250px;
    display: flex;
    padding: 0px 27px 0px 31px;
    justify-content: space-between;
    align-content: center;
    align-items: center;
`
export const TrackPlay = styled.div`
    display: flex;
    flex-direction: row;
`

export const TrackPlayContain = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'image author' 'image album';
    align-items: center;
`
export const TrackPlayImage = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    grid-area: image;
`
export const TrackPlaySvg = styled.svg`
    ${SvgDark}
    width: 18px;
    height: 17px;
`

export const TrackPlayAuthor = styled.div`
    grid-area: author;
    min-width: 49px;
`

export const TrackPlayAuthorLink = styled.a`
    ${MainTextMixin}
    white-space: nowrap;
`

export const TrackPlayAlbum = styled.div`
    grid-area: album;
    min-width: 49px;
`
export const TrackPlayAlbumLink = styled.a`
    ${MainTextMixin}
    font-size: 13px;
`
export const TrackPlayLikeDis = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 26%;
`
const HoverMixin = css`
    :hover,
    :hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
`

export const TrackPlayLikeDisIcon = styled.div`
    ${HoverMixin}
    padding: 5px;
`
export const TrackPlayLikeDisSvg = styled.svg`
    ${SvgLight}
    width: 14px;
    height: 12px;
`
export const PlayerBtnSvg = styled.svg`
    ${HoverMixin}
    width: 15px;
    height: 14px;
    stroke: #d9d9d9;
`
export const Bar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
`
export const BarContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const BarPlayerProgress = styled.input`
    height: 5px;
    width: 100%;
    background: #797979;
    background-image: linear-gradient(#b672ff, #b672ff);
    background-size: ${(props) => props.$range}% 100%;
    background-repeat: no-repeat;
    border-radius: 5px;
    -webkit-appearance: none;
    outline: none;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #b672ff;
        cursor: pointer;
    }
    &::-moz-range-thumb {
        -webkit-appearance: none;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: #b672ff;
        transition: background 0.3s ease-in-out;
    }

    ::-moz-range-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #ff4500;
        cursor: ew-resize;
        box-shadow: 0 0 2px 0 #555;
        transition: background 0.3s ease-in-out;
    }

    ::-ms-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #ff4500;
        cursor: ew-resize;
        box-shadow: 0 0 2px 0 #555;
        transition: background 0.3s ease-in-out;
    }
`
export const BarPlayerBlock = styled.div`
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const BarVolumeBlock = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 92px 0 0;
`
export const VolumeContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
`
export const VolumeImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`
export const VolumeSvg = styled.svg`
    width: 13px;
    height: 18px;
    fill: transparent;
`
export const VolumeProgress = styled.div`
    width: 109px;
`
export const VolumeProgressLine = styled.input`
    ${HoverMixin}
    width: 109px;
    height: 2px;
    margin-bottom: 12px;
    -webkit-appearance: none;
    background: #797979;
    background-image: linear-gradient(#ffffff, #ffffff);
    background-size: ${(props) => props.$range}% 100%;
    background-repeat: no-repeat;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: #ffffff;
        transition: background 0.3s ease-in-out;
    }

    ::-moz-range-thumb {
        -webkit-appearance: none;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: #ffffff;
        transition: background 0.3s ease-in-out;
    }

    ::-ms-thumb {
        -webkit-appearance: none;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: #ffffff;
        transition: background 0.3s ease-in-out;
    }

    ::-webkit-slider-thumb:hover {
        background: #ffffff;
    }

    ::-moz-range-thumb:hover {
        background: #ffffff;
    }

    ::-ms-thumb:hover {
        background: #ffffff;
    }

    ::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }

    ::-moz-range-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }

    ::-ms-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }
`
export const NavBurger = styled.div`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const BurgerLine = styled.span`
    display: inline-block;
    height: 1px;
    background-color: #d3d3d3;
`
export const MenuList = styled.ul`
    padding: 18px 0 10px 0;
`
export const MenuItem = styled.li`
    padding: 5px 0;
    margin-bottom: 16px;
`
export const MenuLink = styled(Link)`
    ${MainTextMixin}
`
export const CenterblockSearch = styled.div`
    width: 100%;
    border-bottom: 1px solid #4e4e4e;
    margin-bottom: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const SearchSvg = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #ffffff;
    fill: transparent;
`

export const SearchText = styled.input`
    ${MainTextMixin}
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    ::placeholder {
        ${MainTextMixin}
        background-color: transparent;
    }
`
export const CenterblockContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const CenterblockTitle = styled.h2`
    ${MainTextMixin}
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`
export const CenterblockText = styled.h6`
    ${MainTextMixin}
    font-size: 32px;
    line-height: 72px;
`

export const ContentTitle = styled.div`
    display: grid;
    grid-template-columns: 7.5fr 5.4fr 4.08fr 1fr;
    margin-bottom: 24px;
`
export const PlaylistTitle = styled.div`
    ${MainTextMixin}
    font-size: 14px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`
export const PlaylistTitleSvg = styled.svg`
    ${SvgLight}
    width: 12px;
    height: 12px;
`
export const Counter = styled.div`
    ${MainTextMixin}
    position: absolute;
    bottom: 22px;
    right: -12px;
    font-size: 13px;
    line-height: 25px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #ad61ff;
    text-align: center;
    vertical-align: center;
`
export const Dropdown = styled.div`
    position: absolute;
    top: 49px;
    left: 0;
    background-color: #313131;
    border-radius: 12px;
    padding-right: 34px;
`
export const DropdownWrapper = styled.div`
    max-height: 305px;
    overflow-y: auto;
    margin: 36.5px 0px 36.5px 34px;
    ::-webkit-scrollbar {
        width: 4px;
        background: #4b4949;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #ffffff;
    }
`
export const DropdownContent = styled.div`
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 28px;
`
export const DpopdownItem = styled.p`
    ${MainTextMixin}
    color: ${(props) => (props.$selected ? '#b672ff' : '#ffffff')};
    text-decoration: ${(props) => (props.$selected ? 'underline' : 'none')};
    font-size: 20px;
    white-space: nowrap;
    :hover {
        ${HoverMixin}
        text-decoration: underline;
        color: #b672ff;
    }
`
export const DropdownRadio = styled.div`
    display: flex;
    column-gap: 28px;
`
export const RadioLabel = styled.label`
    ${MainTextMixin}
    font-size: 20px;
    white-space: nowrap;
    display: flex;
    column-gap: 10px;
    :hover {
        ${HoverMixin}
        text-decoration: underline;
        color: #b672ff;
    }
    ::before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        background-color: #fff;
    }
`

export const RadioBox = styled.div`
    height: 1.125rem;
    width: 1.125rem;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 0.4rem;
    transition: background 0.15s, border-color 0.15s;
    padding: 3px;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
        transform: scale(0);
    }
`
export const RadioInput = styled.input`
    display: none;
    &:checked + ${RadioBox} {
        &::after {
            transform: scale(1);
        }
    }
`

export const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 51px;
`
export const FilterTitle = styled.div`
    ${MainTextMixin}
    margin-right: 15px;
`
export const FilterItem = styled.div`
    position: relative;
    :not(:last-child) {
        margin-right: 10px;
    }
`
export const FilterButton = styled.div`
    ${MainTextMixin}
    ${HoverMixin}
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
`
export const PlaylistItem = styled.div`
    margin-bottom: 12px;
`
export const Track = styled.div`
    display: grid;
    grid-template-columns: 7.5fr 5.4fr 4.08fr 1fr;
    align-items: center;
`
export const TrackTtitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const TrackTitleImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
`

export const TrackTitleSvg = styled.svg`
    ${SvgDark}
    width: 18px;
    height: 17px;
`

export const TrackTitleLink = styled.a`
    ${MainTextMixin}
`

export const TrackAuthorLink = styled.a`
    ${MainTextMixin}
    text-align: left;
`
export const TrackAlbumLink = styled.a`
    ${MainTextMixin}
    color: #696969;
`

export const TrackTimeSvg = styled.svg`
    ${SvgLight}
    width: 14px;
    height: 12px;
    margin-right: 17px;
`
export const TrackTimeText = styled.span`
    ${MainTextMixin}
    text-align: right;
    color: #696969;
`
export const ContentPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`
export const Login = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LoginModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 44px;
    background: #ffffff;
    border-radius: 12px;
`

export const LoginInput = styled.input`
    ${MainTextMixin}
    color: #000000;
    width: 278.5px;
    height: 35px;
    border: none;
    border-bottom: 1px solid #d0cece;
    ::placeholder {
        ${MainTextMixin}
        color: #D0CECE;
        font-size: 18px;
    }
    :focus {
        ${MainTextMixin}
        font-size: 18px;
        color: #000000;
        outline: none;
        border-bottom: 1px solid #000000;
    }
`
export const LoginButton = styled.button`
    ${MainTextMixin}
    font-size: 18px;
    background-color: ${(props) => (props.$purple ? '#580EA2' : '#FFFFFF')};
    color: ${(props) => (props.$purple ? '#FFFFFF' : '#000000')};
    margin-top: ${(props) => (props.$purple ? '40px' : '0')};
    width: 278.5px;
    height: 52px;
    border: 1px solid #d0cece;
    border-radius: 6px;
    :hover {
        ${HoverMixin}
        background-color: ${(props) => (props.$purple ? '#3F007D' : '#F4F5F6')};
    }
    :active {
        background-color: ${(props) => (props.$purple ? '#271A58' : '#D0CECE')};
    }
    :disabled {
        background-color: #d0cece;
    }
`
export const InputError = styled.p`
    ${MainTextMixin}
    color: #000000;
`
export const Audio = styled.audio`
    display: none;
`
export const BarPlayerText = styled.p`
    ${MainTextMixin}
    color: #696969;
    line-height: 16px;
    text-align: end;
    padding-top: 10px;
    padding-right: 10px;
`

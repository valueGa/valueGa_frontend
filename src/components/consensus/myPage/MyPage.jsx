import React from 'react';
import { useState, useEffect } from 'react';
import Template from '~/components/consensus/myPage/Template';
import Valuation from '~/components/consensus/myPage/Valuation';
import Profile from '~/components/consensus/myPage/Profile';
import { jwtDecode } from 'jwt-decode';
import { getUserInfo } from '../../../apis/mypage';
import { Login, Signup } from '~/routes/main/MainModal';
import { postLogin, postSignup } from '/src/apis/user';

const getUserIdFromToken = () => {
  const token = localStorage.getItem('valueGa_AccessToken');
  if (token) {
    const decodeToken = jwtDecode(token);
    return decodeToken.user_id;
  }
  return null;
};

export default function MyPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const accessToken = localStorage.getItem('valueGa_AccessToken');
  const [signupShow, setSignupShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const signupHandleClose = () => setSignupShow(false);
  const loginHandleClose = () => setLoginShow(false);

  useEffect(() => {
    if (!accessToken) {
      setLoginShow(true);
      return;
    }
    const userId = getUserIdFromToken();
    setUserId(userId);
    if (userId) {
      getUserInfo(userId)
        .then((data) => {
          setUser({
            name: data.data.user_name,
            email: data.data.user_email,
          });
        })
        .catch((error) => {
          console.error('사용자 정보를 가져오는 중 에러 발생: ', error);
          alert('사용자 정보를 가져오는 중 에러');
        });
    }
  }, []);

  const tabContArr = [
    {
      tabTitle: (
        <li
          key="0"
          className={`py-3 basis-1/2 cursor-pointer ${
            activeIndex === 0
              ? 'border-b-2 border-yellow text-yellow'
              : 'border-b-2 border-tuatara-300 text-tuatara-300'
          }`}
          onClick={() => tabClickHandler(0)}
        >
          Templates
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          key="1"
          className={`py-3 basis-1/2 cursor-pointer ${
            activeIndex === 1
              ? 'border-b-2 border-yellow text-yellow'
              : 'border-b-2 border-gray-300 border-tuatara-300 text-tuatara-300'
          }`}
          onClick={() => tabClickHandler(1)}
        >
          Valuations
        </li>
      ),
    },
  ];

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const handleClickedSignupButton = () => {
    setLoginShow(false);
    setSignupShow(true);
  };

  const handleClickedModalLoginButton = async (email, password) => {
    try {
      const result = await postLogin(email, password);

      if (result.data.token != null) {
        localStorage.setItem(
          'valueGa_AccessToken',
          `Bearer ${result.data.token}`
        );
      }

      signupHandleClose();
      loginHandleClose();
      window.location.reload();
    } catch (error) {
      console.log(`${error}`);
    }
  };

  const handleClickedModalSignupButton = async (name, email, password) => {
    try {
      await postSignup(name, email, password);
      loginHandleClose();
      signupHandleClose();
      window.location.reload();
    } catch (error) {
      console.log(`${error}`);
    }
  };

  return (
    <>
      {accessToken ? (
        <div className="text-tuatara-50">
          <Profile name={user.name} email={user.email} />
          <div className="font-apple mx-16">
            <ul className="text-body2 columns-2 text-center flex flex-row">
              {tabContArr.map((element, index) => {
                return element.tabTitle;
              })}
            </ul>
            <div>{activeIndex == 0 ? <Template /> : <Valuation />}</div>
          </div>
        </div>
      ) : (
        <div>
          <Signup
            show={signupShow}
            handleClose={signupHandleClose}
            handleClickedModalSignupButton={handleClickedModalSignupButton}
          />
          <Login
            show={loginShow}
            handleClose={loginHandleClose}
            handleClickedSignupButton={handleClickedSignupButton}
            handleClickedModalLoginButton={handleClickedModalLoginButton}
          />
        </div>
      )}
    </>
  );
}

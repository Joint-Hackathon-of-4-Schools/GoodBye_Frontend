import React, { useCallback, useEffect, useState } from "react";
import * as _ from "./style";
import Arrow from "../../components/arrow";
import MenuType from "../../components/menuType";
import MenuBox from "../../components/menuBox";
import { MenuTypeData, MenuContentData } from "../../Data/menuData";
import MenuOrderBox from "../../components/menuOrderBox";
import Modal from "../../components/modal";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";

const Main = () => {
	const [MenuBack, setMenuBack] = useState(false);
	const [MenuIndex, setMenuIndex] = useState(0);
	const [OrderData, setOrderData] = useState([]);
	const [ModalState, setModalState] = useState(false)
	const navigate = useNavigate()

	const OrderChange = useCallback((title, add, money, imageURL) => {
		let changeFlag = false;
		const OrderList = [];

		for (const Data of OrderData) {
			if (Data.title === title) {
				const amount = Data.amount;
				Data.amount += add;
				if (Data.amount) {
					Data.money = Data.money / amount * Data.amount;
					OrderList.push(Data)
				}
				changeFlag = true;
			} else {
				OrderList.push(Data)
			}
		}

		if (!changeFlag) {
			OrderList.push({
				title,
				amount: 1,
				money,
				imageURL
			})
		}
		console.log(OrderList)
		setOrderData(OrderList);
		localStorage.setItem('orderList', JSON.stringify(OrderList))
	}, [OrderData])

	useEffect(() => {
		setOrderData(JSON.parse(localStorage.getItem('orderList')) || []);
	}, [])

	return (
		<>
			{
				ModalState &&
				<Modal
					title='주문을<br />취소하시겠습니까?'
					closeModel={() => setModalState(false)}
					acceptRequest={() => {
						setModalState(false)
						setOrderData([]);
						localStorage.removeItem('orderList');
						navigate('/');
					}}
				/>
			}
			<_.Container>
				<Header />
				<_.ContentBox>
					<_.MenuContainer>
						<Arrow
							able={MenuBack}
							direction="up"
							onClick={() => setMenuBack(false)}
						/>
						<_.MenuBar>
							{
								MenuTypeData[+MenuBack].map((v, i) =>
									<MenuType
										key={i}
										img={v.imageURL}
										onClick={() => setMenuIndex(i + (+MenuBack * 4))}
									>
										{v.title}
									</MenuType>
								)
							}
						</_.MenuBar>
						<Arrow
							able={!MenuBack}
							onClick={() => setMenuBack(true)}
						/>
					</_.MenuContainer>
					<_.MenuContent level={Math.ceil(MenuContentData[MenuIndex].length / 2)}>
						{
							MenuContentData[MenuIndex].map((v, i, arr) =>
								<MenuBox
									key={i}
									level={Math.ceil(arr.length / 2)}
									onClick={() => OrderChange(v.title, 1, v.money, v.img)}
									{...v}
								/>
							)
						}
					</_.MenuContent>
				</_.ContentBox>
				<_.Placard>
					<_.LeftBottomContent>
						<_.RecommendButton onClick={() => navigate('/recommend')}>메뉴 추천 받기</_.RecommendButton>
					</_.LeftBottomContent>
					<_.RightBottomContent>
						<_.BottomTitleBox>
							<_.BottomTitle>장바구니</_.BottomTitle>
						</_.BottomTitleBox>
						<_.BottomMenuBox>
							{
								OrderData.map((v, i) =>
									<MenuOrderBox
										key={i}
										title={v.title}
										amount={v.amount}
										OrderChange={OrderChange}
									/>
								)
							}
						</_.BottomMenuBox>
						<_.BottomOrderBox>
							<_.OrderButton onClick={() => setModalState(true)}>주문 취소</_.OrderButton>
							<_.OrderButton onClick={() => navigate('/bucket')}>주문하기</_.OrderButton>
						</_.BottomOrderBox>
					</_.RightBottomContent>
				</_.Placard>
			</_.Container>
		</>
	)
}

export default Main;
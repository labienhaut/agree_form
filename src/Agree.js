import React, {useRef, useState, useEffect} from 'react';
import CanvasDraw from "react-canvas-draw";
import './Agree.css';

const Agree = () => {

    const [username, setUsername] = useState('')
    const [birthday, setBirthday] = useState('')
    const [phonenum, setPhonenum] = useState('')
    const [dong, setDong] = useState('')
    const [hosu, setHosu] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [imgURL2, setImgURL2] = useState('')
    const [imgURL3, setImgURL3] = useState('')
    const [linkFlag, setlinkFlag] = useState(false)

    const canvasDrawRef = useRef();
    const canvasRef2 = useRef();
    const canvasRef3 = useRef();

    const onChangeUsername = e => {
        e.preventDefault();
        setUsername(e.currentTarget.value)
    }

    const onChangeBirthday = e => {
        e.preventDefault();
        setBirthday(e.currentTarget.value)
    }

    const onChangePhonenum = e => {
        e.preventDefault();
        setPhonenum(e.currentTarget.value)
    }

    const onChangeDong = e => {
        e.preventDefault();
        setDong(e.currentTarget.value)
    }

    const onChangeHosu = e => {
        e.preventDefault();
        setHosu(e.currentTarget.value)
    }

    const onChangeNickname = e => {
        e.preventDefault();
        setNickname(e.currentTarget.value)
    }

    const onChangeEmail = e => {
        e.preventDefault();
        setEmail(e.currentTarget.value)
    }

    useEffect(() => {
        let ctx2 = canvasRef2.current.getContext("2d")

        console.log("got agree2.png")
        const image1 = new Image();
        image1.src = "https://labienhaut.github.io/agree_form/agree2.png";
        image1.crossOrigin = 'Anonymous';
        image1.onload = () => {
            ctx2.drawImage(image1, 0, 0);
        };

        let ctx3 = canvasRef3.current.getContext("2d")

        console.log("got agree1.png")
        const image2 = new Image();
        image2.src = "https://labienhaut.github.io/agree_form/agree1.png";
        image2.crossOrigin = 'Anonymous';
        image2.onload = () => {
            ctx3.drawImage(image2, 0, 0);
        };
        
    }, []);

    useEffect(() => {
        console.log(username)
    }, [username]);

    useEffect(() => {
        let downloadBtnRef = document.getElementById("agree_down1")
        downloadBtnRef.href = imgURL2

        //let imgRef = document.getElementById("agree_img")
        //imgRef.src = imgURL2
    }, [imgURL2])

    useEffect(() => {
        let downloadBtnRef2 = document.getElementById("agree_down2")
        downloadBtnRef2.href = imgURL3

    }, [imgURL3])

    const handleSave = () => {
        //console.log("handleSave start")

        let ctx2 = canvasRef2.current.getContext("2d")
        let ctx3 = canvasRef3.current.getContext("2d")

        let imageURL = canvasDrawRef.current.canvasContainer.childNodes[1].toDataURL("image/png")

        const image2 = new Image();
        image2.src = imageURL
        image2.onload = () => {
            ctx2.drawImage(image2, 880, 1205);

            ctx2.font = '24px serif';
            ctx2.fillText(username, 844, 1272);
            ctx2.fillText(username, 185, 684);

            ctx2.font = '14px serif';
            ctx2.fillText(birthday, 313, 680);

            ctx2.font = '24px serif';
            ctx2.fillText(dong, 461, 684);
            ctx2.fillText(hosu, 573, 684);

            ctx2.font = '14px serif';
            ctx2.fillText(phonenum, 680, 682);
            ctx2.fillText(nickname, 853, 661);
            ctx2.fillText(email, 853, 691);

            const today = new Date();

            ctx2.font = '24px serif';

            const mm = today.getMonth() + 1
            const dd = today.getDate()
            ctx2.fillText(mm, 872, 1230);
            ctx2.fillText(dd, 954, 1230);

            /////////////////////////////////////////////////

            ctx3.drawImage(image2, 858, 1358);

            ctx3.font = '24px serif';
            ctx3.fillText(username, 803, 1461);
            ctx3.fillText(username, 180, 410);

            ctx3.font = '14px serif';
            ctx3.fillText(birthday, 313, 405);

            ctx3.font = '24px serif';
            ctx3.fillText(dong, 461, 410);
            ctx3.fillText(hosu, 573, 410);

            ctx3.font = '16px serif';
            ctx3.fillText(phonenum, 681, 405);

            ctx3.font = 'bold 15px serif';
            ctx3.fillText(nickname, 848, 395);
            ctx3.fillText(email, 848, 415);

            ctx3.font = 'bold 22px serif';
            ctx3.fillText('✓', 713, 1313);

            ctx3.font = '24px serif';
            ctx3.fillText(mm, 895, 1427);
            ctx3.fillText(dd, 967, 1427);

            const urlStr2 = ctx2.canvas.toDataURL("image/png")
            setImgURL2(urlStr2);

            const urlStr3 = ctx3.canvas.toDataURL("image/png")
            setImgURL3(urlStr3);
        };

        setlinkFlag(true)

        //console.log("linkFlag :")
        //console.log(linkFlag)
        //console.log("handleSave end")
    }

    return(
        
        <div align='a_bg'>
            <div className="a_content">
                <h1 align='center'>과천 푸르지오 라비엔오 <br></br> 입주예정자 협의회 <br></br>
                    동의서 및 위임장 작성</h1>
                이름 : <input type="text"
                        name="name"
                        placeholder="이름"
                        onChange={onChangeUsername}
                />
                <br></br>
                <br></br>
                생년월일 : <input type="text"
                        name="birthday"
                        placeholder="생년/월/일"
                        onChange={onChangeBirthday}
                />
                <br></br>
                <br></br>
                &nbsp; &nbsp; 동 : <input type="text"
                        name="dong"
                        placeholder="동"
                        onChange={onChangeDong}
                />
                <br></br>
                <br></br>
                호수 : <input type="text"
                        name="hosu"
                        placeholder="호수"
                        onChange={onChangeHosu}
                />
                <br></br>
                <br></br>
                전화번호 : <input type="text"
                        name="phonenum"
                        placeholder="전화번호"
                        onChange={onChangePhonenum}
                />
                <br></br>
                <br></br>
                카페 닉네임 : <input type="text"
                        name="nickname"
                        placeholder="카페 닉네임"
                        onChange={onChangeNickname}
                />
                <br></br>
                <br></br>
                이메일 주소 : <input type="text"
                        name="email"
                        placeholder="이메일 주소"
                        onChange={onChangeEmail}
                />
                <br></br>
                <br></br>
                <div align='center'>
                서명 : <br></br>
                </div>
                <div  style={{
                    width: "318px",
                    height: "150px",
                    border: "1px solid #272727"
                    }}>
                <CanvasDraw
                    ref={canvasDrawRef}
                    hideInterface 
                    hideGrid
                    background={"none"}
                    brushColor={"#000000"}
                    brushRadius={1}
                    lazyRadius={2}
                    canvasWidth={318}
                    canvasHeight={150}
                />
                <button onClick={handleSave}>
                    완료
                </button>
                &nbsp;&nbsp;
                <button
                    onClick={() => {
                        canvasDrawRef.current.clear();
                    }}
                >
                    삭제
                </button>
                &nbsp;&nbsp;
                <button
                    onClick={() => {
                        canvasDrawRef.current.undo();
                    }}
                >
                    Undo
                </button>

                <br></br>
                <br></br>

                    <div align='center' style={{ display: linkFlag === true ? 'block': 'none'}}>
                        <a href="" id="agree_down1" download='동의서.png'> 동의서 다운로드 </a>
                        &nbsp;&nbsp;
                        <a href="" id="agree_down2" download='위임장.png'> 위임장 다운로드 </a>
                    </div>
                    <br></br>
                    <div width='318px' height='100px'>

                    </div>
                    제공 : 아침향기
                </div> {/* for canvasdraw */}
            </div> {/* a_content */}
        <br></br>
        <br></br>

        <canvas ref={canvasRef2} width={1200} height={1694} style={{display: 'none'}}/>
        <canvas ref={canvasRef3} width={1200} height={1694} style={{display: 'none'}}/>

        {/*
        <div style={{
            visibility: "hidden"
            }}> 
        <img src="" id={"agree_img"}/>
        </div>
        */}
        </div>
    );
};

export default Agree;
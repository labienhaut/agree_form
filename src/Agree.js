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
            ctx3.fillText('???', 713, 1313);

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
                <h2 align='center' style={{marginTop: "10px"}}>?????? ???????????? ???????????? <br></br> ??????????????? ????????? <br></br>
                    ????????? ??? ????????? ??????</h2>
                ?????? : <input type="text"
                        name="name"
                        placeholder="??????"
                        onChange={onChangeUsername}
                />
                <br></br>
                ???????????? : <input type="text"
                        name="birthday"
                        placeholder="??????/???/???"
                        onChange={onChangeBirthday}
                        style={{marginTop: "10px"}}
                />
                <br></br>
                &nbsp; &nbsp; ??? : <input type="text"
                        name="dong"
                        placeholder="???"
                        onChange={onChangeDong}
                        style={{marginTop: "10px"}}
                />
                <br></br>
                ?????? : <input type="text"
                        name="hosu"
                        placeholder="??????"
                        onChange={onChangeHosu}
                        style={{marginTop: "10px"}}
                />
                <br></br>
                ???????????? : <input type="text"
                        name="phonenum"
                        placeholder="????????????"
                        onChange={onChangePhonenum}
                        style={{marginTop: "10px"}}
                />
                <br></br>
                ?????? ????????? : <input type="text"
                        name="nickname"
                        placeholder="?????? ?????????"
                        onChange={onChangeNickname}
                        style={{marginTop: "10px"}}
                />
                <br></br>
                ????????? ?????? : <input type="text"
                        name="email"
                        placeholder="????????? ??????"
                        onChange={onChangeEmail}
                        style={{marginTop: "10px"}}
                />
                <br></br>
                <div align='center' style={{marginTop: "15px"}}>
                ?????? : <br></br>
                </div>
                <div  style={{
                    width: "315px",
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
                    canvasWidth={315}
                    canvasHeight={150}
                />
                <button onClick={handleSave} style={{marginTop: "3px"}}>
                    ??????
                </button>
                &nbsp;&nbsp;
                <button
                    onClick={() => {
                        canvasDrawRef.current.clear();
                    }}
                    style={{marginTop: "3px"}}
                >
                    ??????
                </button>
                &nbsp;&nbsp;
                <button
                    onClick={() => {
                        canvasDrawRef.current.undo();
                    }}
                    style={{marginTop: "3px"}}
                >
                    Undo
                </button>

                <br></br>
                <br></br>

                    <div align='center' style={{ display: linkFlag === true ? 'block': 'none'}}>
                        <a href="" id="agree_down1" download='?????????.png'> ????????? ???????????? </a>
                        &nbsp;&nbsp;
                        <a href="" id="agree_down2" download='?????????.png'> ????????? ???????????? </a>
                    </div>
                    <br></br>
                    <div width='315px' height='100px'>

                    </div>
                    ?????? : ????????????, ver 0.0.3
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
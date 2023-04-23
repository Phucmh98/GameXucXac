/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import './BaiTapGameXucSac.css';
import XucXac from './XucXac';
import ThongTinTroChoi from './ThongTinTroChoi';
import { connect } from 'react-redux';

class BaiTapGameXucSac
    extends Component {
    render() {
        return (
            <div className='game' >
                <div className="title-game text-center mt-5 display-4">
                    GAME ĐỔ XÚC XẮC
                </div>
                <div className='row text-center mt-5'>
                    <div className='col-5'>
                        <button onClick={() => { this.props.datCuoc(true) }} className='btnGame'>TÀI</button>
                    </div>
                    <div className='col-2'>
                        <XucXac />

                    </div>
                    <div className='col-5'>
                        <button onClick={() => { this.props.datCuoc(false) }} className='btnGame'>XỈU</button>
                    </div>
                </div>
                <div className='thongTinTroChoi text-center'>
                    <ThongTinTroChoi />
                    <button className='btn btn-success p-2 display-2 mt-5' onClick={() => {
                        this.props.playGame()
                    }}>Play game</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            //Tạo action tài xỉu
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            //gủi lên reducer
            dispatch(action);
        },
        playGame: () => {
            //GỬI DỮ LIỆU TYPE PLAY_GAME lên reducer
            dispatch({
                type:'PLAY_GAME'
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapGameXucSac)
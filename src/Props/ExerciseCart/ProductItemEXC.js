import React, { Component } from 'react'

export default class ProductItemEXC extends Component {

    render() {
        let { sanPhamProps } = this.props;
        return (
            <div className="card text-left">
                <img style={{width:300,height:300}} className="card-img-top" src={sanPhamProps.hinhAnh} alt={sanPhamProps.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{sanPhamProps.tenSP}</h4>
                    <p className="card-text">{sanPhamProps.giaBan.toLocaleString()}</p>
                    <button className='btn btn-success' onClick={()=>{this.props.themGioHang(sanPhamProps)}}>Thêm giỏ hàng</button>
                </div>
            </div>

        )
    }
}

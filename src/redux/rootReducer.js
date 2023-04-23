import { combineReducers } from "redux";
import BaiTapGioHangReducer from '../redux/BaiTapGioHangReducer';
import BaiTapGameXucXacReducer from "./BaiTapXucXacReducer";

const rootReducer = combineReducers({//Store tổng của ứng dụng
    stateGioHang:BaiTapGioHangReducer,//State giỏ hàng
    BaiTapGameXucXacReducer //state baiTapGame
})
export default rootReducer;
import { getStock } from "../redux/stock/stockSlice"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";


export default function Stock(){
    const { stock } = useSelector((state) => state.stock);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStock());
  }, [dispatch]);
  console.log(stock)


}
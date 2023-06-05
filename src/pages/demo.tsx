import './demo.less';
import analyse from '../../public/img/analyse.png';

interface ItemTitleProps {
    title: string;
}
const ItemTitle = (props: ItemTitleProps) => {
    return <div className="item-title">{ props.title }</div>
}

const AnalyseItem = () => {
    return <div className="analyse-item">
        <img src={analyse} />
        <div className='analyse-wrapper'>
            <p className='analyse-title'>提供单位数</p>
            <p className='analyse-num'>1497</p>
        </div>
    </div>
}

const Demo = () => <div className='demo'>
    <div className="header">
        <div className="header-tools">
            <div className="left-tool">1</div>
            <div className="right-tool">2</div>
        </div>
    </div>
    <div className="fixed-box left">
        <ItemTitle title='温江区迁入迁出驻留分析' />
        <div className="container">
            < AnalyseItem />
            < AnalyseItem />
            < AnalyseItem />
        </div>
    </div>
    {/* <div className="fixed-box right">right</div> */}
    {/* <p style={{ background: 'red', height: '100px', color: 'yellow' }}>1234567</p> */}
</div>;

export default Demo;
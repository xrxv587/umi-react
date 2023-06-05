import './demo.less';
import analyse from '../../public/img/analyse.png';

interface ItemTitleProps {
    title: string;
    [key: string]: any
}
const ItemTitle = (props: ItemTitleProps) => {
    return <div {...props} className="item-title">{ props.title }</div>
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
        <div className="switch">
            <div className="switch-item active">驻留人口分析</div>
            <div className="switch-item">迁入人口分析</div>
            <div className="switch-item">迁出人口分析</div>
        </div>
        <ItemTitle style={{ marginTop: '15px' }} title='年龄分布' />
        <div style={{height: '200px', backgroundColor: 'cadetblue', marginTop: '28px'}}>
            柱状图折线图堆叠
        </div>
        <div className='rank-distribute'>
            <div className='rank'>
                <ItemTitle title='城市排名' />
            </div>
            <div className='distribute'>
                <ItemTitle title='人口分布' />
            </div>
        </div>
    </div>
    {/* <div className="fixed-box right">right</div> */}
    {/* <p style={{ background: 'red', height: '100px', color: 'yellow' }}>1234567</p> */}
</div>;

export default Demo;
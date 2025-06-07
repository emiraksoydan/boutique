import ProductCardComponent from "./ProductCardComponent";



type GridSectionProps = {
    items: { id: number; title: string; image: string, productName: string }[];
};

const GridSection: React.FC<GridSectionProps> = ({ items }) => {

    return (
        <div className="container m-0 p-0">
            <div className="row m-0 p-0">
                {items.map((item, index) => (
                    <div key={item.id} className="col-md-3 col-sm-12 mt-3">
                        <ProductCardComponent id={index} title={item.title} productName={item.productName} image={item.image} ></ProductCardComponent>
                    </div>
                )
                )}
            </div>
        </div>
    );
};
export default GridSection;
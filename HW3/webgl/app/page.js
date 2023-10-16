import VectorKedua from "./vector 2"
import VectorKesatu from "./vector1"


const Page = () => {
    return (
        <div>
            <h1 className="text-center">Grafika Komputer</h1>
            <p className="text-style">Tugas 3 Menghitung Vector dengan Algoritma DDA</p>
            <div className="canvas-style">
                <VectorKesatu/>
            </div>
            <div>
                <VectorKedua/>
            </div>
        </div>

    )
}

export default Page
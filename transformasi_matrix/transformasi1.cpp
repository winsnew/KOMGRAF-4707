#include <iostream>
#include <cmath>

using namespace std;

// Fungsi untuk melakukan perkalian matriks
void perkalianMatrix(double result[3][1], double matrix1[3][3], double matrix2[3][1]) {
    for (int i = 0; i < 3; ++i) {
        result[i][0] = 0;
        for (int j = 0; j < 3; ++j) {
            result[i][0] += matrix1[i][j] * matrix2[j][0];
        }
    }
}

// Fungsi untuk menghitung matriks rotasi
void rotasiMatrix(double matrix[3][3], double theta) {
    matrix[0][0] = cos(theta);
    matrix[0][1] = -sin(theta);
    matrix[1][0] = sin(theta);
    matrix[1][1] = cos(theta);
    matrix[2][2] = 1;
}

int main() {
    int pilih;
    char lagi;

    // Matriks operasi yang akan digunakan
    double operasiMatrix[3][3] = {
        {1, 0, 0},
        {0, 1, 0},
        {0, 0, 1} // Identitas untuk operasi translasi awal
    };
	
    do {
        cout << "Pilih Transformasi matriks:" << endl;
        cout << "1. Translasi" << endl;
        cout << "2. Rotasi" << endl;
        cout << "3. Scaling" << endl;
        cout << "Masukkan nomor operasi transformasi matriks yang diinginkan: ";
        cin >> pilih;

        double tx, ty, sx, sy, theta;

        // Matriks input pertama (matrix1)
        double matrix1[3][3] = {0};
        cout << "Masukkan elemen matriks pertama (3x3):" << endl;
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                cout << "Baris ke-" << i + 1 << ", Kolom ke-" << j + 1 << ": ";
                cin >> matrix1[i][j];
            }
        }

        switch (pilih) {
        case 1: // Translasi
            cout << "Masukkan translasi pada (tx): ";
            cin >> tx;
            cout << "Masukkan translasi pada (ty): ";
            cin >> ty;
            operasiMatrix[0][2] = tx;
            operasiMatrix[1][2] = ty;
            break;
        case 2: // Rotasi
            cout << "Masukkan sudut rotasi: ";
            cin >> theta;
            theta = theta * M_PI / 180.0; // Mengonversi sudut ke radian
            rotasiMatrix(operasiMatrix, theta);
            break;
        case 3: // Scaling
            cout << "Masukkan skala pada (sx): ";
            cin >> sx;
            cout << "Masukkan skala pada (sy): ";
            cin >> sy;
            operasiMatrix[0][0] = sx;
            operasiMatrix[1][1] = sy;
            break;
        default:
            cout << "Pilihan operasi transformasi matriks tidak valid." << endl;
            break;
        }
        
		// Matriks input kedua (matrix2)
    	double matrix2[3][1] = {0};
    	cout << "Masukkan elemen matriks kedua (3x1):" << endl;
    	for (int i = 0; i < 3; ++i) {
        cout << "Baris ke-" << i + 1 << ": ";
        cin >> matrix2[i][0];
    	}

    	// Matriks titik koordinat hasil
    	double hasilMatrix[3][1] = {0};

    	// Melakukan operasi yang dipilih
    	perkalianMatrix(hasilMatrix, operasiMatrix, matrix2);

    	// Menampilkan hasil
    	cout << "Koordinat hasil operasi:" << endl;
    	for (int i = 0; i < 3; ++i) {
        cout << hasilMatrix[i][0] << endl;
    	}
        cout << "Pilih operasi transformasi matriks lagi (y/t): ";
        cin >> lagi;
    } while (lagi == 'y' || lagi == 'Y');

    return 0;
}
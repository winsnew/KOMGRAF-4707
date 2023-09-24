#include <iostream>
#include <vector>

using namespace std;

// Fungsi untuk menginput matriks 2x2
vector<vector<int>> inputMatriks() {
    vector<vector<int>> matriks(2, vector<int>(2, 0));
    cout << "Masukkan elemen-elemen matriks 2x2:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cin >> matriks[i][j];
        }
    }
    return matriks;
}

// Fungsi untuk menampilkan matriks
void tampilkanMatriks(const vector<vector<int>>& matriks) {
    for (const auto& row : matriks) {
        for (int elem : row) {
            cout << elem << " ";
        }
        cout << endl;
    }
}

// Fungsi untuk penjumlahan dua matriks
vector<vector<int>> tambahMatriks(const vector<vector<int>>& A, const vector<vector<int>>& B) {
    int m = A.size();
    int n = A[0].size();
    vector<vector<int>> C(m, vector<int>(n, 0));

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }

    return C;
}

// Fungsi untuk pengurangan dua matriks
vector<vector<int>> kurangMatriks(const vector<vector<int>>& A, const vector<vector<int>>& B) {
    int m = A.size();
    int n = A[0].size();
    vector<vector<int>> C(m, vector<int>(n, 0));

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            C[i][j] = A[i][j] - B[i][j];
        }
    }

    return C;
}

// Fungsi untuk perkalian dua matriks
vector<vector<int>> kaliMatriks(const vector<vector<int>>& A, const vector<vector<int>>& B) {
    int m1 = A.size();
    int n1 = A[0].size();
    int m2 = B.size();
    int n2 = B[0].size();

    if (n1 != m2) {
        cout << "Error: Dimensi matriks tidak sesuai untuk perkalian." << endl;
        return vector<vector<int>>();
    }

    vector<vector<int>> C(m1, vector<int>(n2, 0));

    for (int i = 0; i < m1; i++) {
        for (int j = 0; j < n2; j++) {
            for (int k = 0; k < n1; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return C;
}

int main() {
    vector<vector<int>> matriksA, matriksB, hasilTambah, hasilKurang, hasilKali;

    cout << "Masukkan matriks A:" << endl;
    matriksA = inputMatriks();

    cout << "Masukkan matriks B:" << endl;
    matriksB = inputMatriks();

    cout << "Matriks A:" << endl;
    tampilkanMatriks(matriksA);

    cout << "Matriks B:" << endl;
    tampilkanMatriks(matriksB);

    hasilTambah = tambahMatriks(matriksA, matriksB);
    hasilKurang = kurangMatriks(matriksA, matriksB);
    hasilKali = kaliMatriks(matriksA, matriksB);

    cout << "Hasil Penjumlahan Matriks A dan B:" << endl;
    tampilkanMatriks(hasilTambah);

    cout << "Hasil Pengurangan Matriks A dan B:" << endl;
    tampilkanMatriks(hasilKurang);

    cout << "Hasil Perkalian Matriks A dan B:" << endl;
    tampilkanMatriks(hasilKali);

    return 0;
}

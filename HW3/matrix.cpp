#include <iostream>

using namespace std;

int determinant(int a, int b, int c, int d) {
    return (a * d) - (b * c);
}

int main() {
    int a11 = 10, a12 = 1, a21 = 4, a22 = 1;
    int b11 = 2, b12 = 10, b21 = 8, b22 = 12;
    int detA = determinant(a11, a12, a21, a22);
    int detB = determinant(b11, b12, b21, b22);

    cout << "Determinan matrix A: " << detA << endl;
    cout << "Determinant matrix B: "<< detB << endl;

    return 0;
}
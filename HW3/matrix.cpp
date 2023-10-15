#include <iostream>

using namespace std;

void DDA(int x1, int y1, int x2, int y2) {
    
    int steps = abs(x2 - x1) > abs(y2 - y1) ? abs(x2 - x1) : abs(y2 - y1);

    
    float deltaX = (x2 - x1) / (float)steps;
    float deltaY = (y2 - y1) / (float)steps;

    
    float x = x1;
    float y = y1;

    // titik awal
    cout << "Titik awal: (" << x1 << ", " << y1 << ")" << endl;

    // titik-titik selanjutnya
    for (int i = 0; i < steps; i++) {
        x += deltaX;
        y += deltaY;
        cout << "Titik ke-" << i + 1 << ": (" << round(x) << ", " << round(y) << ")" << endl;
    }
}

int main() {
    // Matriks A
    int ax1 = 10, ay1 = 1, ax2 = 4, ay2 = 1;

    // Matriks B
    int bx1 = 2, by1 = 10, bx2 = 8, by2 = 12;

    
    cout << "Matriks A:" << endl;
    DDA(ax1, ay1, ax2, ay2);

    
    cout << "\nMatriks B:" << endl;
    DDA(bx1, by1, bx2, by2);

    return 0;
}

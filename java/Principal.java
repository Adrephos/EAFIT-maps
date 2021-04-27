import java.util.ArrayList;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        new Bloque(7, "Carnetización", 7, 7, 7);
        new Bloque(29, "Admisiones", 7, 7, 7);
        new Bloque(32, "Biblioteca", 7, 7, 7);
        new Bloque(38, "Humanidades", 7, 7, 7);
        Scanner scan = new Scanner(System.in);
        ArrayList<Bloque> ResultadosBusq = Bloque.Busqueda(scan.nextInt());
        for (int i = 0; i < ResultadosBusq.size(); i++) {
            System.out.println(
                    "Bloque " + ResultadosBusq.get(i).getNumero() + ": " + ResultadosBusq.get(i).getDescripcion());
        }
    }
}

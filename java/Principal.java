import java.util.ArrayList;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Bloque.crearBloques();
        Scanner scan = new Scanner(System.in);
        ArrayList<Bloque> ResultadosBusq = Bloque.Busqueda(scan.next());
        for (int i = 0; i < ResultadosBusq.size(); i++) {
            System.out.println(
                    "Bloque " + ResultadosBusq.get(i).getNumero() + ": " + ResultadosBusq.get(i).getDescripcion());
        }
    }
}

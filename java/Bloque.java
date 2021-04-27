import java.util.ArrayList;

public class Bloque {
    private String Descripcion;
    private int Numero;
    private double x;
    private double y;
    private double z;
    private static ArrayList<Bloque> ListaBloques= new ArrayList<Bloque>();

    public Bloque(int Numero, String Descripcion,  double x, double y, double z) {
        this.Numero = Numero;
        this.Descripcion = Descripcion;
        this.x = x;
        this.y = y;
        this.z = z;
        ListaBloques.add(this);
    }

    public static ArrayList<Bloque> Busqueda(int n) {
        ArrayList<Bloque> BloquesEncontrados = new ArrayList<Bloque>();
        for (int i = 0; i < Bloque.getListaBloques().size(); i++) {
            if (Bloque.getListaBloques().get(i).getNumero() == n) {
                BloquesEncontrados.add(Bloque.getListaBloques().get(i));
            }
        }
        if (BloquesEncontrados.size() == 0) {
            System.out.println("La Búsqueda no arrojó resultados");
        }
        return BloquesEncontrados;
    }

    
    public void setNumero(int numero) {
        Numero = numero;
    }
    public void setDescripcion(String Descripcion) {
        this.Descripcion = Descripcion;
    }
    public void setX(double x) {
        this.x = x;
    }
    public void setY(double y) {
        this.y = y;
    }
    public void setZ(double z) {
        this.z = z;
    }

    public int getNumero() {
        return Numero;
    }
    public String getDescripcion() {
        return this.Descripcion;
    }
    public double getX() {
        return this.x;
    }
    public double getY() {
        return this.y;
    }
    public double getZ() {
        return this.z;
    }

    public static ArrayList<Bloque> getListaBloques() {
        return Bloque.ListaBloques;
    }
    

    
}

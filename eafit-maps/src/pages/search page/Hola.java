import javax.swing.*;
public class applet extends JApplet
{
	private JLabel etiqueta = new JLabel("Hola");
	public void init()
	{
		add(etiqueta);
	}

	public void cambia()
	{
		etiqueta.setText("Adios");
	}
}
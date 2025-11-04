package tp;

	public class Temps {
		private int h;
		private int m;
		private int s;

		public Temps(int h)
		{ this.h=h;}

		public Temps(int h ,int m) {
			this.h=h;
			this.m=m;
			}

		public Temps(int h,int m, int s ) {
			this.h=h; 
			this.m=m;
			this.s=s;
		}
		public void affiche() {
			System.out.println("il est "+h+"heure "+m+"minute"+"secondes"+s);
			
		}
		public static void main(String[] args) {
			Temps t =new Temps(10);
			t.affiche();
			t=new Temps(10,12);
			t.affiche();
			t=new Temps(10,12,45);
			t.affiche();
			
		}
			
		}


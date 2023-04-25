namespace Geometry {
	export class Point2D {
		public x:number
		public y:number
		
		constructor( x:number, y:number ){
			this.x = x
			this.y = y
		}

		toString():string {
			return `(${this.x},${this.y})`
		}
		
		computeDistanceTo( p: Point2D ):number {
			return Math.sqrt( Math.pow( p.x - this.x , 2 ) + Math.pow( p.y - this.y , 2) )
		}
	}

	export class Point3D extends Point2D {
		public z:number

		constructor( x:number, y:number, z:number ){
			super( x, y )
			this.z = z
		}

		toString():string {
			return `(${this.x},${this.y},${this.z})`
		}
	}
}

package helper;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class Helper {
	
	public static WebDriver driver = new ChromeDriver();
	
	public WebDriver getDriver(){
		return driver;
	}
	
	public void waitLoop(WebElement element) throws Exception{
		for(int second = 0; second<60;second++){
				Thread.sleep(1000);
				if(element.isDisplayed()){				
					break;
				}
		}	
	}
	
	public void browserNavigate() throws Exception{
		driver.manage().window().maximize();
		driver.get("https://www.airtasker.com/");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[@id='menu-user']/a[1]")).click();
	}

}

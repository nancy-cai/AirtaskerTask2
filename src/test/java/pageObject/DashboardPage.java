package pageObject;
import org.openqa.selenium.WebDriver;
import static org.junit.Assert.assertEquals;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import helper.Helper;

public class DashboardPage {
	
	public static WebDriver driver;
	Helper wait = new Helper();
	
	public DashboardPage(WebDriver driver) {
		this.driver = driver; 
        PageFactory.initElements(driver, this);
	}
	
	public void checkGreetingMsg(String name) throws Throwable {   
		wait.waitLoop(dashboard);
	    String greetMsg = dashboard.getText();
	    assertEquals("What do you need done today "+ name+"?", greetMsg);
	    Thread.sleep(3000);
	}
	
	public void clickLogout() throws Throwable{
		avatar.click();
		logout.click();
		Thread.sleep(2000);
	}
	
	@FindBy(className="dashboard-title")
	WebElement dashboard;
	
	@FindBy(className="avatar")
	WebElement avatar;
	
	@FindBy(className="logout")
	WebElement logout;
	
}
